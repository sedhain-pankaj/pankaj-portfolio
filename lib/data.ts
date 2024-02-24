import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jukebox from "@/public/jukebox.jpg";
import plumber from "@/public/plumber.jpg";
import dashboard from "@/public/dashboard.jpg";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "JukeBox",
    description:
      "A kiosk that allowed users to queue songs from locally stored category or YouTube, and an admin panel to manage these songs.",
    tags: [
      "PHP/ Apache",
      "JS",
      "SCSS",
      "Batch",
      "jQuery/ UI",
      "FFMpeg",
      "YouTube v3 API",
      "MediaElementJS",
    ],
    imageUrl: jukebox,
  },

  {
    title: "Dashboard",
    description:
      "A financial dashboard with homepage, login page and invoice page with search, sort, pagination & CRUD of invoices.",
    tags: ["React", "NextJS 14", "SQL", "Tailwind CSS", "Framer Motion"],
    imageUrl: dashboard,
  },
  {
    title: "Plumbing",
    description:
      "A mobile and website app for a plumber to record jobs, store photos, and send PDFs to clients. It uses jotform for the admin panel.",
    tags: [
      "Responsive Web App",
      "Mobile App",
      "Analytics",
      "Conditional Forms",
      "Onedrive Integration",
      "JotForm",
    ],
    imageUrl: plumber,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
