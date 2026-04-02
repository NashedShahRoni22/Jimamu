import React from 'react'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import HowItWorks from './components/home/HowItWorks'
import Download from './components/home/Download'

export default function page() {
  return (
    <main className="relative overflow-x-clip pb-10">
      <div className="pointer-events-none absolute inset-0 mesh-overlay opacity-40"></div>
      <div className="pointer-events-none absolute -top-24 -left-28 h-80 w-80 rounded-full bg-red-200/50 blur-3xl"></div>
      <div className="pointer-events-none absolute top-[32rem] -right-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"></div>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Download/>
    </main>
  )
}
