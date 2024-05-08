const Container = ({isAbout, children}) => {
    return ( 
        <div className={`flex p-[2px] w-[235px] sm:min-w-[500px] h-fit md:min-h-[281px] ${isAbout === true && "xl:w-[860px] xl:h-[463px]"}
        bg-gradient-to-b from-[#232323] from-[35%] to-[#6F6F6F] relative mt-28 justify-center`}>
            
            <div className={`flex px-[10px] py-[20px] sm:p-[38px] dark:bg-containerDark bg-containerLight w-full h-fit md:min-w-[323px] md:min-h-[277px] ${isAbout === true && "w-[856px] h-[459px]"} justify-center items-center`}>
                {/* ABOUT CONTAINER */}
                {children}
            </div>


            {/* DETAILS */}
            <div className="absolute -top-[23px] -left-[28px] md:-top-[43px] md:-left-[48px]">
                <div className="absolute w-[3px] h-[455px] bg-gradient-to-t from-[#131313] from-[10%] to-[#868686]"></div>
                <div className="absolute h-[3px] w-[90px] bg-[#868686]"></div>
                <div className="absolute h-[3px] w-[90px] bg-[#868686] left-[100px]"></div>
            </div>

            <div className="absolute -bottom-[23px] -right-[28px] md:-bottom-[43px] md:-right-[48px]">
                <div className="absolute bottom-0 w-[3px] h-[455px] bg-gradient-to-b from-[#131313] from-[10%] to-[#868686]"></div>
                <div className="absolute bottom-0 h-[3px] w-[90px] bg-[#868686] right-[0px]"></div>
                <div className="absolute bottom-0 h-[3px] w-[90px] bg-[#868686] right-[100px]"></div>
            </div>

        </div>
     );
}
 
export default Container;
