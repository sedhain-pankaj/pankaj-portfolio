import React from "react";
import TimelineTree from "./timeline";
import { experiencesData } from "@/lib/data";

const Experience: React.FC = () => {
  return (
    <TimelineTree
      data={experiencesData}
      sectionId="Experience"
      sectionTitle="My experience"
    />
  );
};

export default Experience;
