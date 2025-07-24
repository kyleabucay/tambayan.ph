import React from "react"
import Card from "./card"
import CardContent from "./CardContent"
import { Heart } from "lucide-react"
import Button from "./Button"
import Badge from "./Badge"
import { useEffect } from "react"

function ListingCard({ className, name, description, price, location, imageUrl, type, cardType, tags = [], id }) {
    const badgeTypes = tags.map((tag, index) => {
        return (
            <div key={tag + index}>
                <Badge className="badges">{tags[index]}</Badge>
            </div>
        )
    })

    return (
        <div className={className}>
            <Card className={cardType}>
                <img src={imageUrl} alt={name} className="card-img"/>
                <Button className="heart-fav">
                    <Heart color="#64748b" size={20} />
                </Button>
                <Badge className={`list-type ${type === "Dorm" ? "dorm" : "carinderia"}`}>{type}</Badge>
            </Card>
            <CardContent className={`card-content ${tags.length > 0 ? "list" : ""}`}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="price-location">
                    <p>{price}</p>
                    <p>{location}</p>
                </div>
            </CardContent>

            {tags.length > 0 && 
                <div className="tags-container">
                    {badgeTypes}
                </div>
            }

        </div>
    )
}

export default React.memo(ListingCard)

// ADD STATE THAT IF THE HEART BUTTON IS CLICKED, IT BECOMES RED