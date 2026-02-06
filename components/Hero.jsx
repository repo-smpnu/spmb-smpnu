'use client'

import Image from 'next/image'
import { useState } from 'react'
import PanduanModal from './PanduanModal'

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleDaftarClick = () => {
        window.open('https://play.google.com/store/apps/details?id=id.siesta.app.pesantrenqu.assalafie.babakan.ciwaringin&hl=id', '_blank')
    }

    return (
        <>
            <section className="hero-gradient relative overflow-hidden py-12 lg:py-20" id="home">
                {/* Decorative blobs */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-40 -mb-40" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                            {/* Badge */}
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light border border-primary/20 text-primary text-sm font-semibold">
                                <span className="material-icons-round text-base mr-2">auto_awesome</span>
                                Tahun Pelajaran 2026/2027
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-2">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                                    SPMB <span className="text-primary">Online</span>
                                </h1>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700">
                                    Sistem Penerimaan Murid Baru
                                </h2>
                            </div>

                            {/* School Info */}
                            <div className="space-y-1">
                                <p className="text-xl sm:text-2xl font-bold text-primary">
                                    SMP NU Assalafie Unggulan
                                </p>
                                <p className="text-base sm:text-lg text-gray-500 font-medium">
                                    Babakan Ciwaringin Cirebon — Terakreditasi B
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Mencetak generasi milenial yang berintelektual moderat, religius, berkarakter Pancasilais, serta unggul dalam akhlak dan teknologi.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                                <button
                                    onClick={handleDaftarClick}
                                    className="gold-gradient-bg text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                                >
                                    <span className="material-icons-round">app_registration</span>
                                    Daftar Sekarang
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-white text-gray-700 border-2 border-gray-200 font-semibold px-8 py-4 rounded-xl shadow-soft hover:shadow-lg hover:border-primary/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                                >
                                    <span className="material-icons-round text-primary">info</span>
                                    Panduan Pendaftaran
                                </button>
                            </div>

                            {/* Social Proof */}
                            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center shadow-sm">
                                        <span className="material-icons-round text-blue-600 text-lg">person</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-green-100 flex items-center justify-center shadow-sm">
                                        <span className="material-icons-round text-green-600 text-lg">person</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center shadow-sm">
                                        <span className="material-icons-round text-purple-600 text-lg">person</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light flex items-center justify-center text-xs font-bold text-primary shadow-sm">
                                        +100
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-gray-600">
                                    <span className="text-primary font-bold">100+</span> Warga Sekolah
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative">
                                {/* Background shape */}
                                <div className="absolute inset-4 bg-accent/20 rounded-3xl transform rotate-3" />

                                {/* Main Image */}
                                <div className="relative rounded-3xl shadow-soft-lg overflow-hidden h-[320px] sm:h-[400px] lg:h-[480px] w-full">
                                    <Image
                                        src="/hero-bg.png"
                                        alt="SMP NU Assalafie Unggulan"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Accreditation Badge */}
                                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-white p-4 rounded-2xl shadow-card border border-gray-100 max-w-[240px] animate-float">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2.5 bg-primary-light rounded-xl text-primary flex-shrink-0">
                                            <span className="material-icons-round text-xl">verified</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">Terakreditasi B</p>
                                            <p className="text-xs text-gray-500 mt-0.5">Standar pendidikan berkualitas nasional</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PanduanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
