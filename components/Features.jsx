export default function Features() {
    const features = [
        {
            icon: 'schedule',
            title: '24 Jam Terintegrasi',
            description: 'Pendidikan terintegrasi dengan pengawasan penuh pembina asrama siang & malam.',
            color: 'blue',
        },
        {
            icon: 'school',
            title: 'Guru Berkualitas',
            description: 'Tenaga pengajar profesional lulusan S1 dan S2 yang kompeten di bidangnya.',
            color: 'green',
        },
        {
            icon: 'menu_book',
            title: 'Metode Khusus',
            description: 'Kitab Kuning (AUZAN) & Tahfidz (ILHAMQU) untuk pemahaman cepat dan tepat.',
            color: 'amber',
        },
        {
            icon: 'rocket_launch',
            title: 'Skill Masa Depan',
            description: 'Penguasaan Matematika dasar, Bahasa Inggris, serta Teknologi & Multimedia.',
            color: 'purple',
        },
    ]

    const colorClasses = {
        blue: 'bg-blue-100 text-blue-600',
        green: 'bg-green-100 text-primary',
        amber: 'bg-amber-100 text-amber-600',
        purple: 'bg-purple-100 text-purple-600',
    }

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm">
                        Kenapa Memilih Kami?
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
                        Keunggulan Pendidikan
                    </h2>
                </div>

                {/* Feature Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-6 lg:p-8 rounded-2xl hover:shadow-soft-lg transition-all duration-300 group"
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${colorClasses[feature.color]}`}
                            >
                                <span className="material-icons-round text-2xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
