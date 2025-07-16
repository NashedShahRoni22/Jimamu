import React from 'react'

export default function FeatureCard({ icon, title, description, color }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center text-white mb-4`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}
