import React from "react";
import TimelineTree from "./timeline";
import { educationData } from "@/lib/data";

const Education: React.FC = () => {
  return (
    <TimelineTree
      data={educationData}
      sectionId="Education"
      sectionTitle="My education"
    />
  );
};

export default Education;
