import React from 'react'

export default function FooterLink({ href, children }) {
    return (
        <li>
            <a href={href} className="hover:text-[#A1241C] transition-colors">
                {children}
            </a>
        </li>
    )
}
