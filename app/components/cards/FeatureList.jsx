import React from 'react'

export default function FeatureList({ title, features }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  )
}
