import { useEffect, useState } from 'react';
import { getBrowserVisibilityProp, getIsDocumentHidden } from '@lib/services/browser.service';

export const usePageVisibility = (): boolean => {
    const [isVisible, setIsVisible] = useState<boolean>(getIsDocumentHidden());

    const onVisibilityChange = () => setIsVisible(getIsDocumentHidden());

    useEffect(() => {
        const visibilityChange: string | undefined = getBrowserVisibilityProp();

        if (visibilityChange) {
            document.addEventListener(visibilityChange, onVisibilityChange, false);
        }

        return () => {
            if (visibilityChange) {
                document.removeEventListener(visibilityChange, onVisibilityChange);
            }
        };
    }, []);

    return isVisible;
};
