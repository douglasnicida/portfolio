import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from "@react-three/drei"
import { useMemo } from 'react';
import { Euler } from 'three';
import Button from '../components/Button';

function Model1(props) {
    const {scene} = useGLTF("/laptop/scene.gltf");

    const copiedScene = useMemo(() => scene.clone(),[scene])

    return <primitive object={copiedScene} scale={0.0016} position={[0.0004, 0, 0]} {...props} />
  }
  
function Model2(props) {
    const {scene} = useGLTF("/phone/scene.gltf")
    const copiedScene = useMemo(() => scene.clone(),[scene])
  
    return <primitive object={copiedScene} scale={0.000018} position={[0.00069, 0.00015, -0.000014]} {...props}/>
}




const Projects = () => {

    let projects = [
        {
            key: 1,
            name: "Opensea Collection Clone",
            description: "Website clone da Opensea Mystical Wizard Guild Collection da MysticSwap.",
            tech: [],
            category: ["frontend", "backend"],
            image: [],
            urls: []
        },
        {
            key: 2,
            name: "nome projeto2",
            description: "Descrição projeto2",
            tech: [],
            category: ["frontend", "backend"],
            image: [],
            urls: []
        },
        {
            key: 3,
            name: "nome projeto3",
            description: "Descrição projeto3",
            tech: [],
            category: ["frontend", "backend"],
            image: [],
            urls: []
        },
        {
            key: 4,
            name: "nome projeto4",
            description: "Descrição projeto4",
            tech: [],
            category: ["frontend", "backend"],
            image: [],
            urls: []
        },
    ]

    const initialRotation = new Euler(0, -Math.PI / 7, 0);
    
    return ( 
        <div id="projects">
            {projects.map(project => {
                return (
                    <div className="flex flex-col-reverse lg:flex-row relative h-[100vh] sm:p-responsiveLayout md:p-layout justify-center items-center text-backgroundDark bg-backgroundLight dark:text-backgroundLight dark:bg-backgroundDark z-10" key={project.key}>
                        <div className="flex flex-col gap-y-7 w-full lg:justify-center relative bottom-10 md:bottom-20 pl-[100px] lg:mt-20">
                            <div className="flex flex-col gap-y-7 text-wrap">
                                <h2 className="text-[22px] sm:text-[28px] uppercase tracking-[6px] dark:text-containerLight text-containerDark">{project.name}</h2>
                                <p className="text-justify text-[17px] dark:text-secondaryTextDark text-black/80 tracking-widest w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]">{project.description}</p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-x-7 z-20 w-fit lg:mt-20">
                                <Button classNameIn="bg-myRed hover:bg-myRedHover sm:hover:border-y-[7px] lg:hover:border-y-[9px] " 
                                classNameOut={"mt-12 sm:mt-8"} text={"Acessar"}/>

                                <Button classNameIn="bg-github hover:bg-githubHover sm:hover:border-y-[7px] lg:hover:border-y-[9px] " 
                                classNameOut={"mt-4 sm:mt-8"} text={"Github"}/>
                            </div>

                            <div className="flex gap-x-3">
                                {project.category.map((categoryName) => {
                                    return (
                                        <span className="w-fit px-[14px] py-[3px] bg-[#555555] text-white rounded-full text-[12px] leading-3 cursor-default" key={project.key}>
                                            {categoryName}
                                        </span>
                                    )
                                })}
                            </div>

                        </div>

                        {/* 3D PROJECT PREVIEW */}
                        <div className="w-full lg:w-[650px] 2xl:w-[800px] md:h-full h-[350px] relative lg:absolute flex justify-center xl:right-20 right-0 z-10">
                            <Canvas dpr={[1,2]} camera={{fov: 45}}  className='bg-transparent'>
                                <PresentationControls speed={0.6} global zoom={0.99} polar={[-0.1, Math.PI/4]}>
                                    <Stage intensity={0} environment={"warehouse"}>
                                        <Model1 material={project.image[0]} rotation={initialRotation}/>
                                        <Model2 material={project.image[2]} rotation={initialRotation}/>
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