import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, OrbitControls } from "@react-three/drei"
import { useMemo } from 'react';
import { Euler } from 'three';
import Button from '../components/Button';

const initialRotationLaptop = new Euler(0, -Math.PI / 7, 0);
const initialRotationPhone = new Euler(0, 2.7, 0);

function Model1({laptopPath}) {
    const {scene} = useGLTF(laptopPath);

    const copiedScene = useMemo(() => scene.clone(),[scene])

    return <primitive object={copiedScene} scale={0.0016} position={[0.0004, 0, 0]} rotation={initialRotationLaptop}/>
  }
  
function Model2({phonePath}) {
    const {scene} = useGLTF(phonePath)
    const copiedScene = useMemo(() => scene.clone(),[scene])
  
    return <primitive object={copiedScene} scale={0.0017} position={[0.00069, 0.00015, -0.000035]} rotation={initialRotationPhone}/>
}




const Projects = () => {

    let projects = [
        {
            key: 1,
            name: "MyFilmList",
            description: "Projeto que te permite ver os detalhes dos filmes mais recentes e salvar em sua lista os favoritos.",
            tech: ["reactjs","tailwindcss","html5","css3", "javascript"],
            category: ["frontend"],
            image: ["/laptop/project1/scene.gltf", "/phone/project1/scene.gltf"],
            urls: []
        },
        {
            key: 2,
            name: "Opensea Collection Clone",
            description: "Website clone da Opensea Mystical Wizard Guild Collection da MysticSwap.",
            tech: ["reactjs", "nestjs", "tailwindcss", "html5", "css3", "javascript"],
            category: ["frontend", "backend"],
            image: ["/laptop/project2/scene.gltf", "/phone/project2/scene.gltf"],
            urls: []
        },
        {
            key: 3,
            name: "HBO Max Clone",
            description: "Clone do site da HBO MAX, realizado em janeiro de 2024. Totalmente responsivo, possui slider e muito mais!",
            tech: ["reactjs","tailwindcss","html5","css3","javascript"],
            category: ["frontend"],
            image: ["/laptop/project3/scene.gltf", "/phone/project3/scene.gltf"],
            urls: []
        },
        {
            key: 4,
            name: "Barbershop API",
            description: "Projeto realizado para trabalho da faculdade, uma API para aplicação de barbearias. Onde as barbearias podem divulgar seus serviços e os clientes podem agendar um serviço.",
            tech: ["java", "spring"],
            category: ["backend"],
            image: ["/laptop/project4/scene.gltf", "/phone/project4/scene.gltf"],
            urls: []
        },
        {
            key: 5,
            name: "Gestão de Loja Calçados",
            description: "SECCOMP UNESP RC CHALLENGE WINNER- Projeto para gestão de lojas de calçados.",
            tech: ["java"],
            category: ["frontend"],
            image: ["/laptop/project5/scene.gltf", "/phone/project5/scene.gltf"],
            urls: []
        },
    ]
    
    return ( 
        <div id="projects">
            {projects.map(project => {
                return (
                    <div className="flex flex-col-reverse lg:flex-row relative md:h-[125vh] lg:h-[100vh] sm:p-responsiveLayout md:p-layout justify-center items-center text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" key={project.key}>
                        <div className="flex flex-col gap-y-7 w-full lg:justify-center relative bottom-10 md:bottom-20 lg:pl-[100px] lg:mt-20">
                            <div className="flex flex-col gap-y-7 text-wrap pl-[50px] lg:pl-[0px]">
                                <h2 className="text-[22px] sm:text-[28px] uppercase tracking-[6px] dark:text-containerLight text-containerDark">{project.name}</h2>
                                <p className="text-justify text-[17px] dark:text-secondaryTextDark text-black/80 tracking-widest w-[300px] sm:w-[500px] md:w-[450px] xl:w-[550px]">{project.description}</p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-x-7 z-20 lg:w-fit lg:mt-20 w-full items-center">
                                <Button classNameIn="bg-myRed hover:bg-myRedHover sm:hover:border-y-[7px] lg:hover:border-y-[9px] " 
                                classNameOut={"mt-12 sm:mt-8"} text={"Acessar"}/>

                                <Button classNameIn="bg-github hover:bg-githubHover sm:hover:border-y-[7px] lg:hover:border-y-[9px] " 
                                classNameOut={"mt-4 sm:mt-8"} text={"Github"}/>
                            </div>

                            <div className="flex gap-x-3 lg:w-fit w-full justify-center">
                                {project.category.map((categoryName) => {
                                    return (
                                        <span className="w-fit px-[14px] py-[3px] bg-[#555555] text-white rounded-full text-[12px] leading-3 cursor-default" key={categoryName}>
                                            {categoryName}
                                        </span>
                                    )
                                })}
                            </div>

                        </div>

                        {/* 3D PROJECT PREVIEW */}
                        <div className="w-full lg:w-[650px] 2xl:w-[800px] md:h-full h-[350px] relative lg:absolute flex justify-center xl:right-20 right-0 z-10">
                            <Canvas dpr={[1,2]} camera={{fov: 45}} className='bg-transparent'>
                                <OrbitControls rotateSpeed={0.0} maxPolarAngle={Math.PI * 0.6} minPolarAngle={1.5} enableZoom={false}/>
                                <PresentationControls speed={0.6} global zoom={1} polar={[-0.1, Math.PI/4]}>
                                    <Stage intensity={0} environment={"warehouse"}>
                                        <Model1 laptopPath={project.image[0]}/>
                                        <Model2 phonePath={project.image[1]}/>
                                    </Stage>
                                </PresentationControls>
                            </Canvas>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Projects;