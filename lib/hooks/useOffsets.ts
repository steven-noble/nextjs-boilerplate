import { useState, useEffect } from 'react';

type Offsets = {
    x: number;
    y: number;
};

export function useOffsets(vWidth: number, vHeight: number, cWidth: number, cHeight: number): Offsets {
    const [offsets, setOffsets] = useState<Offsets>({ x: 0, y: 0 });

    useEffect(() => {
        if (vWidth && vHeight && cWidth && cHeight) {
            const x = vWidth > cWidth ? Math.round((vWidth - cWidth) / 2) : 0;
            const y = vHeight > cHeight ? Math.round((vHeight - cHeight) / 2) : 0;

            setOffsets({ x, y });
        }
    }, [vWidth, vHeight, cWidth, cHeight]);

    return offsets;
}
