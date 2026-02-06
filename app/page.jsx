import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Timeline from '@/components/Timeline'
import Programs from '@/components/Programs'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Timeline />
                <Programs />
                <Pricing />
            </main>
            <Footer />
            <WhatsAppWidget />
        </>
    )
}
