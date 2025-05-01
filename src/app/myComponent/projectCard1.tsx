import React, { JSX } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectImage: string | StaticImageData; // Accept both string (URL) and StaticImageData
    project_href: string;
    project_tech: JSX.Element[]// Array of React icons
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, projectDescription, projectImage, project_href, project_tech }) => {
    return (
    <div className="project-card">
      {/* Check if projectImage is string or StaticImageData and render accordingly */}
        {typeof projectImage === 'string' ? (
        <Image 
            src={projectImage}
            alt={projectName} />
        ) : (
        <Image src={projectImage} alt={projectName} width={500} height={500} /> // Use next/image for StaticImageData
        )}
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <div>{project_tech}</div>
        <a href={project_href} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    );
};

export default ProjectCard;
