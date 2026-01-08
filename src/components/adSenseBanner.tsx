"use client";

import { useEffect, useRef } from "react";

// Declare global window type for adsbygoogle
declare global {
  interface Window {
    googletag: any;
    adsbygoogle: unknown[];
    }
}


/*
export default function AdSenseBanner() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);
 return (
    <div className="w-full my-4 min-h-[90px]">
      <ins
        className="adsbygoogle block"
        // data-ad-client="ca-pub-4752801785953456"
        data-ad-slot="/23287200353/quiz1native"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
  */
export default function AdSenseBanner() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adSlotRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { googletag } = window;

      googletag.cmd.push(() => {
        // Destroy old slot if it exists (prevents duplicate slot errors on navigation)
        if (adSlotRef.current) {
          googletag.destroySlots([adSlotRef.current]);
        }

        // Define the slot with "fluid" size
        adSlotRef.current = googletag.defineSlot(
          '/23287200353/quiz1native', 
          ['fluid'], 
          'div-gpt-ad-1767851347418-0'
        );

        if (adSlotRef.current) {
           adSlotRef.current.addService(googletag.pubads());
           googletag.enableServices();
           googletag.display('div-gpt-ad-1767851347418-0');
        }
      });
    }
  }, []);

  return (
    // Container width controls the ad width
    <div className="w-full my-4"> 
      <div id="div-gpt-ad-1767851347418-0"></div>
    </div>
  );
}

