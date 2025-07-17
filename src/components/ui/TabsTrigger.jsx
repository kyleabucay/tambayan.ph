import { useContext } from "react"
import { TabsContext } from "./tabs"

export default function TabsTrigger({ value, children }) {
    const { active, setActive} = useContext(TabsContext)

    return (
        <button 
            className={`tabs-trigger ${value === active ? "active" : ""}`} 
            data-value={value} 
            onClick={() => setActive(value)}
        >
            {children}
        </button>
    )
}