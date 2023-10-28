import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import articify from "@/public/articify.png";
import epiphora from "@/public/epiphora.png";
import slicio from "@/public/slicio.png";

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
    title: "Articify",
    description:
      "Developed an open-source AI-powered web app for automated article summarization, streamlining the reading experience.",
    tags: ["React", "Redux", "Vite", "Tailwind", "TypeScript"],
    imageUrl: articify,
  },
  {
    title: "Epiphora",
    description:
      "Developed a web application for sharing and categorizing interesting facts, featuring real-time voting and fact dispute handling.",
    tags: ["React", "SCSS", "Vite", "Supabase", "TypeScript"],
    imageUrl: epiphora,
  },
  {
    title: "Slicio",
    description:
      "Designed an interactive web application that presents a dynamic menu and provides essential order information.",
    tags: ["React", "Git", "Vercel", "Tailwind", "Vite"],
    imageUrl: slicio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Python",
  "Flask",
] as const;
