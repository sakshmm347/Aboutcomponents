import React from "react";
import { motion } from "framer-motion";

const advantages = [
  {
    id: "01",
    title: "DISCOVERY & PLANNING",
    description:
      "We understand your goals, audience, and competitors to define a clear project scope.",
  },
  {
    id: "02",
    title: "WIREFRAMES & ARCHITECTURE",
    description:
      "We map out user journeys and create wireframes or app flows.",
  },
  {
    id: "03",
    title: "UI DEVELOPMENT & CODING",
    description:
      "Pixel-perfect responsive UI using React, Vue, HTML/CSS, or mobile frameworks like Flutter.",
  },
  {
    id: "04",
    title: "BACKEND & DATABASE",
    description:
      "Secure APIs and scalable backends using Node.js, Firebase, PHP, or Python.",
  },
  {
    id: "05",
    title: "TESTING",
    description:
      "End-to-end testing for bugs, responsiveness, and performance.",
  },
  {
    id: "06",
    title: "LAUNCH & DEPLOYMENT",
    description:
      "We go live with CDN, domain setup, HTTPS, and real-time monitoring.",
  },
  {
    id: "07",
    title: "SUPPORT & OPTIMIZATION",
    description:
      "We provide post-launch care, improvements, and speed enhancements.",
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

export default function WebAppDevelopment() {
  return (
    <div className="bg-black text-white min-h-screen font-sans px-10  md:px-20 py-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-5xl md:text-[90px]  text-left md:text-center tracking-tight pb-5 md:pb-15">
          WEB & APP DEVELOPMENT
        </h1>
      </header>

      {/* Hero Image with CURTAINS UP Animation */}
      <div className="flex justify-center items-start overflow-hidden max-w-[1300px] mx-auto max-h-full rounded-lg my-10 relative">
        <img
          src="https://cdn.prod.website-files.com/67c3581ddb64922e2ab65836/67dc7e513eba6c72e8855837_image%20(1)-p-2000.webp"
          alt="Tablet Work Session"
          className="rounded-lg w-[400px] h-[250px] object-cover md:w-full  md:h-full  md:object-cover hover:scale-115   duration-400"
        />
        {/* Curtains Up Animation */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex">
          {/* Left curtain */}
          <motion.div
            initial={{ height: "100%" }}
            animate={{ height: "0%" }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="bg-black w-1/2 absolute left-0 bottom-0 rounded-bl-xl rounded-tl-xl"
            style={{}}
          />
          {/* Right curtain */}
          <motion.div
            initial={{ height: "100%" }}
            animate={{ height: "0%" }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="bg-black w-1/2 absolute right-0 bottom-0 rounded-br-xl rounded-tr-xl"
            style={{}}
          />
        </div>
      </div>

      {/* Info Bar */}
      <div className="flex justify-between text-sm md:text-2xl max-w-6xl mx-auto mb-12  ">
        <span>India</span>
        <span>2025</span>
        <span>Weularity</span>
        <span>Development</span>
      </div>
       
       
       <div>
        <div>
        </div>
      </div>
        

      {/* Development Steps */}
      
      <section
            className="text-white py-20  md:px-24 "
           
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
                Simple Steps  -
              </motion.div>
      
              <motion.h2
                className="text-left text-5xl md:text-[90px] font-[400] leading-tight  mb-8   md:mb-16 pr-0 md:pr-8"
                custom={1}
                variants={riseUpVariant}
              >
                HOW WE BRING
                <br />
                 IDEAS ONLINE
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
    </div>
  );
}
