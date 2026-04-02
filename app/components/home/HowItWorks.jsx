import { MapPin, Package, Users } from 'lucide-react';
import React from 'react'
import StepCard from '../cards/StepCard ';

export default function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Post Your Request",
            description: "Create a delivery request with pickup and drop-off details, set your delivery charge",
            icon: <Package className="w-12 h-12" />
        },
        {
            step: "02",
            title: "Get Matched",
            description: "Our system connects you with verified riders in your area who accept your request",
            icon: <Users className="w-12 h-12" />
        },
        {
            step: "03",
            title: "Track & Deliver",
            description: "Track your parcel in real-time until it reaches its destination safely",
            icon: <MapPin className="w-12 h-12" />
        }
    ];
    return (
        <section id="how-it-works" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="reveal-up text-xs font-semibold uppercase tracking-[0.2em] text-[#A1241C] mb-4">Journey Flow</p>
                    <h2 className="reveal-up delay-1 text-4xl sm:text-5xl font-black text-gray-900 mb-4">How Caro Works</h2>
                    <p className="reveal-up delay-2 text-xl text-gray-600 max-w-2xl mx-auto">
                        Getting started with Caro is simple and straightforward
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            step={step.step}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
