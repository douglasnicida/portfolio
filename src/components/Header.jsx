import { useEffect, useState } from "react";

import {ReactComponent as ToggleThemeDark} from "../assets/moon.svg"
import {ReactComponent as ToggleThemeLight} from "../assets/sun.svg"
import { Link } from "react-scroll";

//TODO: BURGUER MENU (DEIXAR RESPONSIVO)

const Header = () => {
    const [theme, setTheme] = useState("dark");

    // useEffect(() => {
    //     (window.matchMedia('(prefers-color-scheme: dark)').matches) ? setTheme("dark") : setTheme("light")
    // }, [])

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const HeaderItem = ({name, text, className}) => {
        return(
            <li className={`mb-2 sm:mb-0 font-Syne flex flex-col group relative ${className}`}>
                {/* <span className="absolute -top-0 left-0 w-0 h-[0.5px] rounded-full bg-myRed transition-all duration-500 group-hover:w-full"></span> */}
                <Link to={name} spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer font-Syne">{text}</Link>
                <span className="absolute -bottom-0 left-0 w-0 h-[3px] rounded-full bg-myRed transition-all duration-500 group-hover:w-full"></span>
            </li>
        );
    }

    return ( 
        <div className="flex w-full h-[143px] justify-between items-center px-[100px] dark:text-white dark:bg-backgroundDark bg-backgroundLight text-backgroundDark fixed">
            {/* LOGO */}
            <div className="hover:rotate-[7deg] hover:scale-110 transition-all duration-300 ease-in-out">
                <Link to="intro" className="font-passionOne text-[40px] -tracking-[5px] drop-shadow-logo cursor-pointer" spy={true} smooth={true} offset={-50} duration={500}>
                    DN
                </Link>
            </div>

            {/* OPTIONS */}
            <div className="">
                <ul className="flex w-full h-fit gap-x-7 text-backgroundDark dark:text-headerItems font-medium">
                    <HeaderItem name={"intro"} text={"Introdução"}/>
                    <HeaderItem name={"about"} text={"Sobre Mim"}/>
                    <HeaderItem name={"projects"} text={"Projetos"}/>
                    <HeaderItem name={"services"} text={"Serviços"}/>
                    <HeaderItem name={"skills"} text={"Skills"}/>
                    <HeaderItem name={"contact"} text={"Contato"}/>
                </ul>
            </div>

            {/* TOGGLE MODE AND LANGUAGE */}
            <div className="relative">
                <button className="size-7" onClick={handleToggleTheme}>
                    <ToggleThemeDark className={`size-7 fill-backgroundLight ${theme === "dark" ? "visible top-0" : "invisible top-[20px]"} absolute transition-all duration-200 ease-linear`}/> 
                    <ToggleThemeLight className={`size-7 fill-backgroundDark ${theme === "light" ? "visible top-0" : "invisible -top-[20px]"} absolute transition-all duration-200 ease-linear`}/>
                </button>
            </div>
        </div>
     );
}
 
export default Header;