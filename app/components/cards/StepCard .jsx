import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function StepCard ({ step, title, description, icon, isLast }) {
  return (
    <div className="relative text-center reveal-up">
      <div className="surface-glass rounded-2xl px-6 py-8 h-full">
      <div className="bg-gradient-to-br from-[#A1241C] to-red-500 rounded-2xl w-20 h-20 flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
        {icon}
      </div>
      <div className="absolute top-3 right-3 bg-[#A1241C] text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
        {step}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-10">
          <ArrowRight className="w-6 h-6 text-[#A1241C] mx-auto" />
        </div>
      )}
    </div>
  )
}
