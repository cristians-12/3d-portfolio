import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] object-contain"
          />
        </div>
      }
    >
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <ul className="list-disc">
        {experience.points.map((point, i) => (
          <li key={`experience-point-${i}`} className="text-white-100 pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Lo que he realizado:</p>
        <h2 className={styles.sectionHeadText}>Experiencia de trabajo:</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiencias, i) => (
            <ExperienceCard key={i} experience={experiencias} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
