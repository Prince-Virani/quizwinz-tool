"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Play, X, AlertCircle } from "lucide-react"

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

const definedSlots = new Map<string, ISlot>();
let isServicesEnabled = false;

interface AdModalProps {
  isOpen: boolean
  onClose: () => void
  onAdComplete: () => void
}

export default function AdModal({ isOpen, onClose, onAdComplete }: AdModalProps) {
  const [isWatching, setIsWatching] = useState(false)
  const [adProgress, setAdProgress] = useState(0)
  const [useRealAds, setUseRealAds] = useState(true)
  const [adError, setAdError] = useState("")
  const processingRef = useRef(false)
  const adUnitPath = "/23287200353/quiz1reward"

  useEffect(() => {
    if (!isOpen) {
      setIsWatching(false)
      setAdProgress(0)
      setAdError("")
    }
  }, [isOpen])

  const simulateAd = () => {
    setIsWatching(true)
    setAdProgress(0)
    setAdError("")

    const interval = setInterval(() => {
      setAdProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsWatching(false)
            onAdComplete()
            onClose()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  const watchRewardedAd = () => {
    if (processingRef.current) return
    processingRef.current = true
    setAdError("")
    setIsWatching(true)

    if (typeof window === "undefined") {
      setAdError("Window not available")
      processingRef.current = false
      return
    }

    const googletag = (window.googletag = window.googletag || { cmd: [] }) as unknown as IGoogletag;

    googletag.cmd.push(() => {
      const pubads = googletag.pubads();
      let slot = definedSlots.get(adUnitPath);

      if (!slot) {
        if (googletag.defineOutOfPageSlot) {
          const newSlot = googletag.defineOutOfPageSlot(
            adUnitPath,
            googletag.enums.OutOfPageFormat.REWARDED
          );

          if (newSlot) {
            newSlot.addService(pubads);

            // Event: Ad is ready to show
            const handleRewardedReady = (event: unknown) => {
              const rewardedEvent = event as IRewardedEvent;
              console.log("Ad ready. Showing...");
              setAdProgress(10) // Start progress
              rewardedEvent.makeRewardedVisible();
            };

            // Event: User earned reward
            const handleRewardGrant = (event: unknown) => {
              console.log("Reward granted!", event);
              setAdProgress(100)
              
              setTimeout(() => {
                processingRef.current = false
                setIsWatching(false)
                onAdComplete()
                onClose()
              }, 500);
            };

            // Event: Ad closed
            const handleAdClosed = () => {
              console.log("Ad closed by user");
              processingRef.current = false
              setIsWatching(false)
              setAdError("Ad was closed without completing")
            };

            pubads.addEventListener("rewardedSlotReady", handleRewardedReady);
            pubads.addEventListener("rewardedSlotGranted", handleRewardGrant);
            pubads.addEventListener("rewardedSlotClosed", handleAdClosed);

            if (!isServicesEnabled) {
              googletag.enableServices();
              isServicesEnabled = true
            }

            googletag.display(newSlot);
            definedSlots.set(adUnitPath, newSlot);
            slot = newSlot;
          }
        }
      } else {
        // Refresh existing slot
        console.log("Refreshing rewarded ad...");
        pubads.refresh([slot]);
        setAdProgress(10)
      }
    });
  }

  const handleWatchAd = () => {
    if (useRealAds) {
      watchRewardedAd()
    } else {
      simulateAd()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          {!isWatching ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Earn Free Coins</h3>
                <button onClick={onClose} className="p-1 hover:bg-slate-700 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="text-center mb-6">
                <Coins className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <p className="text-slate-300 mb-2">Watch a short ad to earn</p>
                <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 rounded-lg p-3 mb-4">
                  <p className="text-xl font-bold">+100 Coins</p>
                </div>
                <p className="text-sm text-slate-400">
                  {useRealAds ? "Real ad • ~5 seconds" : "Demo ad • ~5 seconds"}
                </p>
              </div>

              {/* Toggle between real and simulated ads */}
              <div className="mb-4 flex gap-2">
                <Button
                  onClick={() => setUseRealAds(true)}
                  variant={useRealAds ? "default" : "outline"}
                  className={`flex-1 text-xs ${
                    useRealAds
                      ? "bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900"
                      : "border-slate-600 text-slate-300"
                  }`}
                >
                  Real Ad
                </Button>
                <Button
                  onClick={() => setUseRealAds(false)}
                  variant={!useRealAds ? "default" : "outline"}
                  className={`flex-1 text-xs ${
                    !useRealAds
                      ? "bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900"
                      : "border-slate-600 text-slate-300"
                  }`}
                >
                  Demo Ad
                </Button>
              </div>

              <Button
                onClick={handleWatchAd}
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 hover:from-orange-500 hover:to-yellow-600"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Ad
              </Button>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">
                {useRealAds ? "Real Ad Playing..." : "Watching Ad..."}
              </h3>

              <div className="mb-6">
                <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-yellow-500 h-3 rounded-full transition-all duration-100"
                    style={{ width: `${adProgress}%` }}
                  />
                </div>
                <p className="text-sm text-slate-400">
                  {useRealAds 
                    ? "Complete the ad to earn coins" 
                    : `${Math.round(adProgress)}% complete`
                  }
                </p>
              </div>

              {useRealAds ? (
                <div className="bg-slate-700 rounded-lg p-8 mb-4 min-h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin mb-3">
                      <div className="w-8 h-8 border-3 border-slate-600 border-t-yellow-500 rounded-full mx-auto"></div>
                    </div>
                    <p className="text-slate-400 text-sm">Loading ad content...</p>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-700 rounded-lg p-8 mb-4">
                  <div className="animate-pulse">
                    <div className="bg-slate-600 rounded h-4 mb-2"></div>
                    <div className="bg-slate-600 rounded h-4 w-3/4 mb-2"></div>
                    <div className="bg-slate-600 rounded h-4 w-1/2"></div>
                  </div>
                  <p className="text-center text-slate-400 mt-4 text-sm">[Simulated Ad Content]</p>
                </div>
              )}

              {adError && (
                <div className="flex items-center gap-2 bg-red-500/20 border border-red-500 rounded p-3 mb-4">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-300">{adError}</p>
                </div>
              )}

              {adProgress === 100 && !adError && (
                <div className="text-green-400 font-semibold">✓ Ad Complete! +100 Coins Added</div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}