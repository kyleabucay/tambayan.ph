import { useContext } from "react"
import { TabsContext } from "./Tabs"

export default function TabsTrigger({ className, value, children, load }) {
    const { active, setActive } = useContext(TabsContext)

    return (
        <button 
            className={`tabs-trigger ${className} ${value === active ? "active" : ""}`} 
            data-value={value} 
            onClick={() => {
                setActive(value)
                if (load) {
                    load()
                }
            }}
        >
            {children}
        </button>
    )
}