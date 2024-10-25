import React, { useEffect } from 'react';

interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info';
    duration?: number; // Duration before the toast automatically dismisses
    onClose: () => void; // Callback function when the toast is closed
}

const Toast: React.FC<ToastProps> = ({
    message,
    type = 'info',
    duration = 3000,
    onClose,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer); // Clear the timer if the component is unmounted
    }, [duration, onClose]);

    const toastClasses = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    };

    return (
        <div
            className={`fixed bottom-5 right-5 w-80 p-4 rounded shadow-lg text-white transition-transform transform duration-300 ease-in-out ${toastClasses[type]}`}
            role="alert"
        >
            <div className="flex justify-between items-center">
                <div>
                    {message}
                </div>
                <button
                    onClick={onClose}
                    className="ml-4 text-white focus:outline-none"
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Toast;
