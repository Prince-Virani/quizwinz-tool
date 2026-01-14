import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StickyAd from "@/components/BottomStickyADX";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "coinmoro Quiz - Play and Win Rewards",
    template: "%s | coinmoro Quiz",
  },
  description:
    "Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with Quizwinz.",
  keywords:
    "quiz, rewards, play, win, quizzes, knowledge, games, online quizzes",
  authors: [{ name: "coinmoro Quiz" }],
  creator: "coinmoro Quiz",
  openGraph: {
    title: "coinmoro Quiz - Play and Win Rewards",
    description:
      "Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with Quizwinz.",
    url: "https://quiz1.coinmoro.com/",
    siteName: "coinmoro Quiz",
    images: [
      {
        url: "https://quiz1.coinmoro.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "coinmoro Quiz Logo",
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
    canonical: "https://quiz1.coinmoro.com",
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
        
        {/* --- GOOGLE ANALYTICS (Fixed) --- */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-T7XJG2QM8V'
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T7XJG2QM8V', {
              'page_path': window.location.pathname,
            });
          `}
        </Script>

        {/* --- GOOGLE AD MANAGER / GPT (Fixed) --- */}
        <Script 
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" 
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script id="google-gpt-init" strategy="afterInteractive">
          {`window.googletag = window.googletag || {cmd: []};`}
        </Script>

        {/* Google AdSense (Commented out in your original, kept here just in case) */}
        {/* <Script
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4752801785953456'
          strategy="afterInteractive"
          crossOrigin='anonymous'
        /> 
        */}

        <meta name='application-name' content='coinmoro Quiz' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='theme-color' content='#000000' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-900 to-slate-300`}
        suppressHydrationWarning
      >
        <div className='min-h-screen bg-slate-900 max-w-md mx-auto relative pb-20'>
          {children}
          
          {/* Sticky Ad */}
          <StickyAd position="bottom" />
        </div>
      </body>
    </html>
  );
}