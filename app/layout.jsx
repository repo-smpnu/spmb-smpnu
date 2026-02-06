import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta',
    display: 'swap',
})

export const metadata = {
    title: 'SPMB Online | SMP NU Assalafie Unggulan',
    description: 'SPMB Online SMP NU Assalafie Unggulan Babakan Ciwaringin Cirebon. Pendaftaran siswa baru tahun pelajaran 2026/2027 secara online, mudah, cepat, dan resmi.',
    keywords: [
        'SPMB Online',
        'Penerimaan Murid Baru',
        'PPDB SMP NU Assalafie',
        'Sekolah Islam Cirebon',
        'Pendaftaran SMP 2026',
        'SMP NU Unggulan',
        'Pesantren Babakan',
        'Ciwaringin',
        'SPMB SMP NU Assalafie Unggulan',
        'PPDB SMP NU Assalafie Unggulan 2026',
        'Pendaftaran SMP NU Assalafie Babakan Cirebon',
        'SPMB SMP Islam Terpadu Cirebon',
        'PPDB SMP Islam Cirebon 2026',
        'PPDB SMP Cirebon 2026',
        'SPMB SMP Cirebon Terbaru',
        'Pendaftaran SMP Babakan Cirebon',
        'SMP Islam Terbaik di Cirebon PPDB',
        'SPMB SMP Swasta Cirebon',
        'Cara Daftar PPDB SMP 2026 Online',
        'Syarat Pendaftaran SMP 2026',
        'Jadwal PPDB SMP Cirebon 2026',
        'Biaya Masuk SMP Islam Cirebon',
        'Formulir PPDB SMP Online',
        'SPMB SMP NU Assalafie',
        'PPDB SMP NU Assalafie Babakan',
        'Pendaftaran Siswa Baru SMP NU Assalafie',
        'PPDB Online SMP NU Assalafie Unggulan',
        'Info SPMB SMP NU Assalafie',
        'Pendaftaran SMP Islam Babakan Cirebon',
        'SPMB Sekolah Berbasis Pesantren Cirebon',
        'PPDB SMP Unggulan Berbasis Islam Cirebon',
        'Sekolah SMP Murah di Cirebon',
        'SMP Islam Berasrama di Cirebon',
        'Perbedaan SPMB dan PPDB SMP',
        'Kapan PPDB SMP Dibuka 2026',
        'Tips Lolos PPDB SMP Favorit',
        'Persiapan Masuk SMP Islam Unggulan',
        'Memilih SMP Terbaik di Cirebon',
        'SPMB 2026/2027'
    ],
    authors: [{ name: 'SMP NU Assalafie Unggulan' }],
    creator: 'SMP NU Assalafie Unggulan',
    metadataBase: new URL('https://spmb.smpnuassalafie.sch.id'),

    openGraph: {
        title: 'SPMB Online | SMP NU Assalafie Unggulan',
        description: 'Daftar SPMB SMP NU Assalafie Unggulan 2026/2027. Sistem online resmi untuk siswa baru.',
        url: 'https://spmb.smpnuassalafie.sch.id',
        siteName: 'SPMB Online',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'SPMB Online SMP NU Assalafie Unggulan',
            },
        ],
        locale: 'id_ID',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'SPMB Online | SMP NU Assalafie Unggulan',
        description: 'Pendaftaran siswa baru SMP NU Assalafie Unggulan secara online 2026/2027.',
        images: ['/og-image.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    verification: {
        // google: 'your-google-verification-code', // Uncomment and add when ready
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="id" className={plusJakarta.variable}>
            <head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                    rel="stylesheet"
                />
            </head>
            <body className={plusJakarta.className}>
                {children}
            </body>
        </html>
    )
}
