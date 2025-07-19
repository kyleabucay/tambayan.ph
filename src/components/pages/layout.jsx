import { Outlet } from "react-router-dom"
import Navbar from "../home/navbar"

export default function LayoutRoute() {
    return (
        <div className="main-container">
            <Navbar />
            <Outlet />
        </div>
    )
}