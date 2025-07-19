"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AdSenseBanner() {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <div className="w-full my-4 min-h-[90px]">
      <ins
        className="adsbygoogle block"
        data-ad-client="ca-pub-5607455208212717"
        data-ad-slot="5400566062"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}