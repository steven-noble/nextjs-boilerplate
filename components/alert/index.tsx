import React from 'react';

interface AlertProps {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type = 'info', onClose }) => {
    const alertStyles = {
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        warning: 'bg-yellow-100 text-yellow-800',
        info: 'bg-blue-100 text-blue-800',
    };

    return (
        <div
            className={`flex items-center p-4 rounded-lg mb-4 shadow-md ${alertStyles[type]}`}
            role="alert"
        >
            <div className="flex-1">
                <p>{message}</p>
            </div>
            {onClose && (
                <button
                    className="ml-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={onClose}
                    aria-label="Close alert"
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9l-5 5a1 1 0 001.414 1.414L10 11.414l5 5A1 1 0 0016.586 14l-5-5 5-5A1 1 0 0014 4.414l-5 5-5-5A1 1 0 003.414 6l5 5-5 5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Alert;
