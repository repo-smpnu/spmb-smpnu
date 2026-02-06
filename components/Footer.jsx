import Link from 'next/link'

export default function Footer() {
    const quickLinks = [
        { label: 'Profil Sekolah', href: 'https://www.smpnuassalafie.sch.id/profil-smp-nu-assalafie-unggulan-babakan-cirebon', target: '_blank' },
        { label: 'Berita & Artikel', href: 'https://www.smpnuassalafie.sch.id/berita', target: '_blank' },
        { label: 'Galeri Kegiatan', href: 'https://www.smpnuassalafie.sch.id/galeri-kegiatan', target: '_blank' },
        { label: 'Panduan', href: 'https://youtu.be/E2pje7u-IFE?si=Ng3F0E7MOfUMKdOX', target: '_blank' },
    ]

    const socialLinks = [
        { icon: 'facebook', href: 'https://www.facebook.com/smpnuassalafieunggulan', label: 'Facebook' },
        { icon: 'music_note', href: 'https://www.tiktok.com/@smpnuassalafieunggulan', label: 'TikTok' },
        { icon: 'camera_alt', href: 'https://www.instagram.com/smpnuassalafieunggulan/', label: 'Instagram' },
    ]

    return (
        <footer className="bg-primary text-white pt-12 lg:pt-16 pb-8" id="kontak">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary">
                                <span className="material-icons-round text-xl">school</span>
                            </div>
                            <span className="font-bold text-lg">SMP NU Assalafie</span>
                        </div>
                        <p className="text-green-100 text-sm leading-relaxed">
                            Membentuk generasi unggul, berakhlak mulia, dan berwawasan global dengan landasan Ahlussunnah Wal Jamaah.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg border-b border-green-500/50 pb-2 inline-block">
                            Narahubung & Lokasi
                        </h4>
                        <ul className="space-y-3 text-sm text-green-100">
                            <li className="flex items-start gap-3">
                                <span className="material-icons-round text-accent text-lg flex-shrink-0">
                                    location_on
                                </span>
                                <span>
                                    Jl. Gondang Manis No. 52, Desa Babakan, Kec. Ciwaringin, Kab. Cirebon.
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons-round text-accent text-lg flex-shrink-0">phone</span>
                                <span>0851-3344-9634 (Admin)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons-round text-accent text-lg flex-shrink-0">email</span>
                                <span>spmb@smpnuassalafie.sch.id</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg border-b border-green-500/50 pb-2 inline-block">
                            Tautan Cepat
                        </h4>
                        <ul className="space-y-2 text-sm text-green-100">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-accent transition-colors"
                                        target={link.target || '_self'}
                                        rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg border-b border-green-500/50 pb-2 inline-block">
                            Ikuti Kami
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="material-icons-round text-lg">{social.icon}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-green-600/50 pt-8 text-center text-sm text-green-200">
                    <p>© 2026 SMP NU Assalafie Unggulan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
