import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function StepCard ({ step, title, description, icon, isLast }) {
  return (
    <div className="relative text-center">
      <div className="bg-[#A1241C] rounded-full w-20 h-20 flex items-center justify-center text-white mx-auto mb-6">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 bg-[#A1241C] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
        {step}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-full w-full">
          <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      )}
    </div>
  )
}
