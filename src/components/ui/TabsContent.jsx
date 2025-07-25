import { useContext } from "react"
import { TabsContext } from "./tabs"

export default function TabsContent({ value, children }) {
    const { active } = useContext(TabsContext)

    return (
        <div className={`tabs-content ${value === active ? "active" : ""}`}>
            {children}
        </div>
    )
}