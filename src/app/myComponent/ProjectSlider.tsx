"use client";
import React from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import Prayer from '../assets/prayer.png';
import e_commerce from '../assets/e-commerce.png';
import Social from '../assets/social.png';
import DataSlider from '../DataSlider';
import { StaticImageData } from 'next/image';

// Type for the item used in the DummyContent component
interface DataItem {
    id: number;
    name: string;
    Videosrc?: string;  // Mark Videosrc as optional since it can be undefined
    VideoID: string;
    src?: string; // Optional src for "C++ Organize Program"
    }

// Type for each card data
interface CardData {
    category: string;
    title: string;
    src: string|StaticImageData; // Use StaticImageData for images imported from assets
    content: React.ReactNode;
}

export default function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.title} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 my-20 ">
            <h2 className="max-w-5xl mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
                Take a look at the projects
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

// Type for the props of the DummyContent component
interface DummyContentProps {
    item: DataItem;
}

const DummyContent: React.FC<DummyContentProps> = ({ item }) => {
    return (
        <div className="p-8 md:p-14 rounded-3xl mb-4 relative overflow-hidden h-[300px] md:h-[400px]">
            {item.name !== "C++ Organize Program" ? (
                <iframe
                    src={`${item.Videosrc}${item.VideoID}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full z-0"
                />
            ) : (
                <a
                    href="https://github.com/Ibraq9/File-Organization"
                    className="bg-black p-3 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GO to Github Source Code ? ➡️
                </a>
            )}
        </div>
    );
};

// Data array with proper typing for each card
const data: CardData[] = [
    {
        category: "Website",
        title: "E-commerce app",
        src: e_commerce,
        content: <DummyContent item={DataSlider[0]} />,
    },
    {
        category: "Website",
        title: "Prayer times app",
        src: Prayer,
        content: <DummyContent item={DataSlider[1]} />,
    },
    {
        category: "Website",
        title: "Social Media app",
        src: Social,
        content: <DummyContent item={DataSlider[2]} />,
    },
    
];
