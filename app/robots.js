export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://spmb.smpnuassalafie.sch.id/sitemap.xml',
    }
}
