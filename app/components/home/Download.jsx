import { DownloadIcon } from 'lucide-react';
import React from 'react'
import FeatureList from '../cards/FeatureList';

export default function Download() {
    const senderFeatures = [
        "Post delivery requests easily",
        "Set your own delivery charges",
        "Track parcels in real-time",
        "Rate and review riders"
    ];

    const riderFeatures = [
        "Earn money on your schedule",
        "Choose delivery requests",
        "National & international deliveries",
        "Verified rider badge"
    ];
    return (
        <section id="download" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#A1241C] via-red-600 to-[#111827] gradient-pan px-6 py-12 sm:px-10 sm:py-14 text-center text-white">
                    <div className="pointer-events-none absolute -top-10 -left-10 h-44 w-44 rounded-full bg-white/20 blur-3xl"></div>
                    <div className="pointer-events-none absolute -bottom-14 -right-8 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"></div>

                    <div className="space-y-8 relative z-10">
                    <p className="reveal-up text-xs font-semibold uppercase tracking-[0.2em] text-red-100">Get The App</p>
                    <h2 className="reveal-up delay-1 text-4xl sm:text-5xl font-black mb-4">Ready to Get Started?</h2>
                    <p className="reveal-up delay-2 text-lg sm:text-xl text-red-50 max-w-2xl mx-auto">
                        Download Caro today and experience the future of parcel delivery.
                        Available on both iOS and Android platforms.
                    </p>

                    <div className="reveal-up delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-[#A1241C] hover:bg-red-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <DownloadIcon className="w-5 h-5" />
                            <span>Download for iOS</span>
                        </button>
                        <button className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <DownloadIcon className="w-5 h-5" />
                            <span>Download for Android</span>
                        </button>
                    </div>

                    <div className="reveal-up delay-4 mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FeatureList title="For Senders" features={senderFeatures} />
                        <FeatureList title="For Riders" features={riderFeatures} />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
