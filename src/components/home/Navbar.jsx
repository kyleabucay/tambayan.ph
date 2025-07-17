import { Search, LogIn } from "lucide-react"
import "../styles/navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                {/* LOGO NAVIGATION */}
                <Link to="/" className="home-logo">
                    <span className="home-logo-text">Tambayan.ph</span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="nav-links">
                    <Link to="/dorms" className="nav-link">Dormitories</Link>
                    <Link to="/carinderias" className="nav-link">Carienderias</Link>
                    <div className="search-container">
                        <Search className="search-icon" />
                        <input type="text" placeholder="Search listings..." className="search-input" />
                    </div>
                </div>

                {/* AUTHENTICATION NAVIGATION */}
                <div className="authentication-buttons">
                    <Link to="/login" className="auth-btn">
                        <LogIn className="button-icon" />Login
                    </Link>
                    <button className="auth-btn register">
                        Register
                    </button>
                </div>

            </div>
        </nav>
    )
}