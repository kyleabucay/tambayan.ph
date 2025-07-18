import "../styles/cta-section.css"
import { Link } from "react-router-dom"

export default function CtaSection() {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <h2>Ready to Find Your Perfect Place?</h2>
                <p>Join thousands of Filipino students and young professionals who found their ideal accommodations and favorite eateries through Tambayan.ph.</p>
                <Link to="/register" className="sign-up-btn">Sign Up Now</Link>
            </div>
        </section>
    )
}