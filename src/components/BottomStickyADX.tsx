"use client";

import { useEffect, useRef, useMemo } from "react";

// 1. Define strict types locally to override missing definitions
interface IGoogletag {
  cmd: Array<() => void>;
  defineOutOfPageSlot: (
    adUnitPath: string,
    format: number // enum is technically a number
  ) => { addService: (service: unknown) => void } | null;
  enums: {
    OutOfPageFormat: {
      TOP_ANCHOR: number;
      BOTTOM_ANCHOR: number;
    };
  };
  pubads: () => {
    enableSingleRequest: () => void;
    collapseEmptyDivs: () => void;
    getSlots: () => unknown[];
  };
  enableServices: () => void;
  display: (slot: unknown) => void;
}

interface StickyAdProps {
  adUnitPath?: string;
  divId?: string;
  position?: "top" | "bottom";
  responsive?: boolean;
}

// Track which ad slots have been initialized globally
const initializedSlots = new Set<string>();

// Counter for auto-generated IDs
let stickyAdCounter = 0;

export default function StickyAd({
  adUnitPath = "/23287200353/quiz1sticky",
  divId,
  position = "bottom",
  responsive = true
}: StickyAdProps) {
  // Generate a unique ID
  const uniqueDivId = useMemo(() => {
    if (divId) return divId;
    stickyAdCounter++;
    return `div-gpt-ad-sticky-${position}-${stickyAdCounter}-${Date.now()}`;
  }, [divId, position]);

  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Prevent duplicate ad loading
    if (isAdLoaded.current || initializedSlots.has(uniqueDivId)) return;

    const loadAd = () => {
      try {
        if (typeof window === 'undefined') return;

        // Initialize googletag
        // We cast to 'unknown' first to strip existing types, then to our Custom Interface
        const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

        googletag.cmd.push(() => {
          // Safety check using the properly typed variable
          if (!googletag.defineOutOfPageSlot) return;

          // Check if slot already exists
          if (initializedSlots.has(uniqueDivId)) return;

          // 1. Determine the Google OutOfPage Format
          const format = position === "top" 
            ? googletag.enums.OutOfPageFormat.TOP_ANCHOR 
            : googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR;

          // 2. Define the Out-of-Page Slot
          const slot = googletag.defineOutOfPageSlot(
            adUnitPath,
            format
          );

          if (slot) {
             const pubads = googletag.pubads?.();
             if (pubads) {
               slot.addService(pubads);
             }
          }

          // Enable services (only once for first ad)
          if (initializedSlots.size === 0) {
            const pubads = googletag.pubads?.();
            if (pubads) {
              pubads.enableSingleRequest?.();
              pubads.collapseEmptyDivs?.();
            }
            googletag.enableServices?.();
          }

          // Display the ad
          googletag.display?.(slot);

          // Mark this slot as initialized
          initializedSlots.add(uniqueDivId);
          isAdLoaded.current = true;
        });
      } catch (e) {
        console.error(`Error loading sticky AdX ad (${uniqueDivId}):`, e);
      }
    };

    loadAd();

    // Cleanup on unmount
    return () => {
      initializedSlots.delete(uniqueDivId);
      isAdLoaded.current = false;
    };
  }, [adUnitPath, uniqueDivId, responsive, position]);

  const positionClasses = position === "top" ? "top-0" : "bottom-0";

  return (
    <div 
      className={`fixed ${positionClasses} left-0 right-0 z-50 pointer-events-none`}
      style={{ maxWidth: '100%', margin: '0 auto' }}
    >
      <div className="w-full flex items-center justify-center p-2 pointer-events-auto">
        <div 
          id={uniqueDivId} 
          className="min-h-[1px] w-full flex items-center justify-center"
        />
      </div>
    </div>
  );
}