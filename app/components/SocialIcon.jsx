import React from 'react'

export default function SocialIcon({ children }) {
    return (
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer">
            <span className="text-sm">{children}</span>
        </div>
    )
}
