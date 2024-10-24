import React, { useEffect } from 'react';

const onFocus = () => {
    console.log('Tab is in focus');
};

const onBlur = () => {
    console.log('Tab is blurred');
};

const WindowFocusHandler: React.FC = () => {
    useEffect(() => {
        window.addEventListener('focus', onFocus);
        window.addEventListener('blur', onBlur);

        onFocus();

        return () => {
            window.removeEventListener('focus', onFocus);
            window.removeEventListener('blur', onBlur);
        };
    }, []);

    return null;
};

export default WindowFocusHandler;
