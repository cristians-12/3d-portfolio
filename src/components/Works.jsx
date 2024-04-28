import { motion } from "framer-motion";
import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[420px]"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full rounded-2xl" />
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute black-gradient rounded-full w-10 top-0 right-0 p-2"
          >
            <img
              src={github}
              alt="github"
              className="w-screen h-1/2 object-contain"
            />
          </div>
          <div>
            <h3 className="mt-1 text-purple-400 font-bold">{name}</h3>
            <p className="mt-1">{description}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mi trabajo</p>
        <h2 className={styles.sectionHeadText}>Proyectos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3"></motion.p>
      </div>

      <div className="flex justify-center gap-10">
        {projects.map((proyecto, i) => (
          <ProjectCard key={`proyect-${i}`} {...proyecto} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
