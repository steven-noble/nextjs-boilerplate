import React from 'react';

interface ProgressLoaderProps {
    progress: number; // A value between 0 and 100 representing the loading progress
    size?: 'small' | 'medium' | 'large'; // Size of the loader
    color?: string; // Custom color for the loader
}

const ProgressLoader: React.FC<ProgressLoaderProps> = ({
    progress,
    size = 'medium',
    color = 'bg-blue-500',
}) => {
    const sizeClasses = {
        small: 'h-2 w-24',
        medium: 'h-4 w-48',
        large: 'h-6 w-64',
    };

    return (
        <div className="flex items-center">
            <div className="relative w-full">
                <div
                    className={`absolute top-0 left-0 h-full rounded-l transition-all duration-300 ${color}`}
                    style={{ width: `${progress}%` }}
                />
                <div
                    className={`bg-gray-200 rounded ${sizeClasses[size]} transition-all duration-300`}
                />
            </div>
            <span className="ml-2">{progress}%</span>
        </div>
    );
};

export default ProgressLoader;
