import React from "react";
import { motion } from "framer-motion";

const advantages = [
  {
    id: "01",
    title: "TAILORED SOLUTIONS",
    description:
      "We don’t believe in one-size-fits-all. Every project is uniquely crafted to align with your business goals, and vision.",
  },
  {
    id: "02",
    title: "SPEED & AGILITY",
    description:
      "As a nimble team, we move fast without compromising quality. You get results quickly, with full transparency the way.",
  },
  {
    id: "03",
    title: "LONG-TERM PARTNERSHIP",
    description:
      "We go beyond delivery. We build lasting relationships and continue to support you as your needs evolve.",
  },
];

// Variants for the rise-up animation
const riseUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const AdvantageSection = () => {
  return (
    <section
      className="text-white py-20  md:px-24 px-10"
      style={{ backgroundColor: "#181818" }}
    >
      {/* Header */}
      <motion.div
        className="md:max-w-[1300px] mx-auto flex flex-col md:flex-row md:justify-between justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="text-left text-[22px] md:text-[25px] mb-5 text-gray-100 tracking-tight"
          custom={0}
          variants={riseUpVariant}
        >
          Our Advantage -
        </motion.div>

        <motion.h2
          className="text-left text-[60px]  md:text-[90px] font-[400] leading-tight     mb-16 pr-0 md:pr-8"
          custom={1}
          variants={riseUpVariant}
        >
          WHERE VISION
          <br />
          MEETS EXECUTION
        </motion.h2>
      </motion.div>

      {/* Items */}
      <div className="md:max-w-[1300px] mx-auto">
        {advantages.map((item, index) => (
       <motion.div
  key={index}
  className="group relative flex flex-col md:flex-row items-start md:items-center md:justify-between 
             border-b border-neutral-800 py-10 md:py-16
             hover:border-b-transparent transition-all duration-300"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={riseUpVariant}
  custom={index + 2}
>
  {/* Sliding border animation */}
  <div className="absolute bottom-0 left-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-500"></div>

  {/* ID and Title */}
  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full md:w-auto md:gap-65">
    <div className="text-black text-md font-[500] px-4 py-0.2 rounded-full bg-white tracking-tight flex-shrink-0">
      {item.id}
    </div>
    <h3 className="text-[33px] md:text-[40px] font-[400] leading-tight">
      {item.title}
    </h3>
  </div>

  {/* Description */}
  <p className="text-lg text-neutral-500 mt-4 md:mt-0 md:w-[330px] pr-5 md:pr-0">
    {item.description}
  </p>
</motion.div>

        ))}
      </div>
    </section>
  );
};

export default AdvantageSection;
