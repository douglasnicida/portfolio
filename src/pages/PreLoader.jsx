import { useState } from "react";

const PreLoader = () => {
    const [isHidden, setIsHidden] = useState(false);

    setTimeout(() => {setIsHidden(true)},2800)

    return ( 
        <div className={`${isHidden ? 'invisible scale-150 opacity-0' : 'visible scale-100 opacity-100'} fixed w-screen h-screen bg-backgroundDark z-50 flex justify-center items-center transition-all duration-300 ease-linear`}>
            <div className="size-[140px] md:size-[200px] relative flex justify-center items-center animate-pulse">
                <svg viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg" id="preloader" className="z-20">
                    <g filter="url(#filter0_d_254_166)">
                    <path d="M28.336 28.856C28.336 40.952 23.5573 47 14 47H2.464V12.224H14.224C19.3387 12.224 22.96 13.6613 25.088 16.536C27.2533 19.3733 28.336 23.48 28.336 28.856ZM13.832 38.936C15.8107 38.936 17.08 38.2453 17.64 36.864C18.2373 35.4453 18.536 33.0933 18.536 29.808C18.536 26.4853 18.2187 24.1333 17.584 22.752C16.9867 21.3707 15.68 20.68 13.664 20.68H11.984V38.936H13.832ZM48.3486 47H39.1646L31.9406 30.816H31.4926V47H22.9806V12.224H32.4446L39.3326 28.912H39.7806V12.224H48.3486V47Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_254_166" x="2.46399" y="12.224" width="48.8846" height="37.776" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="3" dy="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.192157 0 0 0 0 0.25098 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_254_166"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_254_166" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <div className="absolute size-[250px] md:size-[350px] bg-white rounded-full p-[5px] z-10 animate-spin flex justify-center items-center">

                    <div className="w-[300px] md:w-[400px] h-[200px] md:h-[300px] rounded-full bg-backgroundDark absolute"></div>
                    <div className="size-[242px] md:size-[343px] rounded-full bg-backgroundDark absolute"></div>

                </div>
            </div>
        </div>
     );
}
 
export default PreLoader;