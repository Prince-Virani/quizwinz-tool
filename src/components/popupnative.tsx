"use client";

import { useEffect, useRef } from "react";

// Declare global window type for adsbygoogle
declare global {
  interface Window {
    googletag: {
      cmd: { push: (fn: () => void) => void };
      defineSlot: (
        adUnitPath: string,
        size: any,
        divId: string
      ) => googletag.Slot | null;
      pubads: () => {
        addEventListener?: Function;
      };
      enableServices: () => void;
      display: (divId: string) => void;
      destroySlots: (slots?: googletag.Slot[]) => boolean;
    };
  }

  namespace googletag {
    // FIX: We added 'addService' here so TypeScript knows it exists
    interface Slot {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addService: (service: any) => Slot;
    }
  }
}

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
  const adSlotRef = useRef<googletag.Slot | null>(null);

  useEffect(() => {
    if (!window.googletag) return;

    window.googletag.cmd.push(() => {
      // Destroy previous slot (important for navigation)
      if (adSlotRef.current) {
        window.googletag.destroySlots([adSlotRef.current]);
        adSlotRef.current = null;
      }

      const slot = window.googletag.defineSlot(
        "/23287200353/quiz1popup",
        ["fluid"],
        "div-gpt-ad-1767851436902-0"
      );

      if (slot) {
        slot.addService(window.googletag.pubads());
        window.googletag.enableServices();
        window.googletag.display("div-gpt-ad-1767851436902-0");
        adSlotRef.current = slot;
      }
    });
  }, []);

  return (
    <div className="w-full my-4">
      <div id="div-gpt-ad-1767851436902-0" />
    </div>
  );
}
