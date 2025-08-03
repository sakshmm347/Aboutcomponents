import React from "react";
import { motion } from "framer-motion";


const images = [
  "https://cdn.prod.website-files.com/67c3581ddb64922e2ab65814/67dc04be0470e5703fc3fba2_Rectangle%201000001697.avif",
  "https://cdn.prod.website-files.com/67c3581ddb64922e2ab65814/67dc04beb195025aaa652a8c_image.avif",
  "https://cdn.prod.website-files.com/67c3581ddb64922e2ab65814/6804d5c4fdaea6f97ce0548e_sdf.avif",
  "https://cdn.prod.website-files.com/67c3581ddb64922e2ab65814/67dc04b84cc8b58dabb11fc5_man-wearing-eyeglasses-and-headphones-beside-smiling-man-AkftcHujUmk.avif",
  "https://cdn.prod.website-files.com/67c3581ddb64922e2ab65814/67dc04b7e5b186e043d69969_man-holding-turned-on-ipad-in-front-of-turned-off-macbook-air-qeij_dhDhGg.avif",
];

// Text rise up + fade in
const textRiseVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 1) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

// Curtain overlay drop (revealing image downward)
const curtainVariants = {
  hidden: { y: "0%" },
  visible: (i = 1) => ({
    y: "100%",
    transition: {
      delay: 0.5 + i * 0.15,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const Aboutheader = () => {
  return (
    <section className="text-white px-10 py-32" style={{ backgroundColor: "#181818" }}>
      {/* Header Section */}
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <motion.h2
            className="text-3xl md:text-[42px] leading-[40px] md:leading-[56px] uppercase"
            custom={0}
            variants={textRiseVariant}
            initial="hidden"
            animate="visible"
          >
            At the heart of<br /> everything we create is<br />
            a deep passion for<br /> purposeful design
          </motion.h2>
        </div>

        <div className="md:w-1/2 md:ml-52 md:pr-5">
          <motion.p
            className="text-[20px] font-semibold md:font-normal md:text-2xl mb-4"
            custom={1}
            variants={textRiseVariant}
            initial="hidden"
            animate="visible"
          >
            Founded in 2017 -
          </motion.p>
          <motion.p
            className="text-neutral-500 text-md md:text-xl leading-relaxed "
            custom={2}
            variants={textRiseVariant}
            initial="hidden"
            animate="visible"
          >
            We’re not just here to build visuals — we’re here to bring visions to life,
            empower bold ideas, and make brands unforgettable. Every pixel, word, and
            interaction is crafted with care, intention, and soul. Because we believe when
            passion leads, impact follows.
          </motion.p>
        </div>
      </div>

      {/* Image Flexbox Grid */}
      <div className="max-w-[1300px] mx-auto mt-20 flex flex-wrap gap-4">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className={`  md:w-[calc(50%-8px)] h-fit overflow-hidden rounded-lg ${
              index === 1 ? "md:mt-17" : ""
            }`}
            style={{ position: "relative" }}
          >
            <img
              src={imgSrc}
              alt={`Gallery image ${index + 1}`}
              className={` transition-transform duration-400 hover:scale-110 rounded-lg ${
                index === 4 ? "md:ml-auto md:w-[48%]" : ""
              }`}
            />
            {/* Curtain Overlay */}
            <motion.div
              custom={index}
              variants={curtainVariants}
              initial="hidden"
              animate="visible"
              style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#181818",
                zIndex: 2,
                borderRadius: "0.5rem",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutheader;
