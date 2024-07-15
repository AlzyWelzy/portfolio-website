import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuCode2 } from "react-icons/lu";
import articify from "@/public/articify.png";
import epiphora from "@/public/epiphora.png";
import mozzify from "@/public/mozzify.png";
import aadhiran_ventures from "@/public/aadhiran_ventures.png";
import springreen_main_site from "@/public/springreen_main_site.png";
import { title } from "process";
import { icons } from "react-icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer (Radixlink)",
    location: "Chandler, Arizona",
    description:
      "I have recently joined Radixlink as a Full Stack Developer. In this role, I am responsible for designing and implementing robust and scalable web applications. I collaborate closely with cross-functional teams to deliver high-quality software solutions that meet the needs of our clients. My responsibilities include developing and maintaining both front-end and back-end components, ensuring seamless integration and optimal performance. I also participate in code reviews, contribute to technical documentation, and provide mentorship to junior developers. This position allows me to leverage my expertise in various technologies and frameworks, enhancing my problem-solving and teamwork skills while contributing to the development of innovative solutions. I am committed to staying current with industry trends and continuously improving our development processes to deliver the best possible outcomes for our clients.",
    icon: React.createElement(LuCode2),
    date: "2024 - present",
  },
  {
    title: "Full Stack Developer (Springreen)",
    location: "Salem, Tamil Nadu",
    description:
      "I worked as a Full Stack Developer at Springreen, where I actively contributed to the development of innovative solutions. My responsibilities included designing and implementing robust and scalable web applications. I collaborated closely with cross-functional teams to deliver high-quality software solutions that met the needs of our clients. This role provided me with valuable experience in the full software development lifecycle, enhancing my problem-solving and teamwork skills.",
    icon: React.createElement(LuCode2),
    date: "2023 - 2024",
  },
  {
    title: "BCA (Bachelor of Computer Applications)",
    location: "Jhansi, Uttar Pradesh",
    description:
      "I am currently pursuing my BCA degree at Chandra Sekhar Azad Institute of Science and Technology, which began in 2021 and is expected to conclude in 2024. This program is allowing me to further develop my skills and knowledge in the field of computer applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Higher Secondary (Class 11 - Class 12)",
    location: "Jhansi, Uttar Pradesh",
    description:
      "I continued my education at Government Inter College for Class 11 and Class 12, where I further honed my passion for computer science and programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },

  {
    title: "High School (Class 9 - Class 10)",
    location: "Jhansi, Uttar Pradesh",
    description:
      "I was a student at Modern Public School from Class 9 to Class 12, and it was during this time that I discovered my deep interest in computers and programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
] as const;

export const projectsData = [
  {
    title: "Main Site (Springreen)",
    description:
      "Led the complete redesign and redevelopment of the Springreen website, enhancing its visual appeal and user experience to better represent the company.",
    tags: ["Django", "Python", "JavaScript", "HTML", "CSS"],
    imageUrl: springreen_main_site,
    project_link: "https://springreen.in",
  },
  {
    title: "Aadhiran Ventures",
    description:
      "Developed a customized web platform for Aadhiran Ventures, providing tailored solutions to meet their business needs at Springreen.",
    tags: ["Flask", "Python", "JavaScript", "HTML", "CSS"],
    imageUrl: aadhiran_ventures,
    project_link: "https://aadhiranventures.com/",
  },

  {
    title: "Articify",
    description:
      "Developed an open-source AI-powered web app for automated article summarization, streamlining the reading experience.",
    tags: ["React", "Redux", "Vite", "Tailwind", "TypeScript"],
    imageUrl: articify,
    project_link: "https://articify.alzywelzy.com/",
  },
  // {
  //   title: "Epiphora",
  //   description:
  //     "Developed a web application for sharing and categorizing interesting facts, featuring real-time voting and fact dispute handling.",
  //   tags: ["React", "SCSS", "Vite", "Supabase", "TypeScript"],
  //   imageUrl: epiphora,
  //   project_link: "https://epiphora.alzywelzy.com/",
  // },
] as const;

export const skillsData = [
  // Fundamentals
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  // "jQuery",
  "HyperScript",
  "HTMX",
  "Python",

  // Frontend Development
  "React",
  // "Next.js",
  "Tailwind",
  // "Redux",
  // "Framer Motion",

  // Backend Development
  // "Node.js",
  "Django",
  "Django Rest Framework",
  "Django Channels",
  // "FastAPI",
  "FastAPI",
  "Flask",
  // "Express",

  // Databases
  "MongoDB",
  "PostgreSQL",
  "MySQL",

  // APIs and Services
  // "GraphQL",
  // "Supabase",
  // "Vercel",
  // "AWS",

  // Version Control
  "Git",

  // Build Tools
  // "Vite",
] as const;

export const emailId = "manvendra@alzywelzy.com" as const;
export const websiteUrl = "alzywelzy.com" as const;
