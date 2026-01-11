"use client";

import { useEffect, useRef } from "react";

// --- STRICT TYPE DEFINITIONS ---
interface ISlot {
  addService: (service: unknown) => void;
  getSlotElementId: () => string;
}

// Interface for the specific event that controls visibility
interface IRewardedEvent {
  makeRewardedVisible: () => void;
  slot: ISlot;
}

interface IGoogletag {
  cmd: Array<() => void>;
  defineOutOfPageSlot: (
    adUnitPath: string,
    format: number
  ) => ISlot | null;
  enums: {
    OutOfPageFormat: {
      REWARDED: number;
    };
  };
  pubads: () => {
    // UPDATED: Changed 'any' to 'unknown' to fix linting errors
    addEventListener: (
      event: string, 
      callback: (event: unknown) => void 
    ) => void;
    removeEventListener: (
      event: string, 
      callback: (event: unknown) => void
    ) => void;
    refresh: (slots?: ISlot[]) => void;
    clear: (slots?: ISlot[]) => void;
  };
  enableServices: () => void;
  display: (slot: unknown) => void;
}

// Global cache to prevent re-defining the same slot
const definedSlots = new Map<string, ISlot>();

interface RewardedAdProps {
  show: boolean;
  onReward: () => void;
  onClose: () => void;
  onAdShown: () => void; 
}

export default function RewardedAd({ show, onReward, onClose, onAdShown }: RewardedAdProps) {
  const adUnitPath = "/23287200353/quiz1reward"; 
  const processingRef = useRef(false);

  useEffect(() => {
    if (!show) return;
    if (processingRef.current) return;
    
    processingRef.current = true;

    if (typeof window === "undefined") {
        processingRef.current = false;
        return;
    }

    const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

    googletag.cmd.push(() => {
      const pubads = googletag.pubads();
      let slot = definedSlots.get(adUnitPath);

      if (!slot) {
        // --- 1. DEFINE SLOT (First Time Only) ---
        if (googletag.defineOutOfPageSlot) {
            const newSlot = googletag.defineOutOfPageSlot(
                adUnitPath,
                googletag.enums.OutOfPageFormat.REWARDED
            );

            if (newSlot) {
                newSlot.addService(pubads);

                // --- EVENT 1: AD IS READY TO SHOW ---
                pubads.addEventListener("rewardedSlotReady", (event: unknown) => {
                    const rewardedEvent = event as IRewardedEvent;
                    console.log("Ad ready. Triggering visibility...");
                    
                    // 1. Tell parent to stop the 5s fallback timer
                    onAdShown();

                    // 2. Show the ad
                    rewardedEvent.makeRewardedVisible();
                });

                // --- EVENT 2: USER EARNED REWARD ---
                pubads.addEventListener("rewardedSlotGranted", (event: unknown) => {
                    console.log("Reward granted!", event);
                    onReward(); 
                });

                // --- EVENT 3: AD CLOSED (X Button) ---
                pubads.addEventListener("rewardedSlotClosed", () => {
                    console.log("Ad closed by user.");
                });

                googletag.enableServices();
                googletag.display(newSlot);

                definedSlots.set(adUnitPath, newSlot);
                slot = newSlot;
            }
        }
      } else {
        // --- REFRESH EXISTING SLOT ---
        console.log("Refreshing existing rewarded slot...");
        pubads.refresh([slot]);
      }
      
      processingRef.current = false;
    });

  }, [show, onClose, onReward, onAdShown]);

  return null;
}