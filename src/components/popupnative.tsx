"use client";

import { useEffect, useRef } from "react";

// Declare global window type for googletag
declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      defineSlot?: (adUnitPath: string, size: any, divId: string) => any;
      enableServices?: () => void;
      display?: (divId: string) => void;
      pubads?: () => any;
      sizeMapping?: () => any;
    };
  }
}

interface AdXBannerProps {
  adUnitPath?: string;
  divId?: string;
  responsive?: boolean;
}

export default function Popupnative({
  adUnitPath = "/23287200353/quiz1popup",
  divId = "div-gpt-ad-1767851436902-0",
  responsive = true
}: AdXBannerProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Prevent duplicate ad loading
    if (isAdLoaded.current) return;

    const loadAd = () => {
      try {
        if (typeof window === 'undefined') return;

        // Initialize googletag
        window.googletag = window.googletag || { cmd: [] };

        window.googletag.cmd.push(() => {
          if (!window.googletag.defineSlot) return;

          if (responsive) {
            // Create size mapping for responsive ads
            const mapping = window.googletag.sizeMapping?.()
              // Mobile
              .addSize([0, 0], [[300, 250], [320, 50], [320, 100]])
              // Tablet
              .addSize([750, 0], [[300, 250], [728, 90]])
              // Desktop
              .addSize([1050, 0], [[300, 250], [728, 90], [970, 90], [970, 250]])
              .build();

            // Define the ad slot with responsive sizes
            const slot = window.googletag
              .defineSlot(adUnitPath, [[300, 250], [320, 50], [320, 100], [728, 90], [970, 90], [970, 250]], divId)
              ?.defineSizeMapping(mapping)
              ?.addService(window.googletag.pubads?.());
          } else {
            // Define the ad slot with fixed size
            window.googletag
              .defineSlot(adUnitPath, [300, 250], divId)
              ?.addService(window.googletag.pubads?.());
          }

          // Enable single request and responsive behavior
          window.googletag.pubads?.().enableSingleRequest();
          window.googletag.pubads?.().collapseEmptyDivs();
          
          // Enable services
          window.googletag.enableServices?.();

          // Display the ad
          window.googletag.display?.(divId);

          isAdLoaded.current = true;
        });
      } catch (e) {
        console.error('Error loading AdX ad:', e);
      }
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

    return () => {
      // Cleanup if needed
    };
  }, [adUnitPath, divId, responsive]);

  return (
    <div className="w-full my-4 flex items-center justify-center">
      <div 
        id={divId} 
        ref={adContainerRef}
        className="min-h-[50px] sm:min-h-[90px] lg:min-h-[250px]"
      />
    </div>
  );
}