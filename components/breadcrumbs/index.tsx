import React from 'react';
import Link from 'next/link'

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2">
            <ol className="inline-flex items-center space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && (
                            <svg
                                className="w-4 h-4 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 01.707 1.707L5.414 10l5.293 5.293A1 1 0 0113 17H4a1 1 0 010-2h8.586l-4.293-4.293A1 1 0 015 10l5.293-5.293A1 1 0 0110 3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                        <Link
                            href={item.href}
                            className="text-gray-700 hover:text-blue-600 transition duration-200"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
