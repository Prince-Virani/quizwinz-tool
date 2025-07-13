import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Yaem2022 Quiz - Play and Win Rewards",
		template: "%s | Yaem2022 Quiz",
	},
	description:
		"Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with Quizwinz.",
	keywords:
		"quiz, rewards, play, win, quizzes, knowledge, games, online quizzes",
	authors: [{ name: "Yaem2022 Quiz" }],
	creator: "Yaem2022 Quiz",
	openGraph: {
		title: "Yaem2022 Quiz - Play and Win Rewards",
		description:
			"Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with Quizwinz.",
		url: "https://quiz.yaem2022.org/",
		siteName: "Yaem2022 Quiz",
		images: [
			{
				url: "https://quiz.yaem2022.org/og-image.png",
				width: 1200,
				height: 630,
				alt: "Yaem2022 Quiz Logo",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	alternates: {
		canonical: "https://quiz.yaem2022.org",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<meta
					name='google-site-verification'
					content='YOUR_GOOGLE_SITE_VERIFICATION_CODE'
				/>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-T7XJG2QM8V'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-T7XJG2QM8V', {
								'page_path': window.location.pathname,
							});
						`,
					}}
				/>

				{/* Google AdSense */}
				<script
					async
					crossOrigin='anonymous'
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5607455208212717'
				/>
				<meta name='application-name' content='Yaem2022 Quiz' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='theme-color' content='#000000' />
				<link rel='shortcut icon' href='/favicon.ico' />
			</head>
			<body
				className={`${inter.className} bg-gradient-to-br from-slate-900 to-slate-300`}
				suppressHydrationWarning>
				<div className='min-h-screen bg-slate-900 max-w-md mx-auto relative'>
					{children}
				</div>
			</body>
		</html>
	);
}
