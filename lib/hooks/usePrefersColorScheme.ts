import * as React from 'react';

/**
 * React hook for determining the preferred color scheme (aka 'prefers-color-scheme').
 * When server-side rendered, it returns `no-preference`.
 *
 * @see [Usage] https://github.com/rfoel/use-prefers-color-scheme#usage
 * @returns { 'dark' | 'light' | 'no-preference' } - One of `dark`, `light`, or `no-preference`.
 */
export const usePrefersColorScheme = (): 'dark' | 'light' | 'no-preference' => {
    const [preferredColorScheme, setPreferredColorScheme] = React.useState<
        'dark' | 'light' | 'no-preference'
    >(() => {
        // If window is undefined (SSR), return 'no-preference'
        if (typeof window === 'undefined') return 'no-preference';

        // Initialize the state based on the current color scheme
        const isDark = window.matchMedia('(prefers-color-scheme: dark)');
        const isLight = window.matchMedia('(prefers-color-scheme: light)');

        return isDark.matches
            ? 'dark'
            : isLight.matches
            ? 'light'
            : 'no-preference';
    });

    React.useEffect(() => {
        // Ensure window.matchMedia is supported
        if (typeof window.matchMedia !== 'function') return;

        // Define MediaQueryList observables
        const isDark = window.matchMedia('(prefers-color-scheme: dark)');
        const isLight = window.matchMedia('(prefers-color-scheme: light)');

        const darkListener = (event: MediaQueryListEvent) => {
            if (event.matches) setPreferredColorScheme('dark');
        };

        const lightListener = (event: MediaQueryListEvent) => {
            if (event.matches) setPreferredColorScheme('light');
        };

        // Subscribe to changes in the preferred color scheme
        isDark.addEventListener('change', darkListener);
        isLight.addEventListener('change', lightListener);

        // Cleanup function to remove listeners
        return () => {
            isDark.removeEventListener('change', darkListener);
            isLight.removeEventListener('change', lightListener);
        };
    }, []);

    return preferredColorScheme;
};

export default usePrefersColorScheme;
