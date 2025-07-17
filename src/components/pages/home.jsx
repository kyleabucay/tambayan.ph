import Navbar from "../home/navbar"
import Hero from "../home/hero"
import FeaturedListings from "../home/featuredListings"
import Overview from "../home/Overview"
import CtaSection from "../home/CtaSection"
import Footer from "../home/Footer"

export default function Home() {
    return (
        <div className="main-container">
            <Navbar />
            <Hero />
            <FeaturedListings />
            <Overview />
            <CtaSection />
            <Footer />
        </div>
    )
}