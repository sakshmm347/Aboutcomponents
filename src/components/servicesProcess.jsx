import React, { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Lightbulb, Layout, Briefcase } from "lucide-react";

const steps = [
  {
    icon: <Monitor size={40} strokeWidth={1} />,
    step: "Step -01",
    title: "Analysis to drive insights",
    description:
      "We dive deep into data to uncover patterns, trends, opportunities, every decision is backed by strategic insights.",
  },
  {
    icon: <Lightbulb size={40} strokeWidth={1} />,
    step: "Step -02",
    title: "Validation for reliable results",
    description:
      "Thorough testing ensures every solution performs with accuracy and consistency. We don’t guess — we prove, refine.",
  },
  {
    icon: <Layout size={40} strokeWidth={1} />,
    step: "Step -03",
    title: "Engaging User Interface Designs",
    description:
      "Our interfaces are built to delight, guide, and convert effortlessly, visually appealing and intuitively crafted for every user.",
  },
  {
    icon: <Briefcase size={40} strokeWidth={1} />,
    step: "Step -04",
    title: "Reality with Expert Implementation",
    description:
      "From concept to execution, we bring ideas to life with precision. Our hands-on expertise ensures seamless, real-world implementation.",
  },
];

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

const ServicesProcess = () => {
  const [openIndex, setOpenIndex] = useState(null); // state for mobile card toggle

  const toggleMobileCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="text-white py-28 md:px-24 px-10"
      style={{ backgroundColor: "#000000" }}
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
          Simple process -
        </motion.div>

        <motion.h2
          className="text-left text-[60px] md:text-[90px] font-[400] leading-tight tracking-tight mb-16 pr-0 md:pr-8"
          custom={1}
          variants={riseUpVariant}
        >
          CLEAR, & EFFECTIVE
          <br />
          WORKFLOW
        </motion.h2>
      </motion.div>

      {/* Items */}
      <div className="md:max-w-[1300px] mt-8 mx-auto">
        {/* Desktop View */}
        <div className="hidden lg:flex gap-4 transition-all duration-700">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between flex-1 hover:flex-[1.5] transition-all duration-300 border border-neutral-900 p-7 rounded-md bg-[#000000] hover:bg-[#181818] h-[450px]"
            >
              <div>{step.icon}</div>
              <div>
                <span className="bg-white text-black px-3 py-1 rounded-full text-md font-medium">
                  {step.step}
                </span>
                <h3 className="mt-4 text-[25px] font-[500] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg text-neutral-500 leading-snug max-h-0 overflow-hidden opacity-0 translate-y-4 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex flex-col lg:hidden gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => toggleMobileCard(index)}
              className="border border-neutral-900 p-7 rounded-md flex flex-col justify-between bg-[#000000] hover:bg-[#181818] transition-all duration-500 cursor-pointer"
            >
              <div className="mb-6">{step.icon}</div>
              <div>
                <span className="bg-white text-black px-3 py-1 rounded-full text-md font-medium">
                  {step.step}
                </span>
                <h3 className="mt-4 text-[25px] font-[500] leading-snug">
                  {step.title}
                </h3>
                <p
                  className={`mt-4 text-md leading-snug overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? "max-h-40 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 translate-y-4"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;
