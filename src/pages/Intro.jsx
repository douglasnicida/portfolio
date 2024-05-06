import {ReactComponent as Github} from "../assets/github.svg"
import {ReactComponent as Linkedin} from "../assets/linkedin.svg"
import {ReactComponent as Mouse} from "../assets/mouse.svg"

const Intro = () => {
    return ( 
        <div className="flex flex-col relative h-[calc(100vh)] p-responsiveLayout md:p-layout justify-center items-center text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" id="intro">
            
            {/* MAIN CONTENT */}
            <div className="flex flex-col relative xl:-mt-12">
                <h2 className="text-myRed text-md lg:text-xl uppercase tracking-widest">Douglas Nicida</h2>
                
                <div className="flex flex-col relative mt-5">
                    {/* UPPER */}
                    <div className="flex h-auto">
                        <h1 className="uppercase text-6xl lg:text-8xl font-bold">Dev Web</h1>
                        <div className="rotate-[90deg] -mt-2 lg:mt-1 ml-[44px] lg:ml-14">
                            <div className="bg-introDetails h-[7px] lg:h-[7px] w-[60px] lg:w-[80px]"></div>
                            <div className="bg-introDetails h-[120px] lg:h-[140px] w-[7px] lg:w-[7px]"></div>
                        </div>
                    </div>
                    
                    {/* BOTTOM */}
                    <div className="flex h-auto ml-12 lg:ml-20 -mt-7 lg:-mt-5">
                        <div className="rotate-[270deg] -mt-16 lg:-mt-20">
                            <div className="bg-introDetails h-[7px] lg:h-[7px] w-[60px] lg:w-[80px]"></div>
                            <div className="bg-introDetails h-[120px] lg:h-[140px] w-[7px] lg:w-[7px]"></div>
                        </div>
                        <h1 className="uppercase text-6xl lg:text-8xl font-bold ml-10">Fullstack</h1>
                    </div>
                </div>
            </div>

            {/* BOTTOM CONTENT */}
                {/* SOCIAL MEDIA */}
                <div className="absolute right-[115px] bottom-14">
                    <div className="flex flex-col items-center gap-y-7 relative">
                        <div className="w-[3px] h-[200px] dark:bg-headerItems bg-black/40" />
                        <a href="https://github.com/douglasnicida" target="_blank" rel="noopener noreferrer">
                            <Github className="cursor-pointer dark:fill-backgroundLight fill-backgroundDark dark:hover:fill-github hover:fill-github transition-all duration-300 ease-in-out" />
                        </a>

                        <a href="https://www.linkedin.com/in/douglasnicida/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="cursor-pointer dark:fill-backgroundLight fill-backgroundDark dark:hover:fill-sky hover:fill-sky transition-all duration-300 ease-in-out" />
                        </a>
                    </div>
                </div>

                {/* SCROLL ICON */}
                <Mouse className="absolute animate-bounce bottom-14 dark:invert-0 invert"/>

        </div>
     );
}
 
export default Intro;