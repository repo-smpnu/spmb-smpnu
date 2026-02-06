'use client'

import { useState } from 'react'

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false)

    const contacts = [
        {
            name: 'Admin Sekolah',
            phone: '6285133449634',
            message: 'Assalamualaikum, saya ingin bertanya tentang SMP NU Assalafie',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600',
        },
        {
            name: 'Panitia Pendaftaran',
            phone: '62895364427710',
            message: 'Assalamualaikum, saya ingin mendaftar SMP NU Assalafie',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600',
        },
    ]

    const handleContactClick = (phone, message) => {
        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
    }

    return (
        <>
            {/* Widget Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {/* Contact List */}
                {isOpen && (
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 sm:w-96 animate-in slide-in-from-bottom-5 duration-300">
                        {/* Header */}
                        <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center gap-3">
                            <span className="material-icons-round text-2xl">forum</span>
                            <div>
                                <h3 className="font-bold text-lg">Hubungi Kami</h3>
                                <p className="text-xs text-green-100">Pilih kontak untuk chat WhatsApp</p>
                            </div>
                        </div>

                        {/* Contact List */}
                        <div className="p-3 space-y-2 max-h-80 overflow-y-auto">
                            {contacts.map((contact, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleContactClick(contact.phone, contact.message)}
                                    className={`w-full p-4 rounded-xl ${contact.bgColor} hover:shadow-md transition-all duration-200 flex items-center gap-3 group`}
                                >
                                    <div className={`w-12 h-12 rounded-full ${contact.bgColor} border-2 border-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        <span className={`material-icons-round ${contact.iconColor} text-xl`}>person</span>
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h4 className="font-bold text-gray-900 text-sm">{contact.name}</h4>
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className="material-icons-round text-green-600 text-sm">check_circle</span>
                                            <span className="text-xs text-gray-500">WhatsApp</span>
                                        </div>
                                    </div>
                                    <span className="material-icons-round text-gray-400 group-hover:text-primary transition-colors">
                                        arrow_forward
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-3 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                            <p className="text-xs text-gray-500 text-center">
                                Klik kontak untuk memulai chat WhatsApp
                            </p>
                        </div>
                    </div>
                )}

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen
                            ? 'bg-red-500 hover:bg-red-600 rotate-90'
                            : 'bg-green-500 hover:bg-green-600 hover:scale-110'
                        }`}
                    aria-label={isOpen ? 'Close chat' : 'Open chat'}
                >
                    {isOpen ? (
                        <span className="material-icons-round text-white text-3xl">close</span>
                    ) : (
                        <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    )}
                </button>
            </div>
        </>
    )
}
