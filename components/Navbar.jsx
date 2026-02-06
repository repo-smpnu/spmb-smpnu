'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#home', label: 'Beranda' },
        { href: '#program', label: 'Program' },
        { href: '#jadwal', label: 'Jadwal' },
        { href: '#biaya', label: 'Biaya' },
        { href: '#kontak', label: 'Kontak' },
    ]

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav
            className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-soft'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 lg:h-18 items-center">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                            <span className="material-icons-round text-xl">school</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight text-primary">SMP NU Assalafie</span>
                            <span className="text-xs font-medium text-gray-400">Unggulan</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://play.google.com/store/apps/details?id=id.siesta.app.pesantrenqu.assalafie.babakan.ciwaringin&hl=id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl font-semibold text-sm flex items-center gap-2 group"
                        >
                            <span>Daftar Sekarang</span>
                            <span className="material-icons-round text-sm group-hover:translate-x-0.5 transition-transform">
                                arrow_forward
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 hover:text-primary p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-icons-round text-2xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu lg:hidden ${isMenuOpen ? 'open' : ''}`}>
                    <div className="py-4 space-y-2 border-t border-gray-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary-light/50 rounded-xl font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://play.google.com/store/apps/details?id=id.siesta.app.pesantrenqu.assalafie.babakan.ciwaringin&hl=id"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="block mx-4 mt-4 gold-gradient-bg text-white text-center px-6 py-3 rounded-xl font-semibold shadow-lg"
                        >
                            Daftar Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
