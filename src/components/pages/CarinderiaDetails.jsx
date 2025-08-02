import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Heart, MapPin, User, Calendar, Phone, Mail } from "lucide-react"
import { mockCarinderia } from ".."
import Button from "../ui/Button"
import Card from "../ui/card"
import CardContent from "../ui/CardContent"
import EmblaCarousel from "../ui/EmblaCarousel"
import Tabs from "../ui/tabs"
import TabsList from "../ui/tabslist"
import TabsTrigger from "../ui/tabstrigger"
import TabsContent from "../ui/TabsContent"


export default function CarinderiaDetails() {
    const { id } = useParams()
    console.log(id)

    const {
        name,
        description,
        price,
        location,
        address,
        contact,
        distance,
        availability,
        images
    } = mockCarinderia

    const carouselImg = images.map((img, index) => (
        <div className="embla-slide" key={index}>
            <div>
                <img src={img} alt={name} />
            </div>
        </div>
    ))

    const navigate = useNavigate()

    return (
        <div className="dorm-details">
            <div className="dorm-details-container">
                <div className="navbar-list-details">
                    <Button className="back-btn-details" onClick={() => navigate(-1)}>
                        <ArrowLeft size={16} />Back
                    </Button>
                    <Button className="save-btn">
                        <Heart size={16} /> Save
                    </Button>
                </div>

                <EmblaCarousel options={{ loop: true }}>
                    {carouselImg}
                </EmblaCarousel>

                <div className="content-details">
                    <div className="details-sec-1">
                        <h2>{name}</h2>
                        <p>
                            <MapPin size={16}/> {location}
                        </p>
                        <p>{price}</p>
                        <p>{description}</p>
                    </div>

                    <br />

                    <div className="details-sec-2">
                        <div className="listing-grid-details carinderia">
                            <Card className="overview-card-details">
                                <CardContent>
                                    <h2>Carinderia Details</h2>
                                    <div className="details-margin-top">

                                        <div className="icon-flex-start">
                                            <MapPin className="icon-detail" />
                                            <div className="flex-details-dorm">
                                                <p>Distance</p>
                                                <p>{distance}</p>
                                            </div>
                                        </div>

                                        <div className="icon-flex-start">
                                            <Calendar  className="icon-detail" />
                                            <div className="flex-details-dorm">
                                                <p>Availability</p>
                                                <p>{availability}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="overview-card-details">
                                <CardContent>
                                    <h2>Contact Information</h2>
                                    <div className="details-margin-top">

                                        <div className="icon-flex-start">
                                            <div className="flex-details-contact">
                                                <Phone className="icon-detail" />
                                                {contact.phone}
                                            </div>
                                        </div>

                                        <div className="icon-flex-start">
                                            <div className="flex-details-contact">
                                                <Mail className="icon-detail" />
                                                {contact.email}
                                            </div>
                                        </div>

                                        <div className="icon-flex-start">
                                            <div className="flex-details-contact">
                                                <MapPin className="icon-detail" />
                                                {address}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    <div>
                        <h2>Location</h2>
                        <div className="location-container">
                            {/* Insert API for Google Maps Location  */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}