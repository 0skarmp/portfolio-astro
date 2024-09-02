export type IDataRS = {
    name: string;
    link: string;
    icons: string;
  }[]
  
  
  export type IDataExperiencie = {
    role: string;
    company: string;
    duraction: string;
    address: string;
    aptitudes: string;
  }[]
  
  export type IProject = {
    id: number;
    title: string;
    img?: string
    description: string
    url: string
    active: boolean | number
  }[]
  
  export const dataRS: IDataRS = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/oskarmorales",
      icons: "LinkedIn",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/mposkar/",
      icons: "Youtube",
    },
    {
      name: "Github",
      link: "https://github.com/0skarmp",
      icons: "Github",
    },
  ];
  
  
  
  export const dataExperiencie: IDataExperiencie = [
    {
    role: "Junior Analista de Software",
    company: "Multilab ·· Jornada completa",
    duraction: "MAYO. 2024 - 4 meses AGOSTO. 2024 ",
    address: "Las Condes, Región Metropolitana de Santiago, ChileLas Condes, Región Metropolitana de Santiago, Chile",
    aptitudes: "Desarrollo de base de datos · Hojas de estilos en cascada (CSS) · Confluence · Lenguaje SASS · Aplicaciones web · Redux.js · Creatividad",
  },
  
    
  ]
  
  
  
  export const dataProjects: IProject = [
    {
      id: 1,
      title: 'Hotel Virtual Assistant',
      img: 'img/hotel.png',
      description: 'Sistema de control de invetarios y control de ventas',
      url: 'https://github.com/juanRCoder/Hotel_Virtual_Assitant',
      active: 1
    },
  
    
  ]