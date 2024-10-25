import React from 'react';

interface Hotspot {
    id: string;
    x: number; // x position in percentage
    y: number; // y position in percentage
    label: string;
}

interface HotspotsProps {
    imageSrc: string;
    hotspots: Hotspot[];
}

const Hotspots: React.FC<HotspotsProps> = ({ imageSrc, hotspots }) => {
    return (
        <div className="relative w-full">
            <img src={imageSrc} alt="Hotspot Background" className="w-full h-auto" />
            {hotspots.map(({ id, x, y, label }) => (
                <div
                    key={id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                        left: `${x}%`,
                        top: `${y}%`,
                    }}
                >
                    <div className="group">
                        <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg transition-transform transform group-hover:scale-150"></div>
                        <div className="hidden group-hover:block absolute z-10 p-2 bg-white border border-gray-300 rounded shadow-lg text-slate-500">
                            {label}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Hotspots;
