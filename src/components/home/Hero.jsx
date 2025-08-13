import { Search, MapPin } from "lucide-react"
import Input from "../ui/Input"
import Button from "../ui/Button"
import "../styles/hero.css"

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Find Your Perfect Student Home & Meals</h1>
                    <p className="hero-description">
                        Discover affordable dormitories and carinderias near your school
                    </p>
                </div>

                <div className="search-form">
                    <div className="search-form-inner">
                        <div className="search-input-container">
                            <Search className="input-icon" size={18} />
                            <Input 
                                className="search-input-body"
                                text="text"
                                placeholder="Search for dormitories or carinderias..."
                            />
                        </div>
                        <div className="location-input-container">
                            <MapPin className="input-icon" size={20} />
                            <Input 
                                className="location-input"
                                text="text"
                                placeholder="Location"
                            />
                        </div>
                        <Button className="search-button">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}