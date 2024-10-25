import React, { useEffect, useState } from 'react'

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ display: isVisible ? 'block' : 'none' }} // optional for older browsers
            aria-label="Back to Top"
        >
            ↑
        </button>
    )
}

export default BackToTop
