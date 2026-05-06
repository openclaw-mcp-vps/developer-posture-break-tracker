import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PostureTrack — Prevent Developer Back Pain with Smart Breaks',
  description: 'Real-time webcam posture analysis, smart break reminders, and ergonomic desk setup recommendations for remote developers. Stay healthy at $8/mo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c903cb53-6789-45e6-83d3-8dc1a093d01b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
