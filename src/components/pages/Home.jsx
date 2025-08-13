import Hero from "../home/Hero"
import FeaturedListings from "../home/FeaturedListings"
import Overview from "../home/Overview"
import CtaSection from "../home/CtaSection"
import Footer from "../home/Footer"

export default function Home() {
    return (
        <div className="main-container">
            <Hero />
            <FeaturedListings />
            <Overview />
            <CtaSection />
            <Footer />
        </div>
    )
}