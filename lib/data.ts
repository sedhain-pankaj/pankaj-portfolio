import React from "react";
import jukebox from "@/public/jukebox.jpg";
import plumber from "@/public/plumber.jpg";
import dashboard from "@/public/dashboard.jpg";
import { GrWorkshop } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { GiBookCover } from "react-icons/gi";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
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
  "NextJS",
  "PHP",
  "Apache",
  "Git/ GitHub",
  "Tailwind",
  "MySQL",
  "phpMyAdmin",
  "Python",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Software Developer (Intern)",
    location: "Vetcheck",
    description:
      "• Testing UI from dev-branch before merging to live-branch. • Creating forms, handouts and help resources in PHP using Laravel blade templates. • Creating Python scripts to extract Veterinary clinics details from online sites and compile them into CSV file • https://github.com/sedhain-pankaj/RCVS ",
    icon: React.createElement(GrWorkshop),
    date: "2024",
  },
  {
    title: "Full-stack Developer (Contract)",
    location: "Craig Williams Promotions",
    description:
      "• Created an in-house kiosk-based jukebox application written in PHP (backend) and JavaScript (frontend). • Updated old code bases to modern development standards, improving functionality. • Designed intuitive graphical user interfaces to improve user experience. • Added internet functionality in order to incorporate YouTube videos within the jukebox. • Co-ordinated with business owners to develop an admin panel that can automatically sort files and update the jukebox database without human intervention. • https://github.com/sedhain-pankaj/Craigs-Music-Player",
    icon: React.createElement(MdWorkOutline),
    date: "2021 - 2022",
  },
];

export const educationData = [
  {
    title: "ICT Professional Year Program by ACS",
    location: "Monash College",
    description:
      "• A 44-week program to gain professional experience in the Australian IT industry. • It includes a 12-week internship, 13-week online mentorship in IT skills development journey, and 32-week classroom-based work-readiness training.",
    icon: React.createElement(GiBookCover),
    date: "2023",
  },
  {
    title: "Bachelor of Information Technology",
    location: "Southern Cross University",
    description:
      "• Graduated with a GPA of 6.08 / 7.00 with majors in Software Development. • Final year project of a movie search portal for rental store written in PHP using MVC design and phpMyAdmin where a customer can search for movies based on genre, title or actor.",
    icon: React.createElement(PiStudentDuotone),
    date: "2017 - 2020",
  },
];
