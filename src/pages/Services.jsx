import Container from "../components/Container";

import { items } from "../utils/content";

const Services = () => {
    let count = 0;

    return ( 
        <div className="flex flex-col relative h-[170vh] lg:h-[140vh] xl:h-[85vh] sm:p-responsiveLayout md:p-layout justify-center items-center text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" id="services">
            {/* SECTION TITLE */}
            <h2 className="text-myRed text-[32px]">Serviços</h2>
            
            {/* SERVICES */}
            <div className="grid md:px-[64px] lg:px-[0px] md:grid-cols-1 lg:md:grid-cols-2 md:gap-y-4 xl:grid-cols-3 xl:grid-rows-1 lg:gap-x-20 lg:w-fit xl:w-fit w-fit">
                {items.map(item => {
                    const content = <div className="flex flex-col gap-y-3">
                        {item.icon}
                        <h3 className="font-bold text-[20px]">{item.title}</h3>
                        <p className="dark:text-secondaryTextDark text-backgroundDark sm:text-justify">{item.text}</p>
                    </div>
                    
                    count++;

                    return <Container key={item.key} children={content} className={`${count%2 === 1 ? "place-self-center sm:place-self-start" : "place-self-center sm:place-self-end"} lg:place-self-center`}/>
                })}
            </div>

            {/* SECTION DECORATION */}
            <div className="hidden sm:flex absolute left-0 bottom-10">
                <div className="flex flex-col gap-y-3">
                    <div className="w-10 h-[2px] dark:bg-introDetails bg-backgroundDark" />
                    <div className="w-20 h-[2px] dark:bg-introDetails bg-backgroundDark" />
                    <div className="w-32 h-[2px] dark:bg-introDetails bg-backgroundDark" />
                </div>
            </div>
        </div>
     );
}
 
export default Services;