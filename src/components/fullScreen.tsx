"use client";

import { useEffect, useRef } from "react";

// Define strict types locally
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
}

const SESSION_KEY = "quiz_interstitial_shown";
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
    
    // 1. Reset the parent trigger immediately. 
    // This fixes the "unused var" error AND allows the ad to be triggered again later.
    onClose();

    if (isAdLoaded.current) return;
    if (typeof window === "undefined") return;
    
    // Check Session (Don't show if already shown this session)
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Initialize GPT
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

    googletag.cmd.push(() => {
      // Safety Check
      if (!googletag.defineOutOfPageSlot) return;

      // Prevent defining the same slot twice
      if (initializedSlots.has(adUnitPath)) return;

      // Define the Out-of-Page Interstitial Slot
      const slot = googletag.defineOutOfPageSlot(
        adUnitPath,
        googletag.enums.OutOfPageFormat.INTERSTITIAL
      );

      if (slot) {
        const pubads = googletag.pubads?.();
        if (pubads) {
          slot.addService(pubads);
          
          // Mark as shown when loaded
          pubads.addEventListener?.("slotOnload", () => {
             sessionStorage.setItem(SESSION_KEY, "1");
          });
        }
      }

      if (initializedSlots.size === 0) {
        googletag.pubads?.().enableSingleRequest?.();
        googletag.enableServices?.();
      }

      if (slot) {
        googletag.display(slot);
      }

      initializedSlots.add(adUnitPath);
      isAdLoaded.current = true;
    });

  }, [show, onClose]); // Added onClose to dependency array

  return null;
}