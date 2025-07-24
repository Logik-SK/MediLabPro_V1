import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-0 bg-gradient-to-r from-white via-slate-100 to-sky-100 text-gray-800 py-10 text-center shadow-[0_-8px_32px_0_rgba(0,0,0,0.08)] relative overflow-hidden">

            {/* Decorative blurred background circles */}
            <div className="absolute top-0 left-1/4 w-40 h-40 bg-sky-200 opacity-40 rounded-full blur-2xl pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-100 opacity-40 rounded-full blur-2xl pointer-events-none -z-10"></div>

            {/* Brand Title */}
            <div className="mb-4 text-2xl font-semibold tracking-wide drop-shadow-sm">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    MediLabPro
                </span>
            </div>

            {/* Navigation / Social Links */}
            <div className="mb-4 flex items-center justify-center gap-8 text-sm font-medium">
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                >
                    GitHub
                </a>
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition"
                >
                    Twitter
                </a>
                <a
                    href="mailto:contact@example.com"
                    className="hover:text-teal-600 transition"
                >
                    Contact
                </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} MediLabPro. All rights reserved.
            </div>
        </footer>
    );
}
