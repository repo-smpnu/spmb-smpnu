export default function sitemap() {
    const baseUrl = 'https://spmb.smpnuassalafie.sch.id' // Ganti dengan domain asli nanti

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        // Jika nanti ada halaman lain, tambahkan di sini. Contoh:
        // {
        //     url: `${baseUrl}/panduan`,
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.8,
        // },
    ]
}
