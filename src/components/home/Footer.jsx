import "../styles/footer.css"

export default function Footer() {
    return (
        <footer>
            <div>
                <div className="footer-column">
                    <div className="footer-grids main">
                        <h2>Tambayan.ph</h2>
                        <p>Helping Filipino students find affordable housing and food options since 2025.</p>
                    </div>

                    <div className="footer-grids shrink">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>Dormitories</li>
                            <li>Carinderias</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="footer-grids shrink">
                        <h2>Connect With Us</h2>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-note">
                    &copy; {new Date().getFullYear()} Tambayan.ph. All rights reserved.
                </div>
            </div>
        </footer>
    )
}