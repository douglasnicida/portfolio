const Button = ({classNameIn, classNameOut , text, icon}) => {
    return ( 
        <button className={`flex p-[1px] min-w-[200px] min-h-[43px] md:min-w-[235px] md:h-[69px] relative ${classNameOut}
        dark:bg-[linear-gradient(0deg,rgba(111,111,111,1)0%,rgba(35,35,35,1)28%,rgba(35,35,35,1)69%,rgba(111,111,111,1)100%)]
        bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(243,243,243,1)28%,rgba(243,243,243,1)69%,rgba(0,0,0,1)100%)] 
        transition-all duration-500 ease-in-out`}>
            
            <div className={`flex ${classNameIn} w-full h-full justify-center items-center border-[4px] border-solid 
            dark:border-containerDark border-containerLight transition-all duration-200 ease-linear`}>
                <span className="uppercase font-semibold text-[22px] text-white">{text}</span>
            </div>

        </button>
     );
}
 
export default Button;
