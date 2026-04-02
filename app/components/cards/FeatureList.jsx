import React from 'react'

export default function FeatureList({ title, features }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 text-left">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2 text-red-50">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
