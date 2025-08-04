import { Search, LogIn } from "lucide-react"
import "../styles/navbar.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import Button from "../ui/Button"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="navbar">
            <div className="container">
                <div className="home-logo-container">
                    <Link to="/" className="home-logo">
                        <span className="home-logo-text">Tambayan.ph</span>
                        <img src="public/web-icon/android-chrome-512x512.png" className="logo-image" />
                    </Link>
                </div>

                {/* DESKTOP NAVIGATION */}
                <div className="nav-links">
                    <Link to="dorms" className="nav-link">Dormitories</Link>
                    <Link to="carinderias" className="nav-link">Carinderias</Link>
                    <div className="search-container">
                        <Search className="search-icon" />
                        <input type="text" placeholder="Search listings..." className="search-input" />
                    </div>
                </div>

                {/* DESKTOP AUTHENTICATION */}
                <div className="authentication-buttons">
                    <Link 
                        to="login" 
                        className="auth-btn"
                    >
                        <LogIn className="button-icon" />Login
                    </Link>
                    <Link 
                        to="register" 
                        className="auth-btn register"
                    >
                        Register
                    </Link>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <Button
                    className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
                    onClick={() => toggleMenu()}
                    aria-label="Toggle mobile menu"
                >
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </Button>
            </div>

            {/* MENU MOBILE */}
            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
                <div className="mobile-menu-content">
                    {/* MOBILE NAV LINKS */}
                    <div className="mobile-nav-links">
                        <Link 
                            to="dorms" 
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Dormitories
                        </Link>
                        <Link 
                            to="carinderias" 
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Carinderias
                        </Link>
                    </div>

                    {/* MOBILE SEARCH */}
                    <div className="mobile-search">
                        <div className="search-container">
                            <Search className="search-icon" />
                            <input type="text" placeholder="Search listings..." className="search-input" />
                        </div>
                    </div>

                    {/* MOBILE AUTH */}
                    <div className="mobile-auth-buttons">
                        <Link
                            to="login"
                            className="auth-btn"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <LogIn className="button-icon" />Login
                        </Link>
                        <Link
                            to="register"
                            className="auth-btn register"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}