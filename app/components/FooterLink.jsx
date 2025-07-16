import React from 'react'

export default function FooterLink({ href, children }) {
    return (
        <li>
            <a href={href} className="hover:text-red-500 transition-colors">
                {children}
            </a>
        </li>
    )
}
