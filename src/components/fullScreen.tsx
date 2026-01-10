"use client";

import { useEffect, useRef } from "react";

interface IGoogletag {
  cmd: Array<() => void>;
  defineOutOfPageSlot: (
    adUnitPath: string,
    format: number
  ) => { addService: (service: unknown) => void } | null;
  enums: {
    OutOfPageFormat: {
      INTERSTITIAL: number;
    };
  };
  pubads: () => {
    enableSingleRequest?: () => void;
    collapseEmptyDivs?: () => void;
    addEventListener?: (event: string, callback: () => void) => void;
  };
  enableServices: () => void;
  display: (slot: unknown) => void;
  destroySlots: (slots?: unknown[]) => void;
}

const SESSION_KEY = "quiz_interstitial_shown";

// We use a global set to prevent double-definitions, 
// but we will manage deletion carefully.
const initializedSlots = new Set<string>();

export default function FullscreenAd({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const adUnitPath = "/23287200353/quiz1Inter";
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (!show) return;

    // 1. DO NOT call onClose() immediately here.
    // It kills the component too fast.

    if (isAdLoaded.current) return;
    if (typeof window === "undefined") return;

    // Optional: Comment this out if you want to test the ad repeatedly 
    // without closing/reopening the browser.
   /* if (sessionStorage.getItem(SESSION_KEY)) {
        // If already shown, just close the trigger and exit
        onClose();
        return;
    } */

    const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

    googletag.cmd.push(() => {
      // Prevent duplicate definition attempts in the same "session"
      if (initializedSlots.has(adUnitPath)) {
          // If we already defined it, just try to display it again (or refresh)
          // But for Interstitials, it's safer to just let it be.
          return;
      }

      const slot = googletag.defineOutOfPageSlot(
        adUnitPath,
        googletag.enums.OutOfPageFormat.INTERSTITIAL
      );

      if (slot) {
        const pubads = googletag.pubads?.();
        if (pubads) {
          slot.addService(pubads);
          
          pubads.addEventListener?.("slotOnload", () => {
             sessionStorage.setItem(SESSION_KEY, "1");
             console.log("Interstitial Loaded");
          });
        }
      }

      if (initializedSlots.size === 0) {
        googletag.pubads?.().enableSingleRequest?.();
        googletag.enableServices?.();
      }

      if (slot) {
        googletag.display(slot);
        initializedSlots.add(adUnitPath);
        isAdLoaded.current = true;
      }
    });

    // 2. DELAY THE RESET
    // We wait 1 second before turning off the 'trigger'. 
    // This gives the script time to run without killing the slot.
    const timer = setTimeout(() => {
        onClose();
    }, 1000);

    // 3. CLEANUP
    return () => {
        clearTimeout(timer);
        // CRITICAL FIX: We DO NOT call destroySlots([slot]) here.
        // If we destroy it, the ad overlay might disappear or fail to render.
        // We only remove it from our "initialized" tracker so we can try again next time if needed.
        initializedSlots.delete(adUnitPath);
        isAdLoaded.current = false;
    };
  }, [show, onClose]);

  return null;
}