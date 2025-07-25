import Tabs from "../ui/tabs"
import TabsList from "../ui/tabslist"
import TabsTrigger from "../ui/tabstrigger"
import TabsContent from "../ui/TabsContent"
import ListingCard from "../ui/ListingCard"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import "../styles/listings.css"
import { featuredCarinderias, featuredDorms } from ".."

export default function FeaturedListings() {
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
                    cardType="card"
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
                cardType="card"
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
                    <Link to="/dorms" className="view-button">View All Dormitories</Link>
                </TabsContent>

                <TabsContent value="carinderias">
                    <div className="listing-grid">
                        {carinderiaCards}
                    </div>
                    <Link to="/carinderias" className="view-button">View All Carinderias</Link>
                </TabsContent>
                
            </Tabs>
        </section>
    )
}