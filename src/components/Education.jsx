import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = ({ education }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl w-full">
        <img
          src={education.icon}
          alt={`${education.institution} logo`}
          className="w-16 h-16 rounded-full mb-4"
        />
        <h3 className="text-white text-[24px] font-bold">{education.degree}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {education.institution}
        </p>
        <p className="text-secondary text-[14px]">{education.date}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {education.points.map((point, index) => (
            <li
              key={`education-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>How it all started</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col gap-10">
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} education={edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
