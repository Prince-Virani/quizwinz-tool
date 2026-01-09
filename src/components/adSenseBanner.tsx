"use client";

import { useEffect, useRef, useMemo } from "react";

interface AdXBannerProps {
  adUnitPath?: string;
  divId?: string;
  responsive?: boolean;
  fluid?: boolean;
  fixedSize?: [number, number];
}

// Track which ad slots have been initialized globally
const initializedSlots = new Set<string>();

// Counter for auto-generated IDs
let adCounter = 0;

export default function AdSenseBanner({
  adUnitPath = "/23287200353/quiz1native",
  divId,
  responsive = true,
  fluid = false,
  fixedSize
}: AdXBannerProps) {
  const uniqueDivId = useMemo(() => {
    if (divId) return divId;
    adCounter++;
    return `div-gpt-ad-auto-${adCounter}-${Date.now()}`;
  }, [divId]);

  const adContainerRef = useRef<HTMLDivElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (isAdLoaded.current || initializedSlots.has(uniqueDivId)) return;

    const loadAd = () => {
      if (typeof window === "undefined") return;

      if (!window.googletag) {
        window.googletag = { cmd: [] };
      }

      const gt = window.googletag;

      gt.cmd.push(() => {
        if (!gt.defineSlot) return;
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

        if (initializedSlots.size === 0) {
          pubads?.enableSingleRequest?.();
          pubads?.collapseEmptyDivs?.();
          gt.enableServices?.();
        }

        gt.display?.(uniqueDivId);

        initializedSlots.add(uniqueDivId);
        isAdLoaded.current = true;
      });
    };

    // Don't load script - it's already in layout.tsx
    loadAd();

    return () => {
      initializedSlots.delete(uniqueDivId);
      isAdLoaded.current = false;
    };
  }, [adUnitPath, uniqueDivId, responsive, fluid, fixedSize]);

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