import { useState } from "react";
import { skills } from "../utils/content";

import Filter from "../assets/Filter.svg?react"
import { MotionDivItemsDown, MotionDivToDown, MotionDivToRight } from "../utils/motion";

const SkillItem = ({icon, handleHover}) => {
    return (
        <div className="size-[57px] md:size-[72px] p-[1px] flex bg-gradient-to-b dark:bg-gradient-to-t from-[#000000] from-[35%] dark:to-[#5a5a5a] to-[#9e9e9e] hover:scale-110 transition-all duration-300 ease-in-out" 
        onMouseOver={handleHover}>
            <div className="size-full dark:bg-containerDark bg-white flex justify-center items-center">
                {icon}
            </div>
        </div>
    )
}

const Skills = () => {
    const name = "ReactJS"
    const desc = "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."

    const [skillName, setSkillName] = useState(name);
    const [skillDescription, setSkillDescription] = useState(desc);
    const [skillDataSet , setSkillDataSet] = useState(skills);

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleFilter = (text) => {
        setSkillDataSet(skills.filter(skill => skill.category === text))
    }
    

    const MenuItem = ({text, className}) => {
        return(
            <li className={`mb-2 sm:mb-0 font-Syne flex flex-col group relative w-[75px] h-[22px] text-center ${className}`} onClick={() => {handleFilter(text)}}>
                <button className="cursor-pointer font-Syne hover:font-bold text-[17px] capitalize">
                    {text}
                </button>
                <span className="absolute -bottom-0 left-0 w-0 h-[3px] rounded-full bg-myRed transition-all duration-500 group-hover:w-full"></span>
            </li>
        );
    }

    return ( 
    <div className="relative">
        <div className="flex flex-col h-[115vh] lg:h-[95vh] sm:p-responsiveLayout md:p-layout justify-center items-center relative text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" id="skills">
            <MotionDivToDown>
                <h2 className="text-myRed text-[32px] mt-10">Skills</h2>
            </MotionDivToDown>

            <div className="flex w-full justify-center items-center gap-x-24 mt-8">

                {/* SKILL INFO */}
                <MotionDivToRight className="hidden lg:flex">
                    <div className="relative size-[323px] gap-y-2 hidden lg:flex flex-col p-[8px]">

                        <h2 className="font-bold text-[20px] dark:text-backgroundLight text-black">{skillName}</h2>
                        <p className="dark:text-secondaryTextDark text-containerDark text-justify">{skillDescription}</p>

                        {/* DETAILS */}
                        <div className={`absolute ${"-top-[23px] -left-[28px] md:-top-[16px] md:-left-[16px]"}`}>
                            <div className={`absolute top-0 w-[3px] ${"h-[269px]"} bg-gradient-to-t from-[#131313] from-[10%] to-[#868686]`}></div>
                            <div className={`absolute top-0 h-[3px] ${"w-[40px]"} bg-[#868686] left-[0px]`}></div>
                            <div className={`absolute top-0 h-[3px] ${"w-[40px] left-[50px]"} bg-[#868686]`}></div>
                        </div>

                        <div className={`absolute ${"-bottom-[23px] -right-[28px] md:-bottom-[16px] md:-right-[16px]"}`}>
                            <div className={`absolute bottom-0 w-[3px] ${"h-[269px]"} bg-gradient-to-b from-[#131313] from-[10%] to-[#868686]`}></div>
                            <div className={`absolute bottom-0 h-[3px] ${"w-[40px]"} bg-[#868686] right-[0px]`}></div>
                            <div className={`absolute bottom-0 h-[3px] ${"w-[40px] right-[50px]"} bg-[#868686]`}></div>
                        </div>
                    </div>
                </MotionDivToRight>

                {/* SKILL GRID */}
                <div className="flex flex-col gap-y-5">
                    {/* SKILLS */}
                    <div className="grid grid-rows-4 grid-cols-4 gap-6">
                        {skillDataSet.map(skill => {
                            return (
                                <MotionDivItemsDown i={skill.key} transition={{ duration: 0.2, delay: skill.key * 0.1}} key={skill.key}>
                                    <SkillItem icon={skill.icon} key={skill.key} handleHover={() => {setSkillName(skill.name); setSkillDescription(skill.description);}}/>
                                </MotionDivItemsDown>
                            )
                        })}
                    </div>

                    {/* FILTER */}
                    <div className="flex justify-center w-full items-center gap-x-5 h-[50px]">
                        <div className="w-full h-[1px] bg-introDetails" />
                        <button className={`p-[9px] rounded-full border-[2px] dark:border-containerLight border-containerDark relative flex justify-center items-center ${toggleMenu && "focus:p-[14px]"} hover:p-[14px] transition-all duration-300 ease-in-out`} 
                        onClick={() => { setSkillDataSet(skills); setToggleMenu(!toggleMenu);}}>
                            <Filter className="dark:stroke-containerLight stroke-containerDark" />

                            {/* CIRCLE */}
                            <div className="absolute -top-2 rotate-45 -right-2 dark:bg-backgroundDark bg-backgroundLight size-5" />
                            <div className="absolute -bottom-2 rotate-45 -left-2 dark:bg-backgroundDark bg-backgroundLight size-5" />
                        </button>
                        <div className="w-full h-[1px] bg-introDetails" />
                    </div>
                </div>
            </div>
            

        </div>

        {/* FILTER MENU */}
        <div className="w-full h-fit flex justify-center items-center lg:justify-start">
            <div className={`absolute ${(toggleMenu) ? "scale-100" : "lg:w-0 scale-0"} h-[50px] w-fit lg:w-[300px] lg:h-3/5 lg:left-[50px] bottom-[10%] px-[15px] py-[18px] lg:px-[0] lg:py-[0] lg:top-[25%] z-[60] bg-black transition-all duration-500 ease-in-out rounded-lg`}>
                <ul className="flex lg:flex-col w-full h-full gap-x-3 lg:gap-x-7 text-headerItems font-medium items-center justify-center gap-y-10 lg:pb-32 lg:pt-9 lg:mt-0 mt-1">
                    <MenuItem className={`${(!toggleMenu) ? 'hidden' : 'flex'}`} text="frontend" />
                    <MenuItem className={`${(!toggleMenu) ? 'hidden' : 'flex'}`} text="backend" />
                    <MenuItem className={`${(!toggleMenu) ? 'hidden' : 'flex'}`} text="tools" />
                    <MenuItem className={`${(!toggleMenu) ? 'hidden' : 'flex'}`} text="other" />
                </ul>
            </div>
        </div>
    </div>
     );
}
 
export default Skills;