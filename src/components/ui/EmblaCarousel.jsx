import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react"
import Button from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function EmblaCarousel({ children, className = "", options = {} }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    // MEMOIZE SCROLL BACK
    const scrollPrev = useCallback((e) => {
        if (emblaApi) {
            emblaApi.scrollPrev()
        }
        
    }, [emblaApi])

    // MEMOIZE SCROLL NEXT
    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
        }
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const handleKeyDown = e => {
            if (e.key === "ArrowRight") {
                e.preventDefault()
                scrollNext()
            }

            if (e.key === "ArrowLeft") {
                e.preventDefault()
                scrollPrev()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return() => window.removeEventListener("keydown", handleKeyDown)
    }, [scrollNext, scrollPrev])

    return (
        <div className={`embla-carousel ${className}`}>
            <Button 
                className="embla-btn embla-prev"
                onClick={() => scrollPrev()}
            >
                <ArrowLeft className="carousel-navigate-icon" size={20} />
            </Button>

            <div className="embla-carousel-viewport" ref={emblaRef}>
                <div className="embla-container">
                    {children}
                </div>
            </div>

            <Button 
                className="embla-btn embla-next"
                onClick={() => scrollNext()}
            >
                <ArrowRight className="carousel-navigate-icon" size={20} />
            </Button>
        </div>
    )
}