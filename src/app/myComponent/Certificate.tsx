'use client';
import React, { useState } from 'react';
import TimeLine from './TimeLine';
import { MapPin } from 'lucide-react';
import CertificateImage from './CertificateImage';


import ML from '../assets/ML.jpg';
import CCNA from '../assets/CNNA.png';
import type { StaticImageData } from 'next/image';



type CertificateType =  'ML'  |'CCNA'| null;

const Certificate: React.FC = () => {
    const [type, setType] = useState<CertificateType>(null);

    const handleCloseImage = () => setType(null);

    const certificates = [
    
    
    {
        content: (
        <Card
            title="Machine Learning for Data Analysis"
            date="12/9/2024"
            org="National Telecommunication Institute (NTI)"
            location="Minia, Egypt"
            onShow={() => setType('ML')}
        />
        ),
    },
    {
        content: (
        <Card
            title="Cisco Certified Network Associate"
            date="31/7/2023"
            org="National Telecommunication Institute (NTI)"
            location="Minia, Egypt"
            onShow={() => setType('CCNA')}
        />
        ),
    },
    ];

    const certificateImages: Record<Exclude<CertificateType, null>, StaticImageData> = {
        ML: ML,
        CCNA: CCNA,
        };

    return (
    <div className="min-h-screen py-12 px-4 mt-9" id="Certifications">
        <div className="flex gap-1 items-center justify-center mb-4">
        <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700" />
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-3xl">
            Certifications
        </span>
        <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700" />
        </div>

        <TimeLine items={certificates} />

        {type && (
        <CertificateImage onClose={handleCloseImage} ImageSrc={certificateImages[type]} />
        )}
        </div>
    );
};

type CardProps = {
    title: string;
    date: string;
    org: string;
    location: string;
    onShow: () => void;
};

const Card: React.FC<CardProps> = ({ title, date, org, location, onShow }) => (
    <div className="p-4 bg-white rounded-lg shadow-md">
    <h3 className="text-lg text-gray-800 font-bold">{title}</h3>
    <p className="text-sm text-gray-500 mt-1">
        {date} || {org}
    </p>
    <div className="flex justify-between mt-2">
        <div className="flex gap-1 items-center">
        <MapPin color="blue" size={15} />
        <p className="text-gray-600">{location}</p>
        </div>
        <button onClick={onShow} className="bg-blue-900 text-white font-mono px-3 py-1 rounded-lg">
        Show
        </button>
        </div>
    </div>
);

export default Certificate;
