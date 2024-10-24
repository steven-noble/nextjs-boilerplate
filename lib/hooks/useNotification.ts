import { useEffect, useState, useRef } from 'react';

type Options = NotificationOptions & {
    onClose?: (this: Notification, ev: Event) => void;
    onClick?: (this: Notification, ev: Event) => void;
    onError?: (this: Notification, ev: Event) => void;
    onShow?: (this: Notification, ev: Event) => void;
};

const useNotification = (title: string, options?: Options) => {
    const [isPermissionGranted, setIsPermissionGranted] = useState<boolean>(Notification?.permission === 'granted');
    const notification = useRef<Notification | null>(null);

    const notify = () => {
        if (isPermissionGranted && title) {
            notification.current = new Notification(title, options);

            if (options?.onClick) {
                notification.current.onclick = options.onClick;
            }

            if (options?.onClose) {
                notification.current.onclose = options.onClose;
            }

            if (options?.onError) {
                notification.current.onerror = options.onError;
            }

            if (options?.onShow) {
                notification.current.onshow = options.onShow;
            }
        }
    };

    const close = () => {
        notification.current?.close();
    };

    useEffect(() => {
        if (!isPermissionGranted) {
            Notification.requestPermission().then((status) => {
                setIsPermissionGranted(status === 'granted');
            });
        }
    }, [isPermissionGranted]);

    return {
        notify,
        close,
    };
};

export default useNotification;
