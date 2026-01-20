"use client";

import { useState, useEffect } from "react";
import { Trophy, Star, Users, Award, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import AdSenseBanner from "@/components/adSenseBanner";
import FullscreenAd from "@/components/fullScreen";

export default function ResultPage() {
	const router = useRouter();
	const [triggerInterstitial, setTriggerInterstitial] = useState(false);
	const [isAdReady, setIsAdReady] = useState(false);

	// Pre-load interstitial ad when page mounts
	useEffect(() => {
		console.log("Pre-loading interstitial ad...");
		setTriggerInterstitial(true);
		
		// Mark ad as ready after a small delay to ensure it's initialized
		const readyTimer = setTimeout(() => {
			setIsAdReady(true);
			console.log("Interstitial ad is ready!");
		}, 500);

		return () => clearTimeout(readyTimer);
	}, []);

	const handlePlayNow = () => {
		// If ad is already loaded, show it immediately
		if (isAdReady) {
			console.log("Showing pre-loaded interstitial ad");
			// Ad is already showing, just wait for it to close
		} else {
			// If not ready yet, trigger it now
			console.log("Ad not ready yet, triggering now...");
			setTriggerInterstitial(true);
		}
	};

	const handleAdClose = () => {
		// Ad is closed, now navigate to the next page
		console.log("Ad closed, navigating to /start");
		setTriggerInterstitial(false);
		setIsAdReady(false);
		
		// Delay navigation slightly to ensure ad state updates
		setTimeout(() => {
			router.push("/start");
		}, 100);
	};

	return (
		<div className='min-h-screen bg-[#0f172a] text-white p-4 flex flex-col'>
			{/* Interstitial Ad - Pre-loaded and ready to show */}
			<FullscreenAd 
				show={triggerInterstitial} 
				onClose={handleAdClose} 
			/>

			{/* Ad Banner */}
			<AdSenseBanner />
			<label style={{
				display: 'block',
				margin: '0px auto',
				width: 'fit-content',
				letterSpacing: '4px',
				color: 'rgb(65, 77, 101)',
				font: '400 9px / 2 Arial, sans-serif',
				opacity: 0.7
			}}>
				ADVERTISEMENT
			</label>

			{/* Main Card */}
			<div className='bg-white rounded-2xl p-6 shadow-lg mb-8'>
				<div className='flex flex-col items-center'>
					<div className='bg-amber-100 p-4 rounded-full mb-4'>
						<Trophy className='w-8 h-8 text-amber-500' />
					</div>
					<h1 className='text-2xl font-bold text-gray-800 text-center mb-2'>
						You Have got{" "}
						<span className='text-orange-500'>100 coins</span>
					</h1>
					<button
						onClick={handlePlayNow}
						className='bg-gradient-to-r from-orange-400 to-yellow-500 cursor-pointer hover:from-orange-500 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg mt-4 w-full max-w-xs transition-colors'>
						Play Now
					</button>
				</div>
			</div>

			{/* Features Section */}
			<div className='px-2'>
				<h2 className='text-2xl font-bold mb-6 text-center'>
					Play Quiz and Win Coins!
				</h2>

				<ul className='space-y-4'>
					<li className='flex items-start'>
						<CheckCircle className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
						<span>
							Play Quizzes in 25+ categories like GK, Sports,
							Bollywood, Business, Cricket & more!
						</span>
					</li>
					<li className='flex items-start'>
						<Users className='w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0' />
						<span>Compete with lakhs of other players!</span>
					</li>
					<li className='flex items-start'>
						<Award className='w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0' />
						<span>Win coins for every game</span>
					</li>
					<li className='flex items-start'>
						<Star className='w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0' />
						<span>
							Trusted by millions of other quiz enthusiasts like
							YOU!
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}