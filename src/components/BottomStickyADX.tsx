"use client";

import { useEffect, useRef, useMemo } from "react";

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
  // Generate a unique ID if none provided
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
        window.googletag = window.googletag || { cmd: [] };

        window.googletag.cmd.push(() => {
          if (!window.googletag.defineSlot) return;

          // Check if slot already exists
          if (initializedSlots.has(uniqueDivId)) return;

          if (responsive) {
            // Create size mapping for responsive sticky ads
            const mapping = window.googletag.sizeMapping?.();
            const builtMapping = mapping
              ?.addSize?.([0, 0], [320, 50])        // Mobile: 320x50
              ?.addSize?.([750, 0], [728, 90])      // Tablet: 728x90
              ?.addSize?.([1050, 0], [970, 90])     // Desktop: 970x90
              ?.build?.();

            // Define the ad slot with all possible sizes
            const slot = window.googletag.defineSlot?.(
              adUnitPath, 
              [[320, 50], [728, 90], [970, 90]], 
              uniqueDivId
            );
            
            if (slot && builtMapping) {
              if (slot.defineSizeMapping) {
                slot.defineSizeMapping(builtMapping);
              }
              if (slot.addService) {
                const pubads = window.googletag.pubads?.();
                if (pubads) {
                  slot.addService(pubads);
                }
              }
            }
          } else {
            // Fixed size for non-responsive
            const slot = window.googletag.defineSlot?.(adUnitPath, [320, 50], uniqueDivId);
            if (slot && slot.addService) {
              const pubads = window.googletag.pubads?.();
              if (pubads) {
                slot.addService(pubads);
              }
            }
          }

          // Enable services (only once for first ad)
          if (initializedSlots.size === 0) {
            const pubads = window.googletag.pubads?.();
            if (pubads) {
              pubads.enableSingleRequest?.();
              pubads.collapseEmptyDivs?.();
            }
            window.googletag.enableServices?.();
          }

          // Display the ad
          window.googletag.display?.(uniqueDivId);

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
  }, [adUnitPath, uniqueDivId, responsive]);

  const positionClasses = position === "top" 
    ? "top-0" 
    : "bottom-0";

  return (
    <div 
      className={`fixed ${positionClasses} left-0 right-0 z-50 bg-slate-900 shadow-lg`}
      style={{ 
        maxWidth: '100%', 
        margin: '0 auto'
      }}
    >
      <div className="w-full flex items-center justify-center p-2">
        <div 
          id={uniqueDivId} 
          className="min-h-[50px] sm:min-h-[90px] w-full flex items-center justify-center"
        />
      </div>
    </div>
  );
}