'use client'

import { useEffect } from 'react'

export default function PanduanModal({ isOpen, onClose }) {
    const steps = [
        {
            title: 'Siapkan Dokumen',
            description: 'Kumpulkan semua dokumen persyaratan yang diperlukan sesuai daftar.',
        },
        {
            title: 'Isi Formulir Online',
            description: 'Download aplikasi Assalafie Babakan Mobile dan isi formulir pendaftaran.',
        },
        {
            title: 'Upload Dokumen',
            description: 'Unggah scan dokumen yang diminta melalui aplikasi.',
        },
        {
            title: 'Tunggu Verifikasi',
            description: 'Tim kami akan memverifikasi dokumen dan menghubungi Anda.',
        },
    ]

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const handleDaftarClick = () => {
        window.open('https://play.google.com/store/apps/details?id=id.siesta.app.pesantrenqu.assalafie.babakan.ciwaringin&hl=id', '_blank')
        onClose()
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">Panduan Pendaftaran</h3>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Close modal"
                        >
                            <span className="material-icons-round text-gray-500">close</span>
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {index + 1}
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">{step.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-3">
                    {/* Tutorial Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                            href="https://psbassalafie.com/informasi-ppdb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                        >
                            <span className="material-icons-round text-lg">article</span>
                            <span className="text-sm">Baca Tutorial</span>
                        </a>
                        <a
                            href="https://youtu.be/E2pje7u-IFE?si=Ng3F0E7MOfUMKdOX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-red-200 text-red-700 font-semibold rounded-xl hover:bg-red-50 hover:border-red-300 transition-all shadow-sm hover:shadow-md"
                        >
                            <span className="material-icons-round text-lg">play_circle</span>
                            <span className="text-sm">Tonton Tutorial</span>
                        </a>
                    </div>

                    {/* Daftar Button */}
                    <button
                        onClick={handleDaftarClick}
                        className="w-full gold-gradient-bg text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                        <span className="material-icons-round">app_registration</span>
                        Daftar Sekarang
                    </button>
                </div>
            </div>
        </div>
    )
}
