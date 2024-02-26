import React from "react";
import jukebox from "@/public/jukebox.jpg";
import plumber from "@/public/plumber.jpg";
import dashboard from "@/public/dashboard.jpg";
import { GrWorkshop } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";

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
      "Testing UI from dev-branch before merging to live-branch. Creating forms, handouts and help resources in PHP using Laravel blade templates.",
    icon: React.createElement(GrWorkshop),
    date: "Jan - Apr 2024",
  },
  {
    title: "ICT Professional Year Program by ACS",
    location: "Monash College",
    description:
      "A 44-week program to gain professional experience in the Australian IT industry. It includes a 12-week internship, 13-week online mentorship in IT skills development journey, and 32-week classroom-based work-readiness training.",
    icon: React.createElement(PiStudentDuotone),
    date: "2023",
  },
  {
    title: "Full-stack Developer (Contract)",
    location: "Craig Williams Promotions",
    description:
      "Built a kiosk-based jukebox app using JavaScript and PHP, modernized legacy code, designed intuitive UI, integrated YouTube API, and developed an auto-updating admin panel in collaboration with business owners.",
    icon: React.createElement(MdWorkOutline),
    date: "2021 - 2022",
  },
  {
    title: "Bachelor of Information Technology",
    location: "Southern Cross University",
    description:
      "Graduated with a GPA of 6.08 / 7.00 with majors in Software Development. Final year project of a movie search portal for rental store written in PHP using MVC design and phpMyAdmin where a customer can search for movies based on genre, title or actor.",
    icon: React.createElement(PiStudentDuotone),
    date: "2017 - 2020",
  },
] as const;
