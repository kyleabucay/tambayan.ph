import { useLocation, useParams } from "react-router-dom"
import "../styles/dorm-details.css"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Heart } from "lucide-react"
import { mockDormitory } from ".."
import Badge from "../ui/Badge"
import EmblaCarousel from "../ui/EmblaCarousel"


export default function DormDetails() {
    const { id } = useParams()
    console.log(id)

    const { 
        images,
        name, 
        price, 
        location,
        description } = mockDormitory

    const carouselImg = images.map((img, index) => {
        return (
            <div className="embla-slide" key={index}>
                <div>
                    <img src={img} alt={name} />
                </div>
            </div>
        )
    })

    return (
        <div className="dorm-details">
            <div className="dorm-details-container">
                <div className="navbar-list-details">
                    <Link className="back-btn-details">
                        <ArrowLeft size={16} />Back
                    </Link>
                    <Badge className="save-btn">
                        <Heart size={16} /> Save
                    </Badge>
                </div>

                <EmblaCarousel options = {{ loop: true }}>
                    {carouselImg}
                </EmblaCarousel>

                <div className="content-details">
                    <div className="details-sec-1">
                        <h2>{name}</h2>
                        <p>{location}</p>
                        <p>{price}</p>
                        <p>{description}</p>
                    </div>
                    <div></div>
                    {/* <Tabs>

                    </Tabs> */}
                    <div></div>
                </div>
            </div>
        </div>
    )
}