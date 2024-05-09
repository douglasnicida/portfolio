import { useEffect, useState } from "react";
import { skills } from "../utils/content";

const SkillItem = ({icon, handleHover}) => {
    return (
        <div className="size-[72px] p-[1px] flex bg-gradient-to-b dark:bg-gradient-to-t from-[#000000] from-[35%] dark:to-[#5a5a5a] to-[#9e9e9e] hover:scale-110 transition-all duration-300 ease-in-out" 
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
    const [skillDataSet , setSkillDataSet] = useState([]);


    useEffect(() => {
        setSkillDataSet(skills)

    }, [])

    const handleFilter = () => {
        setSkillDataSet(skillDataSet.filter(skill => skill.category === "frontend"))
    }

    return ( 
        <div className="flex flex-col relative h-[100vh] sm:p-responsiveLayout md:p-layout justify-center items-center text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" id="skills">
            <h2 className="text-myRed text-[32px] mt-10">Skills</h2>

            <div className="flex w-full justify-center items-center gap-x-24 mt-8">

                {/* SKILL INFO */}
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

                {/* SKILL GRID */}
                <div className="flex">
                    {/* SKILLS */}
                    <div className="grid grid-rows-4 grid-cols-4 gap-6">
                        {skillDataSet.map(skill => {
                            return (
                                <SkillItem icon={skill.icon} key={skill.key} handleHover={() => {setSkillName(skill.name); setSkillDescription(skill.description);}}/>
                            )
                        })}
                    </div>

                    {/* FILTER */}
                    <div className="">
                        <button onClick={handleFilter}>teste filtro</button>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Skills;