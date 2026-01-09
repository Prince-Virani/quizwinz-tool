"use client";

import { useEffect, useState, useRef } from "react";

const SESSION_KEY = "quiz_interstitial_shown";

export default function FullscreenAd({
  show,
  onClose
}: {
  show: boolean;
  onClose: () => void;
}) {
  const slotLoaded = useRef(false);
  const divId = "div-gpt-ad-interstitial";

  useEffect(() => {
    if (!show) return;
    if (slotLoaded.current) return;
    if (typeof window === "undefined") return;

    // prevent multiple shows in same session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
    const gt = window.googletag as any;

    if (!gt || !gt.defineSlot || !gt.pubads) return;

    const slot = gt.defineSlot(
        "/23287200353/quiz1Inter",
        [[300, 250], [320, 480], [336, 280]],
        divId
    );

    if (!slot) return;

    slot.addService(gt.pubads());

    // enable services ONLY ONCE
    if (!gt.__servicesEnabled) {
        gt.pubads().enableSingleRequest();
        gt.enableServices();
        gt.__servicesEnabled = true;
    }

    gt.display(divId);

    slotLoaded.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    });
    
  }, [show]);

  if (!show) return null;

  return (
    <div style={overlay}>
      <div style={adBox}>
        <button style={closeBtn} onClick={onClose}>
          ✕
        </button>
        <div id={divId} />
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
  justifyContent: "center"
};

const adBox: React.CSSProperties = {
  background: "#fff",
  padding: 10,
  borderRadius: 8,
  position: "relative",
  minWidth: 300
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
  cursor: "pointer"
};
