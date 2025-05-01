"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { PinContainer } from "../components/ui/3b-pin";

// Define the types for the props
interface AnimatedPinDemoProps {
    project_tech: React.ReactNode[];  // Array of icons or React nodes
    project_href: string;             // URL of the project
    projectName: string;              // Name of the project
    projectDescription: string;       // Description of the project
    projectImage: string|StaticImageData;             // Image source (URL)
}

const AnimatedPinDemo: React.FC<AnimatedPinDemoProps> = ({ 
    project_tech, 
    project_href, 
    projectName, 
    projectDescription, 
    projectImage 
}) => {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center">
            <PinContainer title="Visit" href={project_href}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {projectName}
                    </h3>

                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">{projectDescription}</span>
                    </div>

                    <div className=" flex">
                        {project_tech.map((icon, index) => (
                            <span key={index} className="flex space-x-2">
                                {icon}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
                        <Image 
                            src={projectImage} 
                            alt="Project image" 
                            className="object-cover w-full h-full" 
                            width={500}  // You can specify width and height or rely on intrinsic size
                            height={500} 
                        />
                    </div>
                </div>
            </PinContainer>
        </div>
    );
};

export default AnimatedPinDemo;
