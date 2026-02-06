export default function Timeline() {
    const timelineItems = [
        {
            title: 'Pendaftaran',
            dates: ['Gel. 1: 01 Feb - 10 Mar 2026', 'Gel. 2: 12 Mar - 20 Mei 2026'],
            description: 'Calon siswa mendaftar secara online atau datang langsung ke sekretariat.',
            icon: 'edit_calendar',
            borderColor: 'border-primary',
            textColor: 'text-primary',
        },
        {
            title: 'Verifikasi Berkas',
            dates: ['01 April - 31 Mei 2026'],
            description: 'Verifikasi dokumen persyaratan yang telah dikumpulkan.',
            icon: 'verified_user',
            borderColor: 'border-blue-500',
            textColor: 'text-blue-600',
            iconColor: 'text-blue-500',
        },
        {
            title: 'Pengumuman Hasil',
            dates: ['12 Juni 2026'],
            description: 'Hasil seleksi akan diumumkan melalui website dan papan pengumuman.',
            icon: 'campaign',
            borderColor: 'border-amber-500',
            textColor: 'text-green-600',
            iconColor: 'text-amber-500',
        },
        {
            title: 'MPLS & KBM',
            dates: ['06 Juli 2026'],
            subtitle: 'Aktif KBM: 07 Juli 2026',
            description: 'Masa orientasi siswa baru untuk pengenalan lingkungan sekolah.',
            icon: 'groups',
            borderColor: 'border-green-500',
            textColor: 'text-primary',
            iconColor: 'text-green-500',
        },
    ]

    return (
        <section className="py-16 lg:py-24 bg-slate-50" id="jadwal">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">
                        Timeline
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
                        Jadwal Kegiatan
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line (Desktop) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 rounded-full hidden lg:block" />

                    {/* Vertical Line (Mobile) */}
                    <div className="absolute left-6 h-full w-0.5 bg-gray-200 rounded-full lg:hidden" />

                    <div className="space-y-8 lg:space-y-12">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="relative flex flex-col lg:flex-row lg:items-center">
                                {/* Left Content (Desktop) - Alternating */}
                                {index % 2 === 0 ? (
                                    <div className="hidden lg:block flex-1 pr-12 text-right">
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                        {item.dates.map((date, i) => (
                                            <p key={i} className={`text-sm font-semibold ${item.textColor || 'text-primary'} mt-1`}>
                                                {date}
                                            </p>
                                        ))}
                                        {item.subtitle && (
                                            <p className="text-xs text-gray-500">{item.subtitle}</p>
                                        )}
                                    </div>
                                ) : (
                                    <div className="hidden lg:block flex-1 pr-12">
                                        <div className="bg-white p-5 rounded-xl shadow-soft border border-gray-100 ml-auto max-w-md text-right">
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Timeline Node */}
                                <div className={`absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-12 h-12 bg-white ${item.borderColor} border-4 rounded-full flex items-center justify-center z-10 shadow-sm`}>
                                    <span className={`material-icons-round ${item.iconColor || item.textColor || 'text-primary'} text-lg`}>
                                        {item.icon}
                                    </span>
                                </div>

                                {/* Mobile Content */}
                                <div className="lg:hidden ml-20 mb-3">
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    {item.dates.map((date, i) => (
                                        <p key={i} className={`text-sm font-semibold ${item.textColor || 'text-primary'} mt-1`}>
                                            {date}
                                        </p>
                                    ))}
                                    {item.subtitle && (
                                        <p className="text-xs text-gray-500">{item.subtitle}</p>
                                    )}
                                </div>

                                {/* Right Content (Desktop) - Alternating */}
                                {index % 2 === 0 ? (
                                    <div className="flex-1 lg:pl-12 ml-20 lg:ml-0">
                                        <div className="bg-white p-5 rounded-xl shadow-soft border border-gray-100">
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex-1 lg:pl-12 ml-20 lg:ml-0">
                                        <div className="hidden lg:block">
                                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                            {item.dates.map((date, i) => (
                                                <p key={i} className={`text-sm font-semibold ${item.textColor || 'text-primary'} mt-1`}>
                                                    {date}
                                                </p>
                                            ))}
                                            {item.subtitle && (
                                                <p className="text-xs text-gray-500">{item.subtitle}</p>
                                            )}
                                        </div>
                                        <div className="lg:hidden bg-white p-5 rounded-xl shadow-soft border border-gray-100">
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
