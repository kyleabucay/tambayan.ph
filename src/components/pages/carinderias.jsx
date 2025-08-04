import Button from "../ui/Button"
import Input from "../ui/input"
import { Search, MapPin } from "lucide-react"
import { allCarinderias } from ".."
import { useEffect, useMemo, useRef, useState } from "react"
import ListingCard from "../ui/ListingCard"
import { Link } from "react-router-dom"

export default function CarinderiasList() {
    const [visibleCount, setVisibleCount] = useState(3)
    const [visibleCarinderia, setVisibleCarinderia] = useState([])
    const itemsPerPage = 3
    const loadRef = useRef(null)

    useEffect(() => {
        setVisibleCarinderia(allCarinderias.slice(0, 3))
    }, [allCarinderias])

    const loadMore = () => {
        const newCount = visibleCount + itemsPerPage
        const newItems = allCarinderias.slice(visibleCount, newCount)
        setVisibleCarinderia(prev => [...prev, ...newItems])
        setVisibleCount(newCount)

        setTimeout(() => {
            if (loadRef.current) {
                loadRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
            }
        }, 50);
    }

    const carinderiaCards = useMemo(() => {
        return visibleCarinderia.map(carinderia => (
            <Link to={carinderia.id} key={carinderia.id} className="listing-links">
                <ListingCard
                    className="listing-card-dorms"
                    id={carinderia.id}
                    name={carinderia.name}
                    description={carinderia.description}
                    price={carinderia.price}
                    location={carinderia.location}
                    imageUrl={carinderia.imageUrl}
                    type="Carinderia"
                    tags={carinderia.tags}
                />
            </Link>
        ))
    }, [visibleCarinderia])
    
    return (
        <div className="listings-container">
            <div className="dorm-listings">
                <div className="dorm-header">
                    <h1>Find Your Favorite Carinderia</h1>
                    <p>Discover affordable and comfortable student housing near your school</p>
                    <div className="search-form-establishments">
                        <div className="search-form-inner">
                            <div className="search-input-container">
                                <Search className="input-icon" size={18} />
                                <Input 
                                    className="search-input-body"
                                    text="text"
                                    placeholder="Search for carinderias..."
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
                <h2>6 carinderias found</h2>
                <div className="listing-grid" ref={loadRef}>
                    {carinderiaCards}
                </div>
                {visibleCarinderia.length < allCarinderias.length &&
                <Button className="view-more" onClick={() => loadMore()}>View more</Button>
                }
            </div>
        </div>
    )
}





// const [visibleItems, setVisibleItems] = useState(3)
    // const [visibleCarinderia, setVisibleCarinderia] = useState([])
    // const loadRef = useRef(null)

    // const itemsPerPage = 3

    // useEffect(() => {
    //     setVisibleItems(allCarinderias.slice(0,3))
    // }, [allCarinderias])

    // const loadMore = () => {
    //     const newCount = visibleItems + itemsPerPage
    //     const newItems = allCarinderias.slice(newCount)
    //     setVisibleCarinderia(prev => [...prev, newItems])
    //     setVisibleItems(newCount)
    // }

    // const carinderiaCards = useMemo(() => {
    //     return visibleCarinderia.map(carinderia => (
    //         <Link className="listing-links">
    //             <ListingCard
    //                 className="listing-card-dorms"
    //                 key={carinderia.id}
    //                 id={carinderia.id}
    //                 name={carinderia.name}
    //                 description={carinderia.description}
    //                 price={carinderia.price}
    //                 location={carinderia.location}
    //                 imageUrl={carinderia.imageUrl}
    //                 type="Carinderia"
    //                 cardType="card-carinderia"
    //                 tags={carinderia.tags}
    //             />
    //         </Link>
    //     ))
    // }, [visibleCarinderia])
