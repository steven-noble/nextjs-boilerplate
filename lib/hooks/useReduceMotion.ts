import { useState, useRef, useEffect } from 'react'

const useReducedMotion = (): boolean => {
    const [prefersReducedMotion, setPrefersReducedMotion] =
        useState<boolean>(false)

    const mediaQueryRef = useRef<MediaQueryList | null>(
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-reduced-motion: reduce)')
            : null
    )

    useEffect(() => {
        const mediaQuery = mediaQueryRef.current

        const listener = () => {
            if (mediaQuery) {
                setPrefersReducedMotion(mediaQuery.matches)
            }
        }

        if (mediaQuery) {
            setPrefersReducedMotion(mediaQuery.matches)
            mediaQuery.addEventListener('change', listener)
        }

        return () => {
            if (mediaQuery) {
                mediaQuery.removeEventListener('change', listener)
            }
        }
    }, [])

    return prefersReducedMotion
}

export default useReducedMotion