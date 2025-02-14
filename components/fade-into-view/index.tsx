'use client'

import useIntersectionObserver from '@lib/hooks/useIntersectionObserver'
import { useEffect, useState } from 'react'

const FadeIntoView = ({ children }: any) => {
    const [isVisible, setIsVisible] = useState(false)
    const [observerRef, isIntersecting] = useIntersectionObserver({
        root: null, // relative to the viewport
        rootMargin: '-20%',
        threshold: 0,
    })

    useEffect(() => {
        if (isIntersecting) {
            setIsVisible(true)
        }
    }, [isIntersecting])

    return (
        <div
            ref={observerRef}
            className={`transition-all duration-[1000ms] transform ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </div>
    )
}

export default FadeIntoView
