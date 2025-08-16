import Tabs from "../ui/Tabs"
import TabsList from "../ui/TabsList"
import TabsTrigger from "../ui/TabsTrigger"
import TabsContent from "../ui/TabsContent"
import ListingCard from "../ui/ListingCard"
import { useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/listings.css"
import { getDorms, getCarinderias } from "../../../api"

export default function FeaturedListings() {
    const [dorms, setDorms] = useState([])
    const [carinderias, setCarinderias] = useState([])
    const [loading, setLoading] = useState({
        dorms: false,
        carinderias: false
    })

    // Load Dorms Async Function
    async function loadDorms() {
        if (dorms.length > 0 || loading.dorms) return

        setLoading(prev => ({
            ...prev,
            dorms: true
        }))

        try {
            const data = await getDorms()
            setDorms(data)
        } catch (err) {
            console.error("Error loading dorms", err)
        } finally {
            setLoading(prev => ({
                ...prev,
                dorms: false
            }))
        }
    }

    // Load Carinderias Async Function
    async function loadCarinderias() {
        if (carinderias.length || loading.carinderias) return

        setLoading(prev => ({
            ...prev,
            carinderias: true
        }))

        try {
            const data = await getCarinderias()
            setCarinderias(data)
        } catch(err) {
            console.error("Error loading carinderias", err)
        } finally {
            setLoading(prev => ({
                ...prev,
                carinderias: false
            }))
        }
    }

    useEffect(() => {
        loadDorms()
    }, [])

    const handleOnValChange = val => {
        if (val === "carinderias") {
            loadCarinderias()
        }
    } 

    const dormCards = useMemo(() => 
        dorms.map(dorm => {
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
        ), [dorms]
    )

    const carinderiaCards = useMemo(() => 
        carinderias.map(carinderia => {
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
            )}
        ), [carinderias]
    )


    return (
        <section className="featured-section">
            <div className="featured-container">
                <h2 className="section-title">Featured Listings</h2>
            </div>
            
            <Tabs 
                defaultValue="dormitories"
                onValueChange={handleOnValChange}
            >
                <div className="tabs-list-container">
                <TabsList>
                    <TabsTrigger value="dormitories">Dormitories</TabsTrigger>
                    <TabsTrigger value="carinderias">Carinderias</TabsTrigger>
                </TabsList>
                </div>

                <TabsContent value="dormitories">
                    <div className="listing-grid">
                        {loading.dorms ? (
                            <div className="loading-placeholder">Loading dormitories...</div>
                        ) : (
                            dormCards
                        )}
                    </div>
                    <Link to="/dorms" className="view-button">View All Dormitories</Link>
                </TabsContent>

                <TabsContent value="carinderias">
                    <div className="listing-grid">
                        {loading.carinderias ? (
                            <div className="loading-placeholder">Loading carinderias...</div>
                        ) : (
                            carinderiaCards
                        )}
                    </div>
                    <Link to="/carinderias" className="view-button">View All Carinderias</Link>
                </TabsContent>
                
            </Tabs>
        </section>
    )
}