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
    addEventListener: (
      event: string, 
      callback: (event: any) => void
    ) => void;
    removeEventListener: (
      event: string, 
      callback: (event: any) => void
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
  onAdShown: () => void; // New prop to cancel the fallback timer
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
                // This fixes the "Missing required event listener" error
                pubads.addEventListener("rewardedSlotReady", (event: IRewardedEvent) => {
                    console.log("Ad ready. Triggering visibility...");
                    
                    // 1. Tell parent to stop the 5s fallback timer
                    onAdShown();

                    // 2. Show the ad
                    event.makeRewardedVisible();
                });

                // --- EVENT 2: USER EARNED REWARD ---
                pubads.addEventListener("rewardedSlotGranted", (event: unknown) => {
                    console.log("Reward granted!", event);
                    onReward(); 
                });

                // --- EVENT 3: AD CLOSED (X Button) ---
                pubads.addEventListener("rewardedSlotClosed", () => {
                    console.log("Ad closed by user.");
                    // Optional: You can force close here if needed, but usually 
                    // we wait for the logic in the parent to handle state.
                });

                googletag.enableServices();
                googletag.display(newSlot);

                definedSlots.set(adUnitPath, newSlot);
                slot = newSlot;
            }
        }
      } else {
        // --- REFRESH EXISTING SLOT ---
        // If the user plays a second time, we refresh the existing slot
        console.log("Refreshing existing rewarded slot...");
        pubads.refresh([slot]);
      }
      
      processingRef.current = false;
      
      // NOTE: We do NOT call onClose() here immediately. 
      // We let the ad events (Granted/Closed) drive the flow, 
      // or the parent handles the state closing.
    });

  }, [show, onClose, onReward, onAdShown]);

  return null;
}