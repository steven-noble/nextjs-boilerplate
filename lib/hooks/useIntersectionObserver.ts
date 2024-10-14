import { useEffect, useRef, useState, MutableRefObject } from 'react'

const useIntersectionObserver = (
    options: IntersectionObserverInit
): [MutableRefObject<HTMLDivElement | null>, boolean] => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const observerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        }, options)

        if (observerRef.current) {
            observer.observe(observerRef.current)
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current)
            }
        }
    }, [options])

    return [observerRef, isIntersecting]
}

export default useIntersectionObserver
