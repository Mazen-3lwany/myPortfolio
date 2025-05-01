
import ProjectCard from './ProjectCard';
import Prayer from '../assets/prayer.jpg';
import ToDo from '../assets/ToDo.jpg';
import Social from '../assets/social.png';


import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';



const MyProjects: React.FC = () => {
    return (
    <div id='Projects' className="mt-44 flex flex-col gap-2 relative ">
      {/* Header */}
        <div className="flex gap-1 items-center justify-center mb-10">
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-3xl">
            A small selection recent projects
        </span>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>

      {/* Backbone */}
        <div className="absolute left-1/2 top-12 bottom-0 w-1 bg-gray-700 -translate-x-1/2"></div>

      {/* First Row */}
        <div className="h-80 flex justify-around items-center relative">
        <div className="absolute left-1/2 right-[42%] top-1/2 h-1 bg-gray-700"></div>
        <div className="w-1/5"></div>
        <div className="flex justify-end">
            <ProjectCard
            projectName="Social Media App"
            projectDescription="A social networking application such as Facebook, etc."
            projectImage={Social}
            project_href='https://github.com/Mazen-3lwany/Social-Media'
            
            project_tech={[<DiReact key="react" size={30} color='#78D3FA'/>, <SiTailwindcss size={30} color='#67BCF2' key="tailwind"/>]}
            />
        </div>
        </div>

      {/* Second Row */}

        <div className="h-80 flex justify-around items-center relative">
        <div className="absolute right-1/2 left-[42%] top-1/2 h-1 bg-gray-700"></div>
        
        <div className="flex justify-start">
            <ProjectCard
            projectName="Prayer Times"
            projectDescription="Prayer times application"
            projectImage={Prayer}
            project_href=''
            project_tech={[<DiHtml5 key="html" size={30} color='#CC5533'/>, <DiCss3 key="css" color='3673B6' size={30}/>, <DiJavascript key="js" size={30} color='#F3E155'/>]}
            />
        </div>
        <div className="w-1/5"></div>
        </div>

      {/* Fourth Row */}
        <div className="h-80 flex justify-around items-center relative">
        <div className="absolute left-1/2 right-[42%] top-1/2 h-1 bg-gray-700"></div>
        <div className="w-1/5"></div>
        <div className="flex justify-start">
            <ProjectCard
            projectName="ToDo List App"
            projectDescription="Todo list project that allows users to manage daily tasks. ."
            projectImage={ToDo}
            project_href='https://github.com/Mazen-3lwany/ToDo-List'
            project_tech={[<DiHtml5 key="html" size={30} color='#CC5533'/>, <DiCss3 key="css" color='3673B6' size={30}/>, <DiJavascript key="js" size={30} color='#F3E155'/>, <DiBootstrap key="bs" color='#7023EE' size={30}/>]}
        />
        </div>
    
    </div>
    </div>
  );
};

export default MyProjects;
