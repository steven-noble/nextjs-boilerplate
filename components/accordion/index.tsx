import { useState } from 'react';

interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white shadow-md rounded-md">
            {items.map((item, index) => (
                <div key={item.id}>
                    <div
                        onClick={() => toggleItem(index)}
                        className="flex justify-between items-center p-4 cursor-pointer border-b"
                    >
                        <h2 className="font-semibold text-lg text-gray-900">{item.title}</h2>
                        <span className="text-gray-500">
                            {openIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {openIndex === index && (
                        <div className="p-4 bg-gray-100 text-gray-900">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
