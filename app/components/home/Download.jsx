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
        <section id="download" className="py-20 bg-gradient-to-r from-red-500 to-blue-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Download Jimamu today and experience the future of parcel delivery.
                        Available on both iOS and Android platforms.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <DownloadIcon className="w-5 h-5" />
                            <span>Download for iOS</span>
                        </button>
                        <button className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <DownloadIcon className="w-5 h-5" />
                            <span>Download for Android</span>
                        </button>
                    </div>

                    <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FeatureList title="For Senders" features={senderFeatures} />
                        <FeatureList title="For Riders" features={riderFeatures} />
                    </div>
                </div>
            </div>
        </section>
    )
}
