import { useScramble } from "use-scramble";
import Container from "../components/Container";
import Button from "../components/Button";

import cv from '../assets/Currículo - Douglas Nicida.pdf';
const About = () => {

    const JapaneseRandomReveal = ({text, className, replayActive}) => {
        const { ref, replay } = useScramble({ 
            text: text,
            range: [12448, 12543.0],
            speed: 0.5,
            tick: 2,
            seed: 5
        });

        let res;

        (replayActive) ? res = <p ref={ref} onMouseOver={replay} className={className} /> : res = <p ref={ref} className={className}/>
      
        return res
    };

    function downloadFile(){
        const href = cv;

        const a = document.createElement("a");
        a.href = href;
        a.download = "DouglasNicidaCV.pdf";

        document.body.appendChild(a);
        a.click();
    }

    const content = <div className="flex flex-col xl:flex-row w-fit h-full gap-y-7 lg:gap-x-10 md:gap-y-0 md:items-center lg:items-start">
            {/* PICTURE */}
            <div className="hidden drop-shadow-image sm:flex w-[150px] md:w-[217px] xl:w-[317px] h-[145px] md:h-[215px] xl:h-[380px] bg-meAI hover:bg-me rounded-xl bg-cover bg-center md:place-self-center transition-all duration-200 ease-in-out"/>

            {/* RIGHT SIDE */}
            <div className="flex flex-col w-max mt-4 xl:mt-0">
                {/* TITLE */}
                <JapaneseRandomReveal className="px-[19px] py-[2px] w-fit h-auto uppercase drop-shadow-subtitle dark:bg-[#0F0F0F] bg-white text-myRed text-[16px] md:text-[20px] rounded-full"
                replayActive={true} text={"Sobre mim"} />
                    

                {/* TEXT */}
                <p className="text-justify w-fit max-w-[200px] sm:max-w-[450px] mt-4 md:mt-5 text-[14px] md:text-[16px]">
                    Atualmente quero ingressar no mercado de trabalho na área de Desenvolvimento Web ou Mobile. <br/>
                    Estou cursando Ciências da Computação na UNESP, atuando como desenvolvedor voluntário em dois projetos 
                    de bolsa de extensão da própria universidade, sendo um deles Web e outro Mobile, utilizo as tecnologias <b className="underline">ReactJS, TailWindCSS</b> para o Web 
                    e para o Mobile utilizo <b className="underline">React Native</b>, Android SDK além de JavaScript, HTML, CSS e Firebase para ambos.
                </p>
            </div>
                </div>

    return ( 
        <div className="flex flex-col relative min-h-[100vh] h-auto w-full md:w-full sm:p-responsiveLayout md:p-layout justify-center items-center text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10">
            {/* CONTENT */}
            <div className="mt-5 md:mt-20" id="about">
                <Container isAbout={true} children={content}/>
            </div>

            {/* DOWNLOAD CV BUTTON */}
            <Button classNameIn="bg-myRed hover:bg-myRedHover sm:hover:border-y-[7px] lg:hover:border-y-[9px] " 
                    classNameOut={"mt-12 sm:mt-8"} text={"Download CV"} onClick={downloadFile}/>

            {/* SECTION DECORATION */}
            <div className="hidden sm:flex absolute left-0 bottom-20 md:bottom-10">
                <div className="flex flex-col gap-y-3">
                    <div className="w-10 h-[2px] dark:bg-introDetails bg-backgroundDark" />
                    <div className="w-20 h-[2px] dark:bg-introDetails bg-backgroundDark" />
                    <div className="w-32 h-[2px] dark:bg-introDetails bg-backgroundDark" />
                </div>
            </div>
        </div>
     );
}
 
export default About;