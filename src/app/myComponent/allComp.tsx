
import Certificate from "./Certificate";
import Contact from "./Contact";
import Hero from "./hero";
import MyProjects from "./MyProjects";
import MySkills from "./MySkills";
import FloatingNavDemo from "./NavBar";
import NavBar from "./UpperSocial";

export default function AllComp() {
    return (
        <div className="flex flex-col justify-center items-center h-full
            bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400">
            <div 
                id='mainsection' 
                className="w-full h-full lg:w-4/5 lg:h-auto rounded-lg 
                    bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-800" 
                style={{ 
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" 
                }}
            >
                <div className="mt-2 lg:mt-20 lg:mb-40 flex flex-row lg:flex-col">
                    <NavBar />
                    <Hero/>
                </div>
            <FloatingNavDemo />
            < MySkills />
            <MyProjects/>
            
            <Certificate/>
            <Contact/>

        </div>
        </div>
    )
}