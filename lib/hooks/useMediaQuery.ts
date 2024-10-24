import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if a media query matches the current window size.
 *
 * @param query - A media query string to match against the window.
 * @returns {boolean} - A boolean indicating if the media query matches.
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}
