import { useParams, useNavigate } from "react-router-dom"
import "../styles/dorm-details.css"
import { ArrowLeft } from "lucide-react"
import { Heart, MapPin, User, Calendar, Phone, Mail } from "lucide-react"
import { mockDormitory } from ".."
import Button from "../ui/Button"
import Card from "../ui/Card"
import CardContent from "../ui/CardContent"
import EmblaCarousel from "../ui/EmblaCarousel"
import Tabs from "../ui/Tabs"
import TabsList from "../ui/TabsList"
import TabsTrigger from "../ui/TabsTrigger"
import TabsContent from "../ui/TabsContent"


export default function DormDetails() {
    const { id } = useParams()
    console.log(id)

    const { 
        images,
        name, 
        price, 
        location,
        description,
        gender,
        distance,
        availability,
        address,
        contact,
        amenities,
        rules } = mockDormitory

    const carouselImg = images.map((img, index) => {
        return (
            <div className="embla-slide" key={index}>
                <div>
                    <img src={img} alt={name} />
                </div>
            </div>
        )
    })

    const amenityEl = amenities.map((amenity, index) => {
        return (
            <li key={index} className="li-grid">
                <div className="li-grid-bullet"></div>
                {amenity}
            </li>
        )
    })

    const rulesEl = rules.map((rule, index) => {
        return (
            <li key={index} className="li-grid">
                <div className="li-grid-bullet red"></div>
                {rule}
            </li>
        )
    })

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

                <EmblaCarousel options = {{ loop: true }}>
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
                        <div className="listing-grid-details">
                            <Card className="overview-card-details">
                                <CardContent>
                                    <h2>Dormitory Details</h2>
                                    <div className="details-margin-top">

                                        <div className="icon-flex-start">
                                            <User className="icon-detail" />
                                            <div className="flex-details-dorm">
                                                <p>Gender Restriction</p>
                                                <p>{gender}</p>
                                            </div>
                                        </div>

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
                    </div>
                    <br />
                    <Tabs defaultValue="amenities">
                        <div className="tabs-list-container utilities">
                            <TabsList className="utilities">
                                <TabsTrigger value="amenities" className="utilities">Amenities</TabsTrigger>
                                <TabsTrigger value="house-rules" className="utilities">House Rules</TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="tabs-content-utilities">
                            <TabsContent value="amenities">
                                <ul className="ul-grid">
                                    {amenityEl}
                                </ul>
                            </TabsContent>

                            <TabsContent value="house-rules">
                                <ul className="ul-grid">
                                    {rulesEl}
                                </ul>
                            </TabsContent>
                        </div>
                    </Tabs>

                    <div>
                        <h2>Location</h2>
                        <div className="location-container">
                            {/* Insert API for Google Maps Location  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}