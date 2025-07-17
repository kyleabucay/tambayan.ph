import React from "react"
import Card from "./card"
import CardContent from "./CardContent"
import { Heart } from "lucide-react"
import Button from "./button"
import Badge from "./Badge"

function ListingCard({ className, name, description, price, location, imageUrl, type }) {
    return (
        <div className={className}>
            <Card className="card">
                <img src={imageUrl} alt={name} className="card-img"/>
                <Button className="heart-fav">
                    <Heart color="#64748b" size={20} />
                </Button>
                <Badge>{type}</Badge>
            </Card>
            <CardContent className="card-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="price-location">
                    <p>{price}</p>
                    <p>{location}</p>
                </div>
            </CardContent>
        </div>
    )
}

export default React.memo(ListingCard)

// ADD STATE THAT IF THE HEART BUTTON IS CLICKED, IT BECOMES RED