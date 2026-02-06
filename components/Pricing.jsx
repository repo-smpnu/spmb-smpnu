'use client'

export default function Pricing() {
    const requirements = [
        'Mengisi formulir pendaftaran',
        'FC Ijazah SD/MI & SHUN (legalisir 3 lbr)',
        'FC Surat Kelulusan & NISN (2 lbr)',
        'FC Akta Kelahiran & Kartu Keluarga',
        'FC KTP Orang Tua (Ayah & Ibu)',
        'Pas Foto 3x4 (Background Merah, 6 lbr)',
    ]

    const pricing = [
        { label: 'Biaya Masuk', amount: 'Rp 2.600.000', highlight: false },
        { label: 'SPP Bulanan', amount: 'Rp 250.000', highlight: true },
        { label: 'Daftar Ulang', sublabel: '(Siswa Lama)', amount: 'Rp 980.000', highlight: false },
    ]

    return (
        <section className="py-16 lg:py-24 bg-slate-50" id="biaya">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Persyaratan Card */}
                    <div className="lg:col-span-1 bg-white rounded-2xl shadow-soft p-6 lg:p-8 border-l-4 border-primary">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="material-icons-round text-primary">assignment</span>
                            Persyaratan
                        </h3>
                        <ul className="space-y-3">
                            {requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="material-icons-round text-green-500 text-lg mt-0.5 flex-shrink-0">
                                        check_circle
                                    </span>
                                    <span className="text-sm text-gray-600">{req}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 p-3 bg-amber-50 rounded-xl text-xs text-amber-800 border border-amber-200">
                            <strong>Catatan Foto:</strong>{' '}
                            <span className="text-rose-600">Putra: Berpeci</span>,{' '}
                            <span className="text-pink-600">Putri: Berjilbab</span>
                        </div>
                    </div>

                    {/* Rincian Biaya Card */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-soft p-6 lg:p-8 border-t-4 border-accent relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-4 right-4 opacity-5">
                            <span className="material-icons-round text-8xl">payments</span>
                        </div>

                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
                            <span className="material-icons-round text-accent">payments</span>
                            Rincian Biaya
                        </h3>

                        {/* Pricing Cards */}
                        <div className="grid sm:grid-cols-3 gap-4 relative z-10 mb-8">
                            {pricing.map((item, index) => (
                                <div key={index} className="bg-gray-50 p-5 rounded-xl text-center border border-gray-100">
                                    <p className="text-gray-500 text-sm font-medium mb-1">{item.label}</p>
                                    {item.sublabel && (
                                        <p className="text-xs text-gray-400 mb-1">{item.sublabel}</p>
                                    )}
                                    <p className={`text-xl lg:text-2xl font-bold ${item.highlight ? 'text-primary' : 'text-gray-900'}`}>
                                        {item.amount}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Payment Info */}
                        <div className="relative z-10">
                            <h4 className="font-bold text-gray-800 mb-4">Cara Pembayaran & Pendaftaran</h4>
                            <div className="bg-blue-50 p-5 rounded-xl flex flex-col sm:flex-row items-start gap-4 border border-blue-100">
                                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 flex-shrink-0">
                                    <span className="material-icons-round text-2xl">smartphone</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-800 mb-1">
                                        Pendaftaran Melalui Aplikasi
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Download aplikasi &quot;Assalafie Babakan Mobile&quot; di Play Store atau App Store.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=id.siesta.app.pesantrenqu.assalafie.babakan.ciwaringin&hl=id"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                                        >
                                            <span className="material-icons-round text-lg">android</span>
                                            Google Play
                                        </a>
                                        <a
                                            href="https://apps.apple.com/us/app/assalafie-babakan-mobile/id6448840690"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                                        >
                                            <span className="material-icons-round text-lg">apple</span>
                                            App Store
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
