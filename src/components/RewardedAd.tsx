"use client";

import { useEffect, useRef } from "react";

// --- STRICT TYPE DEFINITIONS ---
interface ISlot {
  addService: (service: unknown) => void;
  getSlotElementId: () => string;
}

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
let isServicesEnabled = false;

interface RewardedAdProps {
  show: boolean;
  load?: boolean;
  onReward: () => void;
  onClose: () => void;
  onAdShown?: () => void; 
  adUnitPath?: string;
}

export default function RewardedAd({ show, load = false, onReward, onClose, onAdShown, adUnitPath = "/23282051127/quiz1.rewards" }: RewardedAdProps) {
  const processingRef = useRef(false);
  const listenerCleanupRef = useRef<Array<() => void>>([]);
  const callbacksRef = useRef({ onReward, onClose, onAdShown });
  const makeVisibleRef = useRef<(() => void) | null>(null);
  const showRef = useRef(show);

  // Update callback refs without retriggering effect
  useEffect(() => {
    callbacksRef.current = { onReward, onClose, onAdShown };
    showRef.current = show;
  }, [onReward, onClose, onAdShown, show]);

  useEffect(() => {
    if (show && makeVisibleRef.current) {
      makeVisibleRef.current();
      makeVisibleRef.current = null;
    }
  }, [show]);

  useEffect(() => {
    if (!show && !load) {
      processingRef.current = false;
      return;
    }

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
                const handleRewardedReady = (event: unknown) => {
                    const rewardedEvent = event as IRewardedEvent;
                    console.log("Ad ready.");
                    
                    // Tell parent ad is ready/shown
                    if (callbacksRef.current.onAdShown) {
                        callbacksRef.current.onAdShown();
                    }

                    // Show the ad if requested, else save trigger for later
                    if (showRef.current) {
                        console.log("Triggering visibility immediately...");
                        rewardedEvent.makeRewardedVisible();
                    } else {
                        console.log("Preloaded ad is ready. Holding visibility...");
                        makeVisibleRef.current = rewardedEvent.makeRewardedVisible;
                    }
                };

                // --- EVENT 2: USER EARNED REWARD ---
                const handleRewardGrant = (event: unknown) => {
                    console.log("Reward granted!", event);
                    
                    // Clean up listeners first
                    listenerCleanupRef.current.forEach(cleanup => cleanup());
                    listenerCleanupRef.current = [];
                    
                    processingRef.current = false;
                    
                    // Call reward callback
                    callbacksRef.current.onReward();
                };

                // --- EVENT 3: AD CLOSED (X Button or timeout) ---
                const handleAdClosed = () => {
                    console.log("Ad closed by user.");
                    
                    // Clean up listeners
                    listenerCleanupRef.current.forEach(cleanup => cleanup());
                    listenerCleanupRef.current = [];
                    
                    processingRef.current = false;
                    
                    // Call close callback
                    callbacksRef.current.onClose();
                };

                pubads.addEventListener("rewardedSlotReady", handleRewardedReady);
                pubads.addEventListener("rewardedSlotGranted", handleRewardGrant);
                pubads.addEventListener("rewardedSlotClosed", handleAdClosed);

                // Store cleanup functions
                listenerCleanupRef.current.push(() => {
                    pubads.removeEventListener("rewardedSlotReady", handleRewardedReady);
                });
                listenerCleanupRef.current.push(() => {
                    pubads.removeEventListener("rewardedSlotGranted", handleRewardGrant);
                });
                listenerCleanupRef.current.push(() => {
                    pubads.removeEventListener("rewardedSlotClosed", handleAdClosed);
                });

                // Enable services only once globally
                if (!isServicesEnabled) {
                    googletag.enableServices();
                    isServicesEnabled = true;
                }

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

    // Cleanup on unmount
    return () => {
      listenerCleanupRef.current.forEach(cleanup => cleanup());
      listenerCleanupRef.current = [];
    };

  }, [show, load, adUnitPath]);

  return null;
}