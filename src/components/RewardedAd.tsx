"use client";

import { useEffect, useRef } from "react";

// 1. Strict Type Definitions for Rewarded Ads
interface IGoogletag {
  cmd: Array<() => void>;
  defineOutOfPageSlot: (
    adUnitPath: string,
    format: number
  ) => { 
      addService: (service: unknown) => void;
      // We need to keep track of the slot object for refreshing
      getSlotElementId: () => string; 
  } | null;
  enums: {
    OutOfPageFormat: {
      REWARDED: number;
    };
  };
  pubads: () => {
    enableSingleRequest?: () => void;
    collapseEmptyDivs?: () => void;
    // Fix: Use 'unknown' instead of 'any' to satisfy strict linting
    addEventListener: (
      event: string, 
      callback: (event: unknown) => void
    ) => void;
    removeEventListener: (
      event: string, 
      callback: (event: unknown) => void
    ) => void;
    refresh: (slots?: any[]) => void;
    clear: (slots?: any[]) => void;
  };
  enableServices: () => void;
  display: (slot: unknown) => void;
  destroySlots: (slots?: unknown[]) => void;
}

// Global storage to keep track of the actual SLOT OBJECTS, not just strings
const definedSlots = new Map<string, any>();

interface RewardedAdProps {
  show: boolean;
  onReward: () => void;  // Called when user earns the reward
  onClose: () => void;   // Called to reset the trigger
}

export default function RewardedAd({ show, onReward, onClose }: RewardedAdProps) {
  // REPLACE WITH YOUR ACTUAL REWARDED AD UNIT PATH
  const adUnitPath = "/23287200353/quiz1reward"; 
  const processingRef = useRef(false);

  useEffect(() => {
    if (!show) return;
    if (processingRef.current) return;
    
    processingRef.current = true;

    // Reset parent trigger immediately
    // Note: We move onClose to the end of the chain or keep it here depending on flow.
    // Keeping it here ensures we don't loop, but we need to be careful.

    if (typeof window === "undefined") {
        processingRef.current = false;
        return;
    }

    // Initialize GPT
    const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

    googletag.cmd.push(() => {
      const pubads = googletag.pubads();
      
      // 1. Check if we already created this slot in a previous click
      let slot = definedSlots.get(adUnitPath);

      if (!slot) {
        // --- CREATE NEW SLOT (First Time Only) ---
        if (googletag.defineOutOfPageSlot) {
            slot = googletag.defineOutOfPageSlot(
                adUnitPath,
                googletag.enums.OutOfPageFormat.REWARDED
            );

            if (slot) {
                slot.addService(pubads);
                
                // 2. LISTEN FOR REWARD GRANTED
                // We use 'unknown' for the event to pass linting
                pubads.addEventListener("rewardedSlotGranted", (event: unknown) => {
                    console.log("Reward granted!", event);
                    onReward(); 
                });

                googletag.enableServices();
                googletag.display(slot);

                // Store it globally so we don't redefine it next time
                definedSlots.set(adUnitPath, slot);
            }
        }
      } else {
        // --- SLOT EXISTS, REFRESH IT ---
        // If the user plays a second time, we request a new ad for the existing slot.
        pubads.refresh([slot]);
      }
      
      processingRef.current = false;
      onClose(); 
    });

  }, [show, onClose, onReward]);

  return null;
}