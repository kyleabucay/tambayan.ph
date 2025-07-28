export default function TabsList({ className, children }) {
    return (
        <div className={`tabs-list ${className}`}>
            {children}
        </div>
    )
}