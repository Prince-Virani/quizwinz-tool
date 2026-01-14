"use client";

import { useEffect, useRef } from "react";

interface ISlot {
  addService: (service: unknown) => void;
}

interface IGoogletag {
  cmd: Array<() => void>;
  defineOutOfPageSlot: (
    adUnitPath: string,
    format: number
  ) => ISlot | null;
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

// Global map to store slots - persists across component remounts
const globalSlots = new Map<string, unknown>();

export default function FullscreenAd({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const adUnitPath = "/23287200353/quiz1Inter";
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!show) return;

    if (typeof window === "undefined") return;

    const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

    googletag.cmd.push(() => {
      let slot = globalSlots.get(adUnitPath) as ISlot | undefined;

      // Only define the slot if it hasn't been defined before
      if (!slot) {
        const newSlot = googletag.defineOutOfPageSlot(
          adUnitPath,
          googletag.enums.OutOfPageFormat.INTERSTITIAL
        );

        if (newSlot) {
          const pubads = googletag.pubads?.();
          if (pubads) {
            newSlot.addService(pubads);
            
            pubads.addEventListener?.("slotOnload", () => {
              console.log("Interstitial Loaded");
            });
          }

          // Enable services only once
          if (!hasInitialized.current) {
            googletag.pubads?.().enableSingleRequest?.();
            googletag.enableServices?.();
            hasInitialized.current = true;
          }

          // Store the slot globally so we don't redefine it
          globalSlots.set(adUnitPath, newSlot);
          slot = newSlot;
        }
      }

      // Display the slot (this can be called multiple times)
      if (slot) {
        googletag.display(slot);
      }
    });

    // Delay closing to allow ad to render
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [show, onClose]);

  return null;
}