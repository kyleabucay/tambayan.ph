import Tabs from "../ui/tabs"
import TabsList from "../ui/tabslist"
import TabsTrigger from "../ui/tabstrigger"
import TabsContent from "../ui/TabsContent"
import ListingCard from "../ui/ListingCard"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import "../styles/listings.css"

export default function FeaturedListings() {
    const featuredDorms = [
    {
        id: "1",
        name: "Magis Residences",
        description: "Modern dormitory with complete amenities near Xavier University",
        price: "₱4,000 - ₱6,000",
        location: "Pueblo de Oro, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
        isFavorite: false
    },
    {
        id: "2",
        name: "University Tower",
        description: "Affordable student housing with WiFi and clean study areas",
        price: "₱5,500 - ₱7,000",
        location: "Upper Balulang, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
        isFavorite: true
    },
    {
        id: "3",
        name: "Blue Residences",
        description: "Students-only dorm with 24/7 security and laundry service",
        price: "₱3,000 - ₱5,000",
        location: "Fuente de Oro, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        isFavorite: false
    }
    ]

    const featuredCarinderias = [
    {
        id: "1",
        name: "Aling Nena's Carinderia",
        description: "Home-cooked Filipino meals at student-friendly prices",
        price: "₱60 - ₱100",
        location: "España Boulevard, Manila",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80",
        isFavorite: true,
    },
    {
        id: "2",
        name: "Kuya Ben's Lutong Bahay",
        description: "Affordable silog meals and Filipino classics",
        price: "₱50 - ₱90",
        location: "P. Noval St, Manila",
        image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=80",
        isFavorite: false,
    },
    {
        id: "3",
        name: "Ate Lorna's Eatery",
        description: "Budget-friendly meals with vegetarian options",
        price: "₱45 - ₱85",
        location: "Kalayaan Avenue, Quezon City",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        isFavorite: false,
    }
    ]

    const dormCards = useMemo(() => 
        featuredDorms.map(dorm => {
            return (
                <ListingCard
                    className="listing-card"
                    key={dorm.id}
                    id={dorm.id}
                    name={dorm.name}
                    description={dorm.description}
                    price={dorm.price}
                    location={dorm.location}
                    imageUrl={dorm.imageUrl}
                    type="Dorm"
                />
            )}
        ), []
    )

    const carinderiaCards = featuredCarinderias.map(carinderia => {
        return (
            <ListingCard
                className="listing-card"
                key={carinderia.id}
                id={carinderia.id}
                name={carinderia.name}
                description={carinderia.description}
                price={carinderia.price}
                location={carinderia.location}
                imageUrl={carinderia.image}
                type="Carinderia"
            />
        )
    })

    return (
        <section className="featured-section">
            <div className="featured-container">
                <h2 className="section-title">Featured Listings</h2>
            </div>
            
            <Tabs defaultValue="dormitories">
                <div className="tabs-list-container">
                <TabsList>
                    <TabsTrigger value="dormitories">Dormitories</TabsTrigger>
                    <TabsTrigger value="carinderias">Carinderias</TabsTrigger>
                </TabsList>
                </div>

                <TabsContent value="dormitories">
                    <div className="listing-grid">
                        {dormCards}
                    </div>
                    <div className="view-all-container">
                        <Link to="/dorms" className="view-button">View All Dormitories</Link>
                    </div>
                </TabsContent>

                <TabsContent value="carinderias">
                    <div className="listing-grid">
                        {carinderiaCards}
                    </div>
                    <div className="view-all-container">
                        <Link to="/carinderias" className="view-button">View All Carinderias</Link>
                    </div>
                </TabsContent>
                
            </Tabs>
        </section>
    )
}