import Button from "../components/Button";

import Github from "../assets/github.svg?react"
import Linkedin from "../assets/linkedin.svg?react"
import { useEffect, useRef, useState } from "react";

import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import env from "react-dotenv";

const Contact = () => {
    const [toggleModal, setToggleModal] = useState(false);

    // Initializing EMAILJS
    useEffect(() => emailjs.init(import.meta.env.EMAILJS_PUBLIC_API_KEY), []);

    const name = useRef(null);
    const email = useRef(null);
    const msg = useRef(null);

    /** 
    * This function has as porpose verify if the email is correctly formatted
    * @param {string} item - Email that will go under validation 
    */
    function isValidEmail(item) {
        return /\S+@\S+\.\S+/.test(item);
    }

    /** 
    * This function has as porpose send an email to my developer account after checking all the inputs and if the email is valid
    */
    async function handleContact() {
        const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + import.meta.env.ABSTRACT_EMAIL_API_KEY
        const emailItem = isValidEmail(email.current.value)

        if(name.current.value !== "" && msg.current.value !== ""){
            if(emailItem){
                try {
                    const response = await fetch(apiURL + '&email=' + email.current.value);
                    const data = await response.json();
                    const isValidSMTP = data.is_smtp_valid.value;

                    const params = {
                        from_name: name.current.value,
                        email_id: email.current.value,
                        message: msg.current.value
                    }

                    if (isValidSMTP) {
                        await emailjs.send(import.meta.env.EMAILJS_SERVICE_ID, import.meta.env.EMAILJS_TEMPLATE_ID, params).then((res) => {
                            console.log(res.status)
                            toast.success("Mensagem enviada com êxito!")
                            name.current.value = ""
                            email.current.value = ""
                            msg.current.value = ""
                        })

                        
                    } else {
                        toast.error("Esse email não existe ou está inativo.")
                    }
                }
                catch (error) {
                    
                }
            } else {
                toast.warn("Email inválido.")
            }
        } else {
            toast.error("Preencha todos os campos.")
        }

    }

    const InputBorder = ({children}) => {
        return <div className={`w-auto h-auto p-[2px] mb-3 flex justify-center items-center bg-gradient-to-t dark:bg-gradient-to-b from-backgroundDark from-[35%] dark:to-[#5a5a5a] to-[#9e9e9e]
        ${toggleModal ? "flex" : "hidden"}`}>
            {children}
        </div>
    }

    return ( 
        <div className="flex flex-col h-[70vh] sm:h-[90vh] md:h-[95vh] sm:p-responsiveLayout md:p-layout justify-center items-center relative text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" id="contact">
            <div className={`flex flex-col md:flex-row w-full h-full md:justify-center items-center ${toggleModal ? "blur-md" : "blur-0"} transition-all duration-300 ease-linear`}>
                <div className="flex flex-col h-1/3 w-[450px] sm:flex-row md:w-[780px] mb-16">
                    <h2 className="text-myRed text-[32px] font-semibold tracking-wider mt-10 h-[60vh] w-full text-center sm:text-start">Vamos trabalhar <br/> juntos</h2>
                    <div className="flex flex-col h-full items-center w-full">
                        <Button classNameIn="bg-whatsapp hover:bg-whatsappHover sm:hover:border-y-[7px] lg:hover:border-y-[9px] w-full" 
                                classNameOut={"mt-12 sm:mt-8 mb-8"} text={"Whatsapp"} href="https://wa.me/5511952404831"/>

                        <h2 className="font-bold text-[23px] w-full text-center">ou</h2>

                        <Button classNameIn="bg-backgroundDark hover:bg-black sm:hover:border-y-[7px] lg:hover:border-y-[9px] w-full" 
                                classNameOut={"mt-8"} text={"E-mail"} onClick={() => {setToggleModal(true)}}/>
                    </div>
                </div>
                
                {/* FOOTER */}
                <div className="absolute bottom-56">
                    <div className="flex w-[450px] md:w-[780px] justify-center items-center gap-x-5">
                        <div className="w-[80px] lg:w-[210px] h-[1px] bg-introDetails md:flex hidden" />
                        <span className="w-max text-center text-[19px]">Copyright © 2024 - Douglas Nicida</span>
                        <div className="w-[80px] lg:w-[210px] h-[1px] bg-introDetails md:flex hidden" />
                    </div>
                </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="absolute sm:mt-0 lg:mt-48 md:right-[10px] md:p-responsiveLayout xl:p-layout">
                <div className="flex sm:flex-col items-center gap-x-4 sm:gap-y-7 sm:gap-x-0 relative">
                    <div className="w-[100px] h-[3px] sm:w-[3px] sm:h-[150px] lg:h-[200px] dark:bg-headerItems bg-black/40 transition-all duration-200 ease-in-out" />

                    <a href="https://github.com/douglasnicida" target="_blank" rel="noopener noreferrer">
                        <Github className="size-7 lg:size-8 xl:size-9 cursor-pointer dark:fill-backgroundLight fill-backgroundDark dark:hover:fill-github hover:fill-github transition-all duration-300 ease-in-out" />
                    </a>

                    <a href="https://www.linkedin.com/in/douglasnicida/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="size-7 lg:size-8 xl:size-9 cursor-pointer dark:fill-backgroundLight fill-backgroundDark dark:hover:fill-sky hover:fill-sky transition-all duration-300 ease-in-out" />
                    </a>
                </div>
            </div>

            {/* MODAL */}
            <div className={`absolute md:w-1/2 bg-backgroundDark rounded-lg ${toggleModal ? "visible h-1/2" : "invisible h-0"} drop-shadow-image dark:drop-shadow-white transition-all duration-300 ease-in-out`}>
                <div className={`flex flex-col w-full h-full ${toggleModal ? "p-[50px]" : "p-0"}`}>
                    {/* ClOSE ICON */}
                    <button className={`flex w-full h-[40px] text-backgroundDark dark:text-white text-3xl z-50 justify-end group ${toggleModal ? "flex" : "hidden"}`} type="button" 
                    onClick={() => {setToggleModal(false)}}>
                        <div className="bg-white h-[3px] w-[30px] rotate-45 absolute group-hover:scale-[120%] transition-all duration-300 ease-in-out"/>
                        <div className="bg-white h-[3px] w-[30px] -rotate-45 absolute group-hover:scale-[120%] transition-all duration-300 ease-in-out"/>
                    </button>

                    <div className="flex flex-col md:w-3/4 px-[50px] self-center">

                        <InputBorder children={<input className={`text-white p-[8px] w-full ${toggleModal ? "flex" : "hidden"} bg-[#1b1b1b] focus:outline-none placeholder:tracking-widest`} type="text" placeholder="Nome" ref={name}/>} />
                        <InputBorder children={<input className={`text-white p-[8px] w-full ${toggleModal ? "flex" : "hidden"} bg-[#1b1b1b] focus:outline-none placeholder:tracking-widest`} type="email" placeholder="Email" ref={email}/>} />
                        <InputBorder children={<textarea className={`text-white p-[8px] resize-none w-full h-fit ${toggleModal ? "flex" : "hidden"} bg-[#1b1b1b] focus:outline-none placeholder:tracking-widest`} cols="30" rows="6" placeholder="Digite sua mensagem..." ref={msg} />} />

                    </div>

                    <div className="w-full h-fit justify-center flex">
                        <Button text="Enviar" classNameIn="bg-backgroundDark hover:bg-black sm:hover:border-y-[7px] lg:hover:border-y-[9px] w-full"
                                classNameOut={`bg-myRed mt-8 w-fit ${toggleModal ? "flex" : "hidden"}`} hoverColor="bg-hoverRedButton" onClick={handleContact}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;