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
                    <div className="flex h-auto mb-7 md:mb-9 lg:mb-16">
                        <h1 className="uppercase text-5xl sm:text-6xl lg:text-8xl font-bold">Dev Web</h1>
                        <div className="rotate-[90deg] ml-[44px] lg:ml-11 md:-mt-3 lg:mt-0">
                            <div className="bg-introDetails h-[7px] w-[40px] md:w-[60px] lg:w-[80px]"></div>
                            <div className="bg-introDetails h-[80px] md:h-[120px] lg:h-[140px] w-[7px] lg:w-[7px]"></div>
                        </div>
                    </div>
                    
                    {/* BOTTOM */}
                    <div className="flex h-auto ml-12 lg:ml-16 -mt-12 md:-mt-16 lg:-mt-20">
                        <div className="rotate-[270deg] -mt-12 md:-mt-16">
                            <div className="bg-introDetails h-[7px] lg:h-[7px] w-[40px] md:w-[60px] lg:w-[80px]"></div>
                            <div className="bg-introDetails h-[80px] md:h-[120px] lg:h-[140px] w-[7px] lg:w-[7px]"></div>
                        </div>
                        <h1 className="uppercase text-5xl sm:text-6xl lg:text-8xl font-bold ml-10">Fullstack</h1>
                    </div>
                </div>
            </div>

            {/* BOTTOM CONTENT */}
                {/* SOCIAL MEDIA */}
                <div className="sm:absolute mt-14 sm:mt-0 right-[0px] bottom-14 p-responsiveLayout xl:p-layout">
                    <div className="flex sm:flex-col items-center gap-x-4 sm:gap-y-7 sm:gap-x-0 relative">
                        <div className="w-[100px] h-[3px] sm:w-[3px] sm:h-[150px] lg:h-[200px] dark:bg-headerItems bg-black/40 transition-all duration-200 ease-in-out" />

                        <a href="https://github.com/douglasnicida" target="_blank" rel="noopener noreferrer">
                            <Github className="size-7 lg:size-8 cursor-pointer dark:fill-backgroundLight fill-backgroundDark dark:hover:fill-github hover:fill-github transition-all duration-300 ease-in-out" />
                        </a>

                        <a href="https://www.linkedin.com/in/douglasnicida/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="size-7 lg:size-8 cursor-pointer dark:fill-backgroundLight fill-backgroundDark dark:hover:fill-sky hover:fill-sky transition-all duration-300 ease-in-out" />
                        </a>
                    </div>
                </div>

                {/* SCROLL ICON */}
                <Mouse className="absolute animate-bounce bottom-14 dark:stroke-backgroundLight stroke-backgroundDark"/>

        </div>
     );
}
 
export default Intro;