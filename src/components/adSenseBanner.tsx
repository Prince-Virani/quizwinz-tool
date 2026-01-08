"use client";

import { useEffect, useRef, useMemo } from "react";



interface AdXBannerProps {
  adUnitPath?: string;
  divId?: string;
  responsive?: boolean;
}

// Track which ad slots have been initialized globally
const initializedSlots = new Set<string>();

// Counter for auto-generated IDs
let adCounter = 0;

export default function AdSenseBanner({
  adUnitPath = "/23287200353/quiz1native",
  divId,
  responsive = true
}: AdXBannerProps) {
  // Generate a unique ID if none provided
  const uniqueDivId = useMemo(() => {
    if (divId) return divId;
    adCounter++;
    return `div-gpt-ad-auto-${adCounter}-${Date.now()}`;
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
    // Guard defineSlot
    if (!gt.defineSlot) return;

    // Build size mapping safely
    const mappingBuilder = gt.sizeMapping?.();
    const mapping = mappingBuilder
      ?.addSize?.([0, 0], [[300, 250], [320, 50], [320, 100]])
      ?.addSize?.([750, 0], [[300, 250], [728, 90]])
      ?.addSize?.([1050, 0], [[300, 250], [728, 90], [970, 90]])
      ?.build?.();

    // Define slot
    const slot = gt.defineSlot(
      adUnitPath,
      [[300, 250], [320, 50], [320, 100], [728, 90], [970, 90]],
      uniqueDivId
    );

    // Attach services safely
    const pubads = gt.pubads?.();
    if (slot && pubads) {
      if (mapping && slot.defineSizeMapping) {
        slot.defineSizeMapping(mapping);
      }
      slot.addService?.(pubads);
    }

    // Enable services once
    gt.enableServices?.();

    // Display ad
    gt.display?.(uniqueDivId);
  });
};


    // Load the GPT library if not already loaded
    if (!document.querySelector('script[src*="securepubads.g.doubleclick.net"]')) {
      const script = document.createElement('script');
      script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = loadAd;
      document.head.appendChild(script);
    } else {
      loadAd();
    }

    // Cleanup on unmount
    return () => {
      initializedSlots.delete(uniqueDivId);
      isAdLoaded.current = false;
    };
  }, [adUnitPath, uniqueDivId, responsive]);

  return (
    <div className="w-full my-4 flex items-center justify-center">
      <div 
        id={uniqueDivId} 
        ref={adContainerRef}
        className="min-h-[50px] sm:min-h-[90px] lg:min-h-[250px]"
      />
    </div>
  );
}