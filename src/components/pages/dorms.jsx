import Button from "../ui/Button"
import Input from "../ui/input"
import { Search, MapPin } from "lucide-react"
import ListingCard from "../ui/ListingCard"
import { allDorms } from ".."
import "../styles/dormslist.css"
import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"

export default function DormsList() {
    const [visibleCount, setVisibleCount] = useState(3)
    const [visibleDorms, setVisibleDorms] = useState([])
    const loadRef = useRef(null)

    const itemsPerPage = 3
    
    useEffect(() => {
        setVisibleDorms(allDorms.slice(0, 3))
    }, [allDorms])
    
    const loadMore = () => {
        const newCount = visibleCount + itemsPerPage
        const newItems = allDorms.slice(visibleCount, newCount)
        setVisibleDorms(prev => [...prev, ...newItems])
        setVisibleCount(newCount)

        setTimeout(() => {
            if (loadRef.current) {
                loadRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
            }
        }, 50)
    }

    const dormCards = useMemo(() => {
        return visibleDorms.map(dorm => (
        <Link to={`${dorm.id}`} key={dorm.id} className="listing-links">
            <ListingCard
                className="listing-card-dorms"
                id={dorm.id}
                name={dorm.name}
                description={dorm.description}
                price={dorm.price}
                location={dorm.location}
                imageUrl={dorm.imageUrl}
                type="Dorm"
                tags={dorm.tags}
            />
        </Link>
        ))
    }, [visibleDorms])

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
                <h2>6 dormitories found</h2>
                <div className="listing-grid" ref={loadRef}>
                    {dormCards}
                </div>
                {visibleDorms.length < allDorms.length &&
                <Button className="view-more" onClick={() => loadMore()}>View more</Button>
                }
            </div>
        </div>
    )
}