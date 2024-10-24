/**
 * Expire local storage items based on key, byDate, or clear all.
 *
 * @param key - The key to remove from localStorage.
 * @param byDate - If true, removes the item only if its expiry time has elapsed.
 * @param all - If true, clears all localStorage items.
 * @returns A boolean indicating if the operation was successful.
 */
export const expireLocalStorage = (key: string, byDate: boolean = false, all: boolean = false): boolean => {
    if (all) {
        localStorage.clear();
        return true;
    }

    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return false;
    }

    if (byDate) {
        const item = JSON.parse(itemStr) as { value: unknown; expiry: number }; // Use unknown to avoid 'any'
        const now = new Date();
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return true;
        }
        return false; // Not expired
    } else {
        localStorage.removeItem(key);
        return true; // Successfully removed
    }
};

/**
 * Retrieve an item from localStorage with an expiry check.
 *
 * @param key - The key of the item to retrieve from localStorage.
 * @returns The stored value or null if it doesn't exist or has expired.
 */
export const getWithExpiry = (key: string): unknown | null => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr) as { value: unknown; expiry: number }; // Use unknown to avoid 'any'
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null; // Expired
    }
    return item.value; // Return the stored value
};
