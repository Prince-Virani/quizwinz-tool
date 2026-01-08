"use client";

import { useEffect } from "react";

// Declare global window type for adsbygoogle
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

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