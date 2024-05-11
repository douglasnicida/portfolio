import Development from '../assets/desenvolvimento_icon.svg?react'
import Design from '../assets/design_icon.svg?react'
import Backend from '../assets/banco_de_dados_icon.svg?react'
;
import ReactIcon  from '../assets/react.svg?react';
import NodeJSIcon  from '../assets/Node.svg?react';
import NestJSIcon  from '../assets/nestjs-svgrepo-com 1.svg?react';
import TailWindCSSIcon  from '../assets/TailWindCSS.svg?react';
import TypescriptIcon  from '../assets/typescript-svgrepo-com 1.svg?react';
import PrismaJSIcon  from '../assets/Prisma.svg?react';
import PostgreSQLIcon  from '../assets/postgresql-logo-svgrepo-com 1.svg?react';
import MySQLIcon  from '../assets/MySQL.svg?react';
import GithubIcon  from '../assets/github.svg?react';
import FigmaIcon  from '../assets/Figma.svg?react';
import PhotoshopIcon  from '../assets/photoshop-svgrepo-com (1) 1.svg?react';
import HTML5Icon  from '../assets/html5-svgrepo-com.svg?react';
import CSS3Icon  from '../assets/css-svgrepo-com.svg?react';
import JavascriptIcon  from '../assets/JS.svg?react';
// import { ReactComponent as JavaIcon } from '../assets/JavaIcon.svg';
import LinuxIcon  from '../assets/linux-svgrepo-com 1.svg?react';

export const skills = [
    {
        key: 1,
        name: "ReactJS",
        description: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
        icon: <ReactIcon className='size-[45px] md:size-[50px]' />,
        category: "frontend"
    },
    {
        key: 2,
        name: "NodeJS",
        description: "Node.js é um ambiente de tempo de execução JavaScript que permite executar JavaScript no servidor.",
        icon: <NodeJSIcon className='size-[45px] md:size-[50px]' />,
        category: "backend"
    },
    {
        key: 3,
        name: "NestJS",
        description: "Nest (NestJS) é um framework para construir aplicativos eficientes, escaláveis e confiáveis em Node.js.",
        icon: <NestJSIcon className='size-[45px] md:size-[50px]' />,
        category: "backend"
    },
    {
        key: 4,
        name: "TailWindCSS",
        description: "Tailwind CSS é um framework de utilitários CSS de baixo nível para construir interfaces de usuário customizáveis.",
        icon: <TailWindCSSIcon className='size-[45px] md:size-[50px]' />,
        category: "frontend"
    },
    {
        key: 5,
        name: "Typescript",
        description: "TypeScript é uma linguagem de programação de código aberto que é um superconjunto tipado de JavaScript.",
        icon: <TypescriptIcon className='size-[45px] md:size-[50px]' />,
        category: "frontend"
    },
    {
        key: 6,
        name: "PrismaJS",
        description: "Prisma é uma camada de banco de dados moderna e de alto desempenho para Node.js e TypeScript.",
        icon: <PrismaJSIcon className='size-[45px] md:size-[50px]' />,
        category: "backend"
    },
    {
        key: 7,
        name: "PostgreSQL",
        description: "PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto e avançado.",
        icon: <PostgreSQLIcon className='size-[45px] md:size-[50px]' />,
        category: "backend"
    },
    {
        key: 8,
        name: "MySQL",
        description: "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto.",
        icon: <MySQLIcon className='size-[45px] md:size-[50px]' />,
        category: "backend"
    },
    {
        key: 9,
        name: "Github",
        description: "GitHub é uma plataforma de hospedagem de código-fonte e controle de versão usando o Git.",
        icon: <GithubIcon className='size-[45px] md:size-[50px] fill-myRed' />,
        category: "tools"
    },
    {
        key: 10,
        name: "Figma",
        description: "Figma é uma ferramenta de design de interface do usuário baseada em navegador.",
        icon: <FigmaIcon className='size-[45px] md:size-[50px]' />,
        category: "tools"
    },
    {
        key: 11,
        name: "Photoshop",
        description: "Adobe Photoshop é um software de edição de imagens desenvolvido pela Adobe.",
        icon: <PhotoshopIcon className='size-[45px] md:size-[50px]' />,
        category: "tools"
    },
    {
        key: 12,
        name: "HTML5",
        description: "HTML5 é a última versão da linguagem de marcação padrão para documentos da World Wide Web.",
        icon: <HTML5Icon className='size-[45px] md:size-[50px] fill-myRed'/>,
        category: "frontend"
    },
    {
        key: 13,
        name: "CSS3",
        description: "CSS3 é a última evolução do padrão CSS, usado para estilizar elementos HTML.",
        icon: <CSS3Icon className='size-[46px] fill-myRed' />,
        category: "frontend"
    },
    {
        key: 14,
        name: "Javascript",
        description: "JavaScript é uma linguagem de programação de alto nível, interpretada e de script comumente usada para criar páginas web interativas.",
        icon: <JavascriptIcon className='size-[45px] md:size-[50px]' />,
        category: "frontend"
    },
    // {
    //     key: 15,
    //     name: "Java",
    //     description: "Java é uma linguagem de programação de propósito geral, concorrente, orientada a objetos, com forte segurança.",
    //     icon: <JavaIcon className='size-[45px] md:size-[50px]' />,
    //     category: "backend"
    // },
    {
        key: 16,
        name: "Linux",
        description: "Linux é um sistema operacional de código aberto baseado no kernel Linux.",
        icon: <LinuxIcon className='size-[45px] md:size-[50px]' />,
        category: "other"
    }
];


export const items = [
    {key: 1, icon:<Development className="size-12 fill-myRed" />, title: "Desenvolvimento", text:"Desenvolvo sites profissionais como: blogs, portfólios, landing pages, e-commerce, dashboard e muito mais!"},
    {key: 2, icon:<Design className="size-14" />, title: "UI Design", text: "Desenho interfaces objetivas, bonitas, responsivas e principalmente intuitivas para o usuário."},
    {key: 3, icon:<Backend className="size-14" />, title: "Frontend / Backend", text: "Criação e planejamento da aplicação como um todo, desde seu banco de dados, servidor até a interface."}
]