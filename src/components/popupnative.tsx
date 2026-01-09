"use client";

import { useEffect, useRef, useMemo } from "react";

interface AdXBannerProps {
  adUnitPath?: string;
  divId?: string;
}

// Track which ad slots have been initialized globally
const initializedSlots = new Set<string>();

// Counter for auto-generated IDs
let adCounter = 0;

export default function Popupnative({
  adUnitPath = "/23287200353/quiz1popup",
  divId,
}: AdXBannerProps) {
  // Generate a unique ID if none provided
  const uniqueDivId = useMemo(() => {
    if (divId) return divId;
    adCounter++;
    return `div-gpt-ad-popup-${adCounter}-${Date.now()}`;
  }, [divId]);

  const adContainerRef = useRef<HTMLDivElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Prevent duplicate ad loading
    if (isAdLoaded.current || initializedSlots.has(uniqueDivId)) return;

    const loadAd = () => {
      if (typeof window === "undefined") return;

      // Ensure googletag exists
      if (!window.googletag) {
        window.googletag = { cmd: [] };
      }

      const gt = window.googletag;

      gt.cmd.push(() => {
        if (!gt.defineSlot) return;

        // Check if slot already exists
        if (initializedSlots.has(uniqueDivId)) return;

        // Define slot with fixed 300x250 for popup
        const slot = gt.defineSlot(adUnitPath, [300, 250], uniqueDivId);

        // Attach services safely
        const pubads = gt.pubads?.();
        if (slot && pubads && slot.addService) {
          slot.addService(pubads);
        }

        // Enable services once (only for first ad)
        if (initializedSlots.size === 0) {
          pubads?.enableSingleRequest?.();
          pubads?.collapseEmptyDivs?.();
          gt.enableServices?.();
        }

        // Display ad
        gt.display?.(uniqueDivId);

        // Mark as initialized
        initializedSlots.add(uniqueDivId);
        isAdLoaded.current = true;
      });
    };

    // Since script is already loaded in layout, just call loadAd
    loadAd();

    // Cleanup on unmount
    return () => {
      initializedSlots.delete(uniqueDivId);
      isAdLoaded.current = false;
    };
  }, [adUnitPath, uniqueDivId]);

  return (
    <div className="w-full flex items-center justify-center">
      <div 
        id={uniqueDivId} 
        ref={adContainerRef}
        className="min-h-[250px] w-[300px]"
      />
    </div>
  );
}