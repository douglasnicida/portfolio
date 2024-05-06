import { useEffect, useState } from "react";

import {ReactComponent as ToggleThemeDark} from "../assets/moon.svg"
import {ReactComponent as ToggleThemeLight} from "../assets/sun.svg"
import { Link } from "react-scroll";

//TODO: BURGUER MENU (DEIXAR RESPONSIVO)

const Header = () => {
    const [theme, setTheme] = useState("dark");
    const [toggleMenu, setToggleMenu] = useState(false);

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

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const HeaderItem = ({name, text, className}) => {
        return(
            <li className={`mb-2 sm:mb-0 font-Syne flex flex-col group relative w-[83px] text-center ${className}`}>
                {/* <span className="absolute -top-0 right-0 w-0 h-[2px] rounded-full bg-myRed transition-all duration-500 group-hover:w-full"></span> */}
                <Link to={name} spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer font-Syne hover:font-bold">
                    {text}
                </Link>
                <span className="absolute -bottom-0 left-0 w-0 h-[3px] rounded-full bg-myRed transition-all duration-500 group-hover:w-full"></span>
            </li>
        );
    }

    return ( 
        <div className="flex w-full h-[143px] justify-between items-center px-[40px] lg:gap-0 lg:px-[100px] dark:text-white dark:bg-backgroundDark bg-backgroundLight text-backgroundDark fixed z-50">
            {/* LOGO */}
            <div className="hover:rotate-[7deg] hover:scale-110 transition-all duration-300 ease-in-out">
                <Link to="intro" className="font-passionOne text-[40px] -tracking-[5px] drop-shadow-logo cursor-pointer" spy={true} smooth={true} offset={-50} duration={500}>
                    DN
                </Link>
            </div>

            <button className="flex md:hidden flex-col justify-around gap-y-[5px] text-backgroundDark dark:text-white text-3xl z-50" type="button" id="iconeMenu" onClick={handleMenu}>
                <div className={`flex flex-col items-center justify-center relative h-[22px] ${(!toggleMenu) ? 'md:hidden' : ''}`}>
                    <div className={`absolute w-[30px] h-[3px] ${toggleMenu ? "bg-white" : "bg-backgroundDark"} dark:bg-white transition-all duration-500 ease-in-out translate-y-2 rounded-md ${(toggleMenu) ? 'rotate-45 translate-x-1 translate-y-[1px]' : ''}`} />
                    <div className={`absolute w-[30px] h-[3px] ${toggleMenu ? "bg-white" : "bg-backgroundDark"} dark:bg-white transition-all duration-500 ease-in-out rounded-md ${(toggleMenu) ? 'hidden' : ''}`} />
                    <div className={`absolute w-[30px] h-[3px] ${toggleMenu ? "bg-white" : "bg-backgroundDark"} dark:bg-white transition-all duration-500 ease-in-out -translate-y-2 rounded-md ${(toggleMenu) ? '-rotate-45 translate-x-1 translate-y-[1px]' : ''}`} />
                </div>
            </button>

            {/* OPTIONS RESPONSIVE*/}
            <div className={`absolute ${(toggleMenu) ? "w-[190px] sm:w-[300px]" : "w-0"} md:hidden h-screen right-0 top-0 z-40 bg-backgroundDark transition-all duration-500 ease-in-out`}>
                <ul className="flex flex-col w-full h-full gap-x-3 lg:gap-x-7 text-headerItems font-medium items-center justify-center gap-y-10 pb-32 pt-9">
                    <HeaderItem name={"intro"} text={"Introdução"} className={`${(!toggleMenu) ? 'hidden' : 'flex'}`}/>
                    <HeaderItem name={"about"} text={"Sobre Mim"} className={`${(!toggleMenu) ? 'hidden' : 'flex'}`}/>
                    <HeaderItem name={"projects"} text={"Projetos"} className={`${(!toggleMenu) ? 'hidden' : 'flex'}`}/>
                    <HeaderItem name={"services"} text={"Serviços"} className={`${(!toggleMenu) ? 'hidden' : 'flex'}`}/>
                    <HeaderItem name={"skills"} text={"Skills"} className={`${(!toggleMenu) ? 'hidden' : 'flex'}`}/>
                    <HeaderItem name={"contact"} text={"Contato"} className={`${(!toggleMenu) ? 'hidden' : 'flex'}`}/>
                    {/* TOGGLE MODE AND LANGUAGE */}
                    <div className="relative">
                        <button className="size-7" onClick={handleToggleTheme}>
                            <ToggleThemeDark className={`size-7 fill-backgroundLight ${theme === "dark" ? "visible top-0" : "invisible -top-[20px]"} absolute transition-all duration-200 ease-linear hover:drop-shadow-white ${(!toggleMenu) ? 'hidden' : 'flex'}`}/> 
                            <ToggleThemeLight className={`size-7 fill-backgroundLight ${theme === "light" ? "visible top-0" : "invisible top-[20px]"} absolute transition-all duration-100 ease-linear hover:drop-shadow-white ${(!toggleMenu) ? 'hidden' : 'flex'}`}/>
                        </button>
                    </div>
                </ul>
            </div>

            {/* OPTIONS */}
            <div className="hidden md:block">
                <ul className="flex w-full h-fit gap-x-3 lg:gap-x-7 text-backgroundDark dark:text-headerItems font-medium">
                    <HeaderItem name={"intro"} text={"Introdução"}/>
                    <HeaderItem name={"about"} text={"Sobre Mim"}/>
                    <HeaderItem name={"projects"} text={"Projetos"}/>
                    <HeaderItem name={"services"} text={"Serviços"}/>
                    <HeaderItem name={"skills"} text={"Skills"}/>
                    <HeaderItem name={"contact"} text={"Contato"}/>
                </ul>
            </div>

            {/* TOGGLE MODE AND LANGUAGE */}
            <div className="relative hidden md:block">
                <button className="size-7" onClick={handleToggleTheme}>
                    <ToggleThemeDark className={`size-7 fill-backgroundLight ${theme === "dark" ? "visible top-0" : "invisible -top-[20px]"} absolute transition-all duration-200 ease-linear hover:drop-shadow-white`}/> 
                    <ToggleThemeLight className={`size-7 fill-backgroundDark ${theme === "light" ? "visible top-0" : "invisible top-[20px]"} absolute transition-all duration-100 ease-linear hover:drop-shadow-gray`}/>
                </button>
            </div>
        </div>
     );
}
 
export default Header;