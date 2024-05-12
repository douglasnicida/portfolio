import { useScramble } from "use-scramble";

import Github from "../assets/github.svg?react"
import Linkedin from "../assets/linkedin.svg?react"
import Mouse from "../assets/mouse.svg?react"
import { useState } from "react";
import { MotionDivItemsLeft } from "../utils/motion";

const Intro = () => {
    const [alternate, setAlternate] = useState(false);

    // RANDOM REVEAL JAPANESE CHARACTERS ANIMATION
    const JapaneseRandomReveal = ({text, className, replayActive}) => {
        const { ref, replay } = useScramble({ 
            text: text,
            range: [12448, 12543.0],
            speed: 0.5,
            tick: 2,
            seed: 5,
            onAnimationEnd: () => {setTimeout(()=>{setAlternate(!alternate)}, 4000)}
        });

        let res;

        (replayActive) ? res = <p ref={ref} onMouseOver={replay} className={className} /> : res = <p ref={ref} className={className}/>
      
        return res
    };

    return ( 
        <div className="flex flex-col relative h-[100vh] sm:p-responsiveLayout md:p-layout justify-center items-center text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" id="intro">
            
            {/* MAIN CONTENT */}
            <div className="flex flex-col relative -mt-12">
                
                <JapaneseRandomReveal text={"Douglas Nicida"} className={"text-myRed text-md lg:text-2xl uppercase tracking-widest w-fit"} replayActive={true}/>
                
                <div className="flex flex-col relative mt-5">
                    {/* UPPER */}
                    <div className="flex h-auto mb-10 md:mb-9 lg:mb-16">
                        <JapaneseRandomReveal text={"Dev Web"} className={"uppercase text-4xl sm:text-6xl lg:text-8xl font-bold"} replayActive={false}/>
                        
                        <div className="rotate-[90deg] ml-[16px] md:ml-[44px] lg:ml-11 mt-2 md:-mt-3 lg:mt-0">
                            <div className="bg-introDetails h-[7px] w-[40px] md:w-[60px] lg:w-[80px]"></div>
                            <div className="bg-introDetails h-[40px] md:h-[120px] lg:h-[140px] w-[7px] lg:w-[7px]"></div>
                        </div>
                    </div>
                    
                    {/* BOTTOM */}
                    <div className="flex h-auto ml-8 sm:ml-10 md:ml-12 lg:ml-16 -mt-8 md:-mt-16 lg:-mt-20">
                        <div className="rotate-[270deg] -mt-[38px] md:-mt-16">
                            <div className="bg-introDetails h-[7px] lg:h-[7px] w-[40px] md:w-[60px] lg:w-[80px]"></div>
                            <div className="bg-introDetails h-[40px] md:h-[120px] lg:h-[140px] w-[7px] lg:w-[7px]"></div>
                        </div>

                        {(alternate === false) ? 
                            <JapaneseRandomReveal text={"FULLSTACK"} className={"uppercase text-4xl sm:text-6xl lg:text-8xl font-bold md:ml-10 w-fit"} replayActive={false}/>
                            :
                            <JapaneseRandomReveal text={"DESIGNER"} className={"uppercase text-4xl sm:text-6xl lg:text-8xl font-bold md:ml-10 w-fit"} replayActive={false}/>
                        }
                    </div>
                </div>
            </div>

            {/* BOTTOM CONTENT */}
                {/* SOCIAL MEDIA */}
                <div className="sm:absolute mt-14 sm:mt-0 right-[0px] bottom-14 p-responsiveLayout xl:p-layout">
                    <div className="flex sm:flex-col items-center gap-x-4 sm:gap-y-7 sm:gap-x-0 relative">
                        <MotionDivItemsLeft i={2}>
                            <div className="w-[100px] h-[3px] sm:w-[3px] sm:h-[150px] lg:h-[200px] dark:bg-headerItems bg-black/40 transition-all duration-200 ease-in-out" />
                        </MotionDivItemsLeft>
                        
                        <MotionDivItemsLeft i={4}>
                            <a href="https://github.com/douglasnicida" target="_blank" rel="noopener noreferrer">
                                <Github className="size-7 lg:size-8 xl:size-9 cursor-pointer dark:fill-backgroundLight fill-backgroundDark dark:hover:fill-github hover:fill-github transition-all duration-300 ease-in-out" />
                            </a>
                        </MotionDivItemsLeft>
                        
                        <MotionDivItemsLeft i={6}>
                            <a href="https://www.linkedin.com/in/douglasnicida/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="size-7 lg:size-8 xl:size-9 cursor-pointer dark:fill-backgroundLight fill-backgroundDark dark:hover:fill-sky hover:fill-sky transition-all duration-300 ease-in-out" />
                            </a>
                        </MotionDivItemsLeft>
                    </div>
                </div>

                {/* SCROLL ICON */}
                <Mouse className="absolute animate-bounce bottom-20 md:bottom-14 dark:stroke-backgroundLight stroke-backgroundDark"/>

        </div>
     );
}
 
export default Intro;