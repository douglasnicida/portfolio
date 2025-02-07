import MyFilmListImage from '../assets/myfilmlist.png'
import HBOMaxImage from '../assets/hbomaxclone.png'
import CodeImage from '../assets/code.png'
import BarbershopImage from '../assets/yourbarber.png'
import AppNimeImage from '../assets/appnime.png'
import Button from '../components/Button';
import { React_Icon, TailWindCSS_Icon, CSS3_Icon, HTML5_Icon, Javascript_Icon, Java_Icon, Spring_Icon, NestJS_Icon, NextJS_Icon, Typescript_Icon, Fastify_Icon } from '../utils/content';
import { MotionDivItemsUp, MotionDivToLeft, MotionDivToRight, MotionDivToUp } from '../utils/motion';

// const initialRotationLaptop = new Euler(0, -Math.PI / 7, 0);
// const initialRotationPhone = new Euler(0, 2.7, 0);


// function Model1({laptopPath}) {
//     const {scene} = useGLTF(laptopPath);

//     // const copiedScene = useMemo(() => scene.clone(),[scene])

//     return <primitive object={scene} scale={0.0016} position={[0.0004, 0, 0]} rotation={initialRotationLaptop}/>
//   }
  
// function Model2({phonePath}) {
//     const {scene} = useGLTF(phonePath)
//     // const copiedScene = useMemo(() => scene.clone(),[scene])
  
//     return <primitive object={scene} scale={0.0017} position={[0.00069, 0.00015, -0.000035]} rotation={initialRotationPhone}/>
// }


const Projects = () => {

    let projects = [
        {
            key: 1,
            name: "AppNime",
            description: "Aplicação destinada a ajudar os fãs de anime na organização dos seus animes favoritos e ficar por dentro dos adicionados recentemente, podendo dar nota à eles! (Obs: O primeiro carregamento após um tempo de inatividade do servidor pode causar lenttidão de até 50 segundos segundo o Render)",
            tech: ["nextjs", "typescript", "tailwindcss", "html5", "css3"],
            category: ["frontend"],
            image: [AppNimeImage],
            urls: ["https://appnime.netlify.app/?search=&page=1&limit=28","https://github.com/douglasnicida/appnime_frontend"]
        },
        {
            key: 2,
            name: "AppNime API",
            description: "REST API para aplicação AppNime, destinada a ajudar os fãs de anime na organização dos seus animes favoritos e ficar por dentro dos adicionados recentemente, podendo dar nota à eles!",
            tech: ["nestjs", "typescript"],
            category: ["backend"],
            image: [CodeImage],
            urls: ["", "https://github.com/douglasnicida/appnime_backend"]
        },
        {
            key: 3,
            name: "YOURBARBER - Barbershops",
            description: "Projeto realizado para trabalho da faculdade, uma API para aplicação de barbearias. Onde as barbearias podem divulgar seus serviços e os clientes podem agendar um serviço.",
            tech: ["reactjs", "spring", "tailwindcss", "html5", "css3", "java", "javacript"],
            category: ["frontend", "backend"],
            image: [BarbershopImage],
            urls: ["","https://github.com/douglasnicida/frontend_barbershop"]
        },
        {
            key: 4,
            name: "MyFilmList",
            description: "Projeto que te permite ver os detalhes dos filmes mais recentes e salvar em sua lista os favoritos.",
            tech: ["reactjs","tailwindcss","html5","css3", "javascript"],
            category: ["frontend"],
            image: [MyFilmListImage],
            urls: ["https://myfilmslist.netlify.app", "https://github.com/douglasnicida/movie-details-list-project/"]
        },
        {
            key: 5,
            name: "HBO Max Clone",
            description: "Clone do site da HBO MAX, realizado em janeiro de 2024. Totalmente responsivo, possui slider e muito mais!",
            tech: ["reactjs","tailwindcss","html5","css3","javascript"],
            category: ["frontend"],
            image: [HBOMaxImage],
            urls: ["https://hb0maxclone.netlify.app", "https://github.com/douglasnicida/hbomax_clone"]
        },
    ]
    return ( 

        <div id="projects">
            {projects.map(project => {
                return (
                    <div className="flex flex-col-reverse lg:flex-row relative md:h-[125vh] lg:h-[100vh] sm:p-responsiveLayout md:p-layout justify-center items-center text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" key={project.key}>
                        <div className="flex flex-col gap-y-7 w-full lg:justify-center relative bottom-10 md:bottom-20 2xl:pl-[100px] lg:mt-20">
                            
                            {/* PROJECT DETAILS */}
                            <MotionDivToRight>
                                <div className="flex flex-col gap-y-7 text-wrap pl-[50px] lg:pl-[0px]">
                                    <h2 className="text-[22px] sm:text-[28px] uppercase tracking-[6px] dark:text-containerLight text-containerDark">{project.name}</h2>
                                    <p className="text-justify text-[17px] dark:text-secondaryTextDark text-black/80 tracking-widest w-[300px] sm:w-[500px] md:w-[450px] xl:w-[550px]">{project.description}</p>
                                </div>
                            </MotionDivToRight>
                            
                            {/* Buttons */}
                                <div className="flex flex-col md:flex-row gap-x-7 z-20 lg:w-fit lg:mt-20 w-full items-center justify-center">

                                    
                                        {!project.category.includes("backend") && <MotionDivItemsUp i={1}><Button classNameIn="bg-myRed hover:bg-myRedHover sm:hover:border-y-[7px] lg:hover:border-y-[9px] " 
                                        classNameOut={"mt-12 sm:mt-8"} text={"Acessar"} href={project.urls[0]}/></MotionDivItemsUp>}
                                    
                                    
                                    <MotionDivItemsUp i={2}>
                                        <Button classNameIn="bg-github hover:bg-githubHover sm:hover:border-y-[7px] lg:hover:border-y-[9px] " 
                                        classNameOut={"mt-4 sm:mt-8"} text={"Github"} href={project.urls[1]}/>
                                    </MotionDivItemsUp>
                                </div>

                            {/* Categories */}
                            <div className="flex gap-x-3 lg:w-fit w-full justify-center">
                                {project.category.map((categoryName) => {
                                    return (
                                        <MotionDivToUp key={categoryName}>
                                            <span className="w-fit h-fit px-[14px] py-[3px] bg-[#555555] text-white rounded-full text-[12px] leading-[12px] cursor-default" key={categoryName}>
                                                {categoryName}
                                            </span>
                                        </MotionDivToUp>
                                    )
                                })}
                            </div>

                            <div className="flex gap-x-3 w-full lg:w-[400px] flex-wrap items-center justify-center lg:justify-start">
                                {project.tech.map((techName, i) => {
                                    var icon = null;

                                    switch(techName) {
                                        case "reactjs": 
                                            icon = React_Icon
                                            break;

                                        case "nextjs": 
                                            icon = NextJS_Icon
                                            break;

                                        case "nestjs": 
                                            icon = NestJS_Icon
                                            break;

                                        case "fastify":
                                            icon = Fastify_Icon
                                            break;

                                        case "html5": 
                                            icon = HTML5_Icon
                                            break;

                                        case "css3": 
                                            icon = CSS3_Icon
                                            break;

                                        case "java": 
                                            icon = Java_Icon
                                            break;

                                        case "javascript": 
                                            icon = Javascript_Icon
                                            break;

                                        case "typescript": 
                                            icon = Typescript_Icon
                                            break;

                                        case "spring": 
                                            icon = Spring_Icon
                                            break;

                                        case "tailwindcss":
                                            icon = TailWindCSS_Icon
                                            break;
                                    }

                                    return (
                                        <MotionDivItemsUp i={i*2} className="w-fit h-fit pr-[14px] py-[3px] text-white rounded-full text-[12px] leading-[12px] cursor-default" key={techName}>
                                            <span>
                                                {icon}
                                            </span>
                                        </MotionDivItemsUp>
                                    )
                                })}
                            </div>

                        </div>

                        {/* PROJECT PREVIEW */}
                        <MotionDivToLeft 
                            className="w-full lg:w-[700px] lg:h-[700px] xl:w-[800px] md:h-[600px] h-[350px] relative lg:absolute flex justify-center xl:right-20 right-0 z-10 overflow-y-hidden"
                            transition={{duration:1}}
                        >
                            <img src={project.image[0]} alt={project.name}/>

                            {/* 3D PROJECT PREVIEW */}
                                {/* <Canvas dpr={[1,2]} camera={{fov: 45}} className='bg-transparent'>
                                    <perspectiveCamera
                                        position={[0, 0, 0]} // Posição da câmera (x, y, z)
                                        fov={75} // Campo de visão em graus
                                        near={0.1} // Distância próxima do plano de corte
                                        far={1000} // Distância longe do plano de corte
                                    />

                                    <ambientLight />
                                    <pointLight position={[5, 5, 5]} intensity={1} />
                                    <pointLight position={[-3, -3, 2]} />
                                    
                                    <OrbitControls rotateSpeed={0.5} maxPolarAngle={Math.PI * 0.6} minPolarAngle={1.5} enableZoom={false}/>
                                    <PresentationControls speed={0.6} global zoom={1} polar={[-0.1, Math.PI/4]}>
                                        <Stage intensity={0} environment={"warehouse"}>
                                            <Model1 laptopPath={project.image[0]}/>
                                            <Model2 phonePath={project.image[1]}/> 
                                        </Stage>
                                    </PresentationControls>
                                </Canvas> */}
                        </MotionDivToLeft>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Projects;
