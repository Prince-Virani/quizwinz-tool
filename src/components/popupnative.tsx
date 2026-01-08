"use client";

import { useEffect, useRef } from "react";

// Declare global window type for adsbygoogle
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const adSlotRef = useRef<any>(null);

/*
export default function Popupnative() {
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
        // data-ad-client="ca-pub-8413417453738583"
        data-ad-slot="/23287200353/quiz1popup"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
  */
 export default function Popupnative() {
   const adSlotRef = useRef<any>(null);
 
   useEffect(() => {
     if (typeof window !== "undefined") {
       const { googletag } = window;
 
       googletag.cmd.push(() => {
         // destroy old slot if it exists (for navigation safety)
         if (adSlotRef.current) {
           googletag.destroySlots([adSlotRef.current]);
         }
 
         // Define the slot with "fluid" size
         // This tells Ad Manager to fit the container width
         adSlotRef.current = googletag.defineSlot(
           '/23287200353/quiz1popup', 
           ['fluid'], // <--- CHANGED FROM [300, 250] to ['fluid']
           'div-gpt-ad-1767851436902-0'
         );
 
         if (adSlotRef.current) {
            adSlotRef.current.addService(googletag.pubads());
            googletag.enableServices();
            googletag.display('div-gpt-ad-1767851436902-0');
         }
       });
     }
   }, []);
 
   return (
     // Container width controls the ad width
     <div className="w-full my-4"> 
       <div id="div-gpt-ad-1767851436902-0"></div>
     </div>
   );
 }