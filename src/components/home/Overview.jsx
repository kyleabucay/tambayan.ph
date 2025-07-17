import Card from "../ui/card"
import CardHeader from "../ui/CardHeader"
import CardContent from "../ui/CardContent"
import { Star, Search, MapPin } from "lucide-react"
import Tabs from "../ui/tabs"
import "../styles/overview.css"

export default function Overview() {
    return (
        <section className="overview">
            <h2 className="overview-title">How Tambayan.ph Works</h2>

            <Tabs>
                <div className="listing-grid">
                    <Card className="overview-card">
                        <CardHeader className="lucide-icon">
                            <Search size={25} />
                        </CardHeader>
                        <h2>Search</h2>
                        <CardContent className="overview-description">
                            <p>Browse through our listings of dormitories and carinderias near your school or workplace.</p>
                        </CardContent>
                    </Card>

                    <Card className="overview-card">
                        <CardHeader className="lucide-icon">
                            <MapPin size={25} />
                        </CardHeader>
                        <h2>Discover</h2>
                        <CardContent className="overview-description">
                            <p>Find detailed information about each listing including prices, and contact details.</p>
                        </CardContent>
                    </Card>

                    <Card className="overview-card">
                        <CardHeader className="lucide-icon">
                            <Star size={25} />
                        </CardHeader>
                        <h2>Save</h2>
                        <CardContent className="overview-description">
                            <p>Create an account to save your favorite listings and get updates on new places.</p>
                        </CardContent>
                    </Card>
                </div>
            </Tabs>
        </section>
    )
}