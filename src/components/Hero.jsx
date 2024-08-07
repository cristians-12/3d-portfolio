import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex justify-center items-center mt-5">
          <div>
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-80 h-40 mx-2 violet-gradient"></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white `}>
              Hola, soy <span className="text-[#915eff]">Cristian</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Desarrollo paginas y servicios web, poseo conocimientos en el desarrollo movil y diferentes frameworks.
            </p>
          </div>
        </div>

        <ComputersCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-5/6 flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
