import { educationData, experiencesData, links, projectsData } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type ProjectProps = (typeof projectsData)[number];
export type EducationDetails = (typeof educationData)[number];
export type ExperienceDetails = (typeof experiencesData)[number];
