import React from 'react';
import PropTypes from 'prop-types';

interface Props {
    as: string;
    children: React.ReactNode;
    className?: string;
    colour?: string;
    highlightAll?: boolean;
    highlighted?: string;
    size?: string;
    truncate?: boolean;
    underline?: boolean;
}

export default function Heading({
    as,
    children,
    className,
    colour,
    highlightAll,
    highlighted,
    size,
    truncate,
    underline,
    ...props
}: Props) {
    const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const safeHeading = as ? as.toLowerCase() : '';
    const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

    // Define the size classes based on Tailwind utility classes
    const sizeClasses = {
        h1: 'text-3xl md:text-4xl lg:text-5xl', // Adjust as needed
        h2: 'text-2xl md:text-3xl lg:text-4xl',
        h3: 'text-xl md:text-2xl lg:text-3xl',
        h4: 'text-lg md:text-xl',
        h5: 'text-base',
        h6: 'text-sm',
    };

    const headingClass = `
        ${size ? sizeClasses[size] : sizeClasses[safeHeading]}
        ${colour ? `text-${colour}` : 'text-white'} // Tailwind text color
        ${className || ''}
        ${underline ? 'underline' : ''}
        ${truncate ? 'truncate' : ''}
    `;

    const headingText = highlighted
        ? children.toString().replace(
              new RegExp(`\\b${highlighted}\\b`, highlightAll ? 'g' : ''),
              `<span class='bg-yellow-200 font-bold'>${highlighted}</span>` // Adjust highlight styling
          )
        : children;

    return (
        <Title
            className={headingClass}
            dangerouslySetInnerHTML={{
                __html: headingText,
            }}
            {...props}
        />
    );
}

Heading.propTypes = {
    as: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    colour: PropTypes.string,
    highlightAll: PropTypes.bool,
    highlighted: PropTypes.string,
    size: PropTypes.string,
    truncate: PropTypes.bool,
    underline: PropTypes.bool,
};

Heading.defaultProps = {
    colour: 'white',
    highlightAll: false,
    underline: false,
};
