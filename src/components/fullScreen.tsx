"use client";

import { useEffect, useRef } from "react";

// 1. Define strict types locally to prevent TypeScript errors
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

// Track initialization globally
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
    // 1. Basic Checks
    if (!show) return;
    if (isAdLoaded.current) return;
    if (typeof window === "undefined") return;
    
    // Check Session (Don't show if already shown this session)
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // 2. Initialize GPT
    const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

    googletag.cmd.push(() => {
      // Safety Check
      if (!googletag.defineOutOfPageSlot) return;

      // Prevent defining the same slot twice
      if (initializedSlots.has(adUnitPath)) return;

      // 3. Define the Out-of-Page Interstitial Slot
      const slot = googletag.defineOutOfPageSlot(
        adUnitPath,
        googletag.enums.OutOfPageFormat.INTERSTITIAL
      );

      // 4. Standard Service setup
      if (slot) {
        const pubads = googletag.pubads?.();
        if (pubads) {
          slot.addService(pubads);

          // Optional: Listen for when the ad closes to trigger your parent onClose logic
          // (Google Interstitials are hard to track 'close' events for, but this helps cleanup)
          pubads.addEventListener?.("slotOnload", () => {
             // Mark as shown when loaded
             sessionStorage.setItem(SESSION_KEY, "1");
          });
        }
      }

      // 5. Enable Services (Once)
      if (initializedSlots.size === 0) {
        googletag.pubads?.().enableSingleRequest?.();
        googletag.enableServices?.();
      }

      // 6. Display (Triggers the Google Overlay)
      // For OutOfPage, we display the slot object itself
      if (slot) {
        googletag.display(slot);
      }

      initializedSlots.add(adUnitPath);
      isAdLoaded.current = true;
    });

    // Cleanup not typically needed for OOP as Google manages the lifecycle
  }, [show]);

  // We return NULL because Google creates its own Fullscreen UI
  // Your custom overlay/divs are no longer needed.
  return null;
}