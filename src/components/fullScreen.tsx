"use client";

import { useEffect, useRef } from "react";

const SESSION_KEY = "quiz_interstitial_shown";

// Track fullscreen slot separately
const initializedSlots = new Set<string>();

export default function FullscreenAd({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const divId = "div-gpt-ad-interstitial";
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (!show) return;
    if (isAdLoaded.current) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (initializedSlots.has(divId)) return;

    // Ensure googletag exists
    if (!window.googletag) {
      window.googletag = { cmd: [] };
    }

    const gt = window.googletag;

    gt.cmd.push(() => {
      if (!gt.defineSlot) return;
      if (initializedSlots.has(divId)) return;

      const slot = gt.defineSlot(
        "/23287200353/quiz1Inter",
        [
          [300, 250],
          [320, 480],
          [336, 280],
        ],
        divId
      );

      const pubads = gt.pubads?.();

      if (slot && pubads && slot.addService) {
        slot.addService(pubads);
      }

      // Enable services ONLY once (same logic as Popupnative)
      if (initializedSlots.size === 0) {
        pubads?.enableSingleRequest?.();
        gt.enableServices?.();
      }

      gt.display?.(divId);

      initializedSlots.add(divId);
      isAdLoaded.current = true;
      sessionStorage.setItem(SESSION_KEY, "1");
    });

    return () => {
      initializedSlots.delete(divId);
      isAdLoaded.current = false;
    };
  }, [show]);

  if (!show) return null;

  return (
    <div style={overlay}>
      <div style={adBox}>
        <button style={closeBtn} onClick={onClose}>
          ✕
        </button>
        <div id={divId} style={{ minWidth: 300, minHeight: 250 }} />
      </div>
    </div>
  );
}

/* styles */
const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.85)",
  zIndex: 99999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const adBox: React.CSSProperties = {
  background: "#fff",
  padding: 10,
  borderRadius: 8,
  position: "relative",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: -12,
  right: -12,
  width: 28,
  height: 28,
  borderRadius: "50%",
  border: "none",
  background: "#000",
  color: "#fff",
  cursor: "pointer",
};
