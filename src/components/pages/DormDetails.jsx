import { useLocation, useParams } from "react-router-dom"
import "../styles/dorm-details.css"

export default function DormDetails() {
    const { id } = useParams()
    console.log(id)

    return (
        <div className="dorm-details">
            <h1>Dorm details go here</h1>
        </div>
    )
}