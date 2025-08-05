import { Outlet } from "react-router-dom"
import Navbar from "../home/navbar"

export default function LayoutRoute() {
    return (
        <div className="layout-container">
            <Navbar />
            <Outlet />
        </div>
    )
}