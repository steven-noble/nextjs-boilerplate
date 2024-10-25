import { useCallback, useEffect, useState } from 'react';

/**
 * A custom hook that provides functionality to copy text to the clipboard.
 *
 * @param text - The text to be copied to the clipboard.
 * @returns A tuple containing:
 *   - copied: A boolean indicating whether the text was successfully copied.
 *   - copy: A function to trigger the copy action.
 */
export const useCopyToClipboard = (text: string): [boolean, () => void] => {
    const copyToClipboard = (str: string): boolean => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';

        // Ensure document.body is defined
        if (document.body) {
            document.body.appendChild(el);

            const selection = document.getSelection();
            const selectedRange =
                selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

            el.select();
            const success = document.execCommand('copy');
            document.body.removeChild(el);

            // Check if selection is valid before attempting to manipulate it
            if (selectedRange) {
                selection.removeAllRanges();
                selection.addRange(selectedRange);
            }
            return success;
        }
        return false; // If document.body is not available, return false
    };

    const [copied, setCopied] = useState<boolean>(false);

    const copy = useCallback(() => {
        if (!copied) setCopied(copyToClipboard(text));
    }, [text, copied]);

    useEffect(() => {
        return () => setCopied(false);
    }, [text]);

    return [copied, copy];
};
