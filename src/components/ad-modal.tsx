"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Play, X } from "lucide-react"
import RewardedAd from "@/components/RewardedAd"

interface AdModalProps {
  isOpen: boolean
  onClose: () => void
  onAdComplete: () => void
}

export default function AdModal({ isOpen, onClose, onAdComplete }: AdModalProps) {
  const [isWatching, setIsWatching] = useState(false)
  const [showRewardedAd, setShowRewardedAd] = useState(false)
  const [adTimeoutId, setAdTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const [isAdLoading, setIsAdLoading] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setIsWatching(false)
      setShowRewardedAd(false)
      setIsAdLoading(false)
      if (adTimeoutId) {
        clearTimeout(adTimeoutId)
        setAdTimeoutId(null)
      }
    }
  }, [isOpen, adTimeoutId])

  const handleWatchAd = () => {
    setIsAdLoading(true)
    setIsWatching(true)
    setShowRewardedAd(true)

    // Fallback timeout: if ad doesn't complete in 8 seconds, proceed anyway
    const timeout = setTimeout(() => {
      console.log("Ad timeout - completing reward as fallback")
      handleRewardComplete()
    }, 8000)

    setAdTimeoutId(timeout)
  }

  const handleAdShown = () => {
    // Ad is ready, clear the timeout
    if (adTimeoutId) {
      console.log("Ad loaded - clearing fallback timer")
      clearTimeout(adTimeoutId)
      setAdTimeoutId(null)
    }
    setIsAdLoading(false)
  }

  const handleRewardComplete = () => {
    // Clear any remaining timeout
    if (adTimeoutId) {
      clearTimeout(adTimeoutId)
      setAdTimeoutId(null)
    }

    console.log("User earned reward!")
    setShowRewardedAd(false)
    setIsWatching(false)
    setIsAdLoading(false)

    // Delay to allow cleanup
    setTimeout(() => {
      onAdComplete()
      onClose()
    }, 100)
  }

  const handleAdClosed = () => {
    // Only close ad, don't proceed (user closed without watching)
    setShowRewardedAd(false)
    setIsWatching(false)
    setIsAdLoading(false)

    if (adTimeoutId) {
      clearTimeout(adTimeoutId)
      setAdTimeoutId(null)
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
                <p className="text-sm text-slate-400">Ad duration: ~5 seconds</p>
              </div>

              <Button
                onClick={handleWatchAd}
                disabled={isAdLoading}
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 hover:from-orange-500 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play className="w-4 h-4 mr-2" />
                {isAdLoading ? "Loading Ad..." : "Watch Ad"}
              </Button>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Watching Ad...</h3>

              <div className="bg-slate-700 rounded-lg p-8 mb-4 min-h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin mb-3">
                    <div className="w-8 h-8 border-3 border-slate-600 border-t-yellow-500 rounded-full mx-auto"></div>
                  </div>
                  <p className="text-slate-400 text-sm">Complete the ad to earn coins</p>
                </div>
              </div>

              <p className="text-slate-400 text-xs">Do not close this window</p>
            </div>
          )}

          {/* Rewarded Ad Component */}
          <RewardedAd
            show={showRewardedAd}
            onReward={handleRewardComplete}
            onClose={handleAdClosed}
            onAdShown={handleAdShown}
          />
        </CardContent>
      </Card>
    </div>
  )
}