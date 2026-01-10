"use client";

import { useEffect, useRef } from "react";

// 1. Strict Type Definitions for Rewarded Ads
interface IGoogletag {
  cmd: Array<() => void>;
  defineOutOfPageSlot: (
    adUnitPath: string,
    format: number
  ) => { addService: (service: unknown) => void } | null;
  enums: {
    OutOfPageFormat: {
      REWARDED: number;
    };
  };
  pubads: () => {
    enableSingleRequest?: () => void;
    collapseEmptyDivs?: () => void;
    // We need to listen for the reward event
    addEventListener: (
      event: string, 
      callback: (event: any) => void
    ) => void;
    removeEventListener: (
      event: string, 
      callback: (event: any) => void
    ) => void;
  };
  enableServices: () => void;
  display: (slot: unknown) => void;
  destroySlots: (slots?: unknown[]) => void;
}

const initializedSlots = new Set<string>();

interface RewardedAdProps {
  show: boolean;
  onReward: () => void;  // Called when user earns the reward (watches ad)
  onClose: () => void;   // Called to reset the trigger
}

export default function RewardedAd({ show, onReward, onClose }: RewardedAdProps) {
  // REPLACE WITH YOUR ACTUAL REWARDED AD UNIT PATH
  const adUnitPath = "/23287200353/quiz1reward"; 
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (!show) return;

    // Reset parent trigger immediately so it can be called again later
    onClose();

    if (isAdLoaded.current) return;
    if (typeof window === "undefined") return;

    // Initialize GPT
    const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

    googletag.cmd.push(() => {
      if (!googletag.defineOutOfPageSlot) return;

      // Prevent duplicate slots
      if (initializedSlots.has(adUnitPath)) return;

      // 1. Define the REWARDED Slot
      const slot = googletag.defineOutOfPageSlot(
        adUnitPath,
        googletag.enums.OutOfPageFormat.REWARDED
      );

      if (slot) {
        const pubads = googletag.pubads?.();
        if (pubads) {
          slot.addService(pubads);

          // 2. LISTEN FOR REWARD GRANTED
          // This event fires when the user finishes watching the ad
          pubads.addEventListener("rewardedSlotGranted", (event) => {
             console.log("Reward granted!", event);
             onReward(); // Call the function to navigate/give coins
          });

          // Optional: Handle if they close it without watching? 
          // Usually, we just let them stay on the page or handle it via slotOnload
        }
      }

      // Enable services if not active
      if (initializedSlots.size === 0) {
        googletag.pubads?.().enableSingleRequest?.();
        googletag.enableServices?.();
      }

      // Display the ad
      if (slot) {
        googletag.display(slot);
      }

      initializedSlots.add(adUnitPath);
      isAdLoaded.current = true;
    });

  }, [show, onClose, onReward]);

  return null;
}