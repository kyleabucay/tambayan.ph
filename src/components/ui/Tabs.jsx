import { useState, createContext } from "react"

const TabsContext = createContext()

export { TabsContext }

export default function Tabs({ defaultValue, children }) {
    const [active, setActive] = useState(defaultValue)
    
    return (
        <div className="tabs" data-default={defaultValue}>
            <TabsContext.Provider value={{ active, setActive }}>
                {children}
            </TabsContext.Provider>
        </div>
    )
}

// POSSIBLE BUG IS THAT THE CARDS IN OVERVIEW WILL BE AFFECTED IF THERE'S A STATE CHANGE, RENDERING OR CHANGE IN FUNCTIONALITY