const Container = ({isAbout, children, className}) => {
    return ( 
        <div className={`flex p-[2px] ${className}
        ${isAbout === true ? "w-[265px] sm:min-w-[500px] h-fit md:min-h-[281px] xl:w-[860px] xl:h-[463px] mt-28" : "w-[270px] sm:w-[323px] mt-20"}
        bg-gradient-to-b from-[#232323] from-[35%] to-[#6F6F6F] relative justify-center`}>
            
            <div className={`flex  dark:bg-containerDark bg-containerLight w-full h-full 
            ${isAbout === true ? "md:min-w-[323px] xl:w-[856px] justify-center items-center sm:p-[38px] px-[10px] py-[20px]" : "xl:w-[324px] xl:h-[278px] p-[40px]"} `}>
                {/* ABOUT CONTAINER */}
                {children}
            </div>


            {/* DETAILS */}
            <div className={`absolute ${isAbout ? "-top-[23px] -left-[28px] md:-top-[43px] md:-left-[48px]" : "-top-[23px] -left-[28px] md:-top-[16px] md:-left-[16px]"}`}>
                <div className={`absolute top-0 w-[3px] ${isAbout ? "h-[455px]" : "h-[269px]"} bg-gradient-to-t from-[#131313] from-[10%] to-[#868686]`}></div>
                <div className={`absolute top-0 h-[3px] ${isAbout ? "w-[90px]" : "w-[40px]"} bg-[#868686] left-[0px]`}></div>
                <div className={`absolute top-0 h-[3px] ${isAbout ? "w-[90px] left-[100px]" : "w-[40px] left-[50px]"} bg-[#868686]`}></div>
            </div>
            
            <div className={`absolute ${isAbout ? "-bottom-[23px] -right-[28px] md:-bottom-[43px] md:-right-[48px]" : "-bottom-[23px] -right-[28px] md:-bottom-[16px] md:-right-[16px]"}`}>
                <div className={`absolute bottom-0 w-[3px] ${isAbout ? "h-[455px]" : "h-[269px]"} bg-gradient-to-b from-[#131313] from-[10%] to-[#868686]`}></div>
                <div className={`absolute bottom-0 h-[3px] ${isAbout ? "w-[90px]" : "w-[40px]"} bg-[#868686] right-[0px]`}></div>
                <div className={`absolute bottom-0 h-[3px] ${isAbout ? "w-[90px] right-[100px]" : "w-[40px] right-[50px]"} bg-[#868686]`}></div>
            </div>

        </div>
     );
}
 
export default Container;
