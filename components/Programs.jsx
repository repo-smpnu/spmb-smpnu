export default function Programs() {
    const extracurricular = [
        { icon: 'menu_book', title: "Tahfidz Al-Qur'an", color: 'green' },
        { icon: 'history_edu', title: 'Kajian Kitab Kuning', color: 'amber' },
        { icon: 'language', title: 'Pengembangan Bahasa (Inggris)', color: 'blue' },
        { icon: 'computer', title: 'Multimedia & Teknologi', color: 'rose' },
    ]

    const facilities = [
        { icon: 'domain', title: 'Gedung Sekolah', subtitle: 'Representatif & Modern' },
        { icon: 'ac_unit', title: 'Ruang Kelas', subtitle: 'Nyaman & Ber-AC' },
        { icon: 'hotel', title: 'Asrama Santri', subtitle: 'Khusus & Terjaga' },
        { icon: 'devices', title: 'Laboratorium', subtitle: 'Komputer & Teknologi' },
    ]

    const colorClasses = {
        green: 'bg-green-100 text-green-600',
        amber: 'bg-amber-100 text-amber-600',
        blue: 'bg-blue-100 text-blue-600',
        rose: 'bg-rose-100 text-rose-600',
    }

    return (
        <section className="py-16 lg:py-24 bg-white" id="program">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Ekstrakurikuler */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-primary rounded-xl text-white">
                                <span className="material-icons-round text-xl">star</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Program Ekstrakurikuler
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {extracurricular.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-4 bg-slate-50 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-soft transition-all group"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform ${colorClasses[item.color]}`}
                                    >
                                        <span className="material-icons-round text-xl">{item.icon}</span>
                                    </div>
                                    <span className="font-semibold text-gray-800">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fasilitas */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-primary rounded-xl text-white">
                                <span className="material-icons-round text-xl">apartment</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Fasilitas Unggulan
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {facilities.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 p-5 rounded-xl border border-gray-100 hover:shadow-soft transition-all group"
                                >
                                    <span className="material-icons-round text-primary text-2xl mb-3 block group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </span>
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
