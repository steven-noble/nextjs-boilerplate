import { useState, useEffect } from 'react';

export function useUserMedia(requestedMedia: MediaStreamConstraints) {
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        async function enableStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
                setMediaStream(stream);
            } catch (err) {
                console.error('Error accessing media devices.', err);
            }
        }

        if (!mediaStream) {
            enableStream();
        } else {
            return function cleanup() {
                mediaStream.getTracks().forEach((track) => {
                    track.stop();
                });
            };
        }
    }, [mediaStream, requestedMedia]);

    return mediaStream;
}
