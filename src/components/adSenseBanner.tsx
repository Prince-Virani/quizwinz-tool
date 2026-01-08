"use client";

import { useEffect, useRef, useMemo } from "react";

// Define proper types for googletag
interface GoogleTagSlot {
  defineSizeMapping: (mapping: unknown) => GoogleTagSlot;
  addService: (service: unknown) => GoogleTagSlot;
}

interface GoogleTagPubAds {
  enableSingleRequest: () => void;
  collapseEmptyDivs: () => void;
}

interface GoogleTagSizeMapping {
  addSize: (viewportSize: number[], adSizes: (number[] | number[][])) => GoogleTagSizeMapping;
  build: () => unknown;
}

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      defineSlot?: (adUnitPath: string, size: number[] | number[][], divId: string) => GoogleTagSlot | null;
      enableServices?: () => void;
      display?: (divId: string) => void;
      pubads?: () => GoogleTagPubAds;
      sizeMapping?: () => GoogleTagSizeMapping;
    };
  }
}

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
      try {
        if (typeof window === 'undefined') return;

        // Initialize googletag
        window.googletag = window.googletag || { cmd: [] };

        window.googletag.cmd.push(() => {
          if (!window.googletag.defineSlot) return;

          // Check if slot already exists
          if (initializedSlots.has(uniqueDivId)) return;

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
              .defineSlot(adUnitPath, [[300, 250], [320, 50], [320, 100], [728, 90], [970, 90], [970, 250]], uniqueDivId);
            
            if (slot && mapping) {
              slot.defineSizeMapping(mapping).addService(window.googletag.pubads?.());
            }
          } else {
            // Define the ad slot with fixed size
            const slot = window.googletag.defineSlot(adUnitPath, [300, 250], uniqueDivId);
            if (slot) {
              slot.addService(window.googletag.pubads?.());
            }
          }

          // Enable single request and responsive behavior (only once for first ad)
          if (initializedSlots.size === 0) {
            const pubads = window.googletag.pubads?.();
            if (pubads) {
              pubads.enableSingleRequest();
              pubads.collapseEmptyDivs();
            }
            
            // Enable services
            window.googletag.enableServices?.();
          }

          // Display the ad
          window.googletag.display?.(uniqueDivId);

          // Mark this slot as initialized
          initializedSlots.add(uniqueDivId);
          isAdLoaded.current = true;
        });
      } catch (e) {
        console.error(`Error loading AdX ad (${uniqueDivId}):`, e);
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