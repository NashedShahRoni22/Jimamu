import React from 'react'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import HowItWorks from './components/home/HowItWorks'
import Download from './components/home/Download'

export default function page() {
  return (
    <div>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Download/>
    </div>
  )
}
