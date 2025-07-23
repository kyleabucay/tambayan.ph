import Button from "../ui/Button"
import Input from "../ui/input"
import { Search, MapPin } from "lucide-react"
import ListingCard from "../ui/ListingCard"
import { allFeaturedDorms } from ".."
import "../styles/dormslist.css"

export default function DormsList() {
    const dormCards = allFeaturedDorms.map(dorm => {
        return (
            <ListingCard
                className="listing-card-dorms"
                key={dorm.id}
                id={dorm.id}
                name={dorm.name}
                description={dorm.description}
                price={dorm.price}
                location={dorm.location}
                imageUrl={dorm.imageUrl}
                type="Dorm"
                cardType="card-dorm"
                tags={dorm.tags}
            />
        )}
    )

    return (
        <div className="listings-container">
            <div className="dorm-listings">
                <div className="dorm-header">
                    <h1>Find Your Perfect Dormitory</h1>
                    <p>Discover affordable and comfortable student housing near your school</p>
                    <div className="search-form-establishments">
                        <div className="search-form-inner">
                            <div className="search-input-container">
                                <Search className="input-icon" size={18} />
                                <Input 
                                    className="search-input-body"
                                    text="text"
                                    placeholder="Search for dormitories..."
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
            </div>
            <div className="dorm-content">
                <h1>6 dormitories found</h1>
                <div className="listing-grid">
                    {dormCards}
                </div>
            </div>
        </div>
    )
}