"use client";

import { useEffect, useRef, useState } from "react";

interface AdXBannerProps {
  adUnitPath?: string;
  divId?: string;
  responsive?: boolean;
  fluid?: boolean;
  fixedSize?: [number, number];
}

// Track initialized slots locally
const initializedSlots = new Set<string>();

export default function AdSenseBanner({
  adUnitPath = "/23282051127/quiz1.native",
  divId,
  responsive = true,
  fluid = false,
  fixedSize
}: AdXBannerProps) {
  
  // 1. Use State for the ID to ensure it matches between server and client
  const [uniqueDivId, setUniqueDivId] = useState<string>("");
  const adContainerRef = useRef<HTMLDivElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Generate the ID only on the client side
    if (divId) {
      setUniqueDivId(divId);
    } else {
      setUniqueDivId(`div-gpt-ad-auto-${Math.random().toString(36).substring(2, 9)}`);
    }
  }, [divId]);

  useEffect(() => {
    if (!uniqueDivId || isAdLoaded.current || initializedSlots.has(uniqueDivId)) return;
    if (typeof window === "undefined") return;

    const loadAd = () => {
      // Initialize if missing
      window.googletag = window.googletag || { cmd: [] };

      window.googletag.cmd.push(() => {
        const gt = window.googletag;

        if (!gt || !gt.defineSlot) return; // Ensure full library is loaded
        if (initializedSlots.has(uniqueDivId)) return;

        let slot;

        if (fluid) {
          slot = gt.defineSlot(adUnitPath, "fluid", uniqueDivId);
        } 
        else if (fixedSize) {
          slot = gt.defineSlot(adUnitPath, fixedSize, uniqueDivId);
        }
        else if (responsive) {
          const mappingBuilder = gt.sizeMapping?.();
          const mapping = mappingBuilder
            ?.addSize?.([0, 0], [[300, 250], [320, 50], [320, 100]])
            ?.addSize?.([750, 0], [[300, 250], [728, 90]])
            ?.addSize?.([1050, 0], [[300, 250], [728, 90], [970, 90]])
            ?.build?.();

          slot = gt.defineSlot(
            adUnitPath,
            [[300, 250], [320, 50], [320, 100], [728, 90], [970, 90]],
            uniqueDivId
          );

          if (slot && mapping && slot.defineSizeMapping) {
            slot.defineSizeMapping(mapping);
          }
        }
        else {
          slot = gt.defineSlot(adUnitPath, [300, 250], uniqueDivId);
        }

        const pubads = gt.pubads?.();
        if (slot && pubads && slot.addService) {
          slot.addService(pubads);
        }

        // Only enable services if they aren't already running
        if (pubads && !pubads.ready) {
          pubads.enableSingleRequest?.();
          pubads.collapseEmptyDivs?.();
          gt.enableServices?.();
        }

        gt.display?.(uniqueDivId);

        initializedSlots.add(uniqueDivId);
        isAdLoaded.current = true;
      });
    };

    loadAd();

    return () => {
      // Cleanup on unmount
      if (isAdLoaded.current && typeof window !== 'undefined' && window.googletag) {
         window.googletag.cmd.push(() => {
            const gt = window.googletag;
            
            // FIX: Safely check for pubads and destroySlots before calling them
            const pubads = gt.pubads ? gt.pubads() : null;
            
            if (pubads && pubads.getSlots) {
                const slots = pubads.getSlots();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const slot = slots.find((s: any) => s.getSlotElementId() === uniqueDivId);
                
                if (slot && gt.destroySlots) {
                    gt.destroySlots([slot]);
                }
            }
            initializedSlots.delete(uniqueDivId);
         });
      }
      isAdLoaded.current = false;
    };
  }, [adUnitPath, uniqueDivId, responsive, fluid, fixedSize]);

  // Render a placeholder if ID isn't ready yet
  if (!uniqueDivId) return <div className="w-full my-4 min-h-[250px]" />;

  const containerClasses = fluid 
    ? "w-full my-4" 
    : "w-full my-4 flex items-center justify-center";

  const adClasses = fluid
    ? "w-full min-h-[250px]"
    : fixedSize
    ? `min-h-[${fixedSize[1]}px]`
    : "min-h-[50px] sm:min-h-[90px] lg:min-h-[250px]";

  return (
    <div className={containerClasses}>
      <div 
        id={uniqueDivId} 
        ref={adContainerRef}
        className={adClasses}
      />
    </div>
  );
}