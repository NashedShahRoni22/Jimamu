import React from 'react'

export default function FeatureCard({ icon, title, description, color, delayClass = "" }) {
    return (
        <div className={`reveal-up ${delayClass} rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10`}>
            <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-300 leading-relaxed">{description}</p>
        </div>
    )
}
