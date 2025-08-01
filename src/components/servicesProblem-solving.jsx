import React from "react";





const ServicesProblem = () => {
  return (
    <section className="text-white px-10 py-32" style={{ backgroundColor: "#000000" }}>
      {/* Header Section */}
      <div className="max-w-[1300px] mx-auto mb-20 flex flex-col md:flex-row md:justify-between gap-8">
        <div className="text-left text-[22px] md:text-[25px] mb-5 text-gray-100 tracking-tight" >
                  Problem-Solving -
        </div>
        <div className="md:w-[52%]"  >
                  <h1 className="text-3xl md:text-[42px] leading-[40px] md:leading-[56px] uppercase pb-8">  Unlocking Solutions with our <br /> Ingenious Thinking</h1>

                   <p className="text-neutral-500 text-md md:text-lg">We approach every challenge with curiosity, creativity, and strategic insight. By blending innovation with functionality, we develop solutions that truly make an impact.</p>
                 </div>
      </div>

      {/* Image Flexbox Grid */}
       <div className="flex flex-col md:flex-row min-h-[500px] max-w-[1300px] mx-auto bg-black text-white gap-5 ">
  {/* Left Text Box */}
  <div className="flex  flex-col justify-between max-w-[350px] bg-zinc-900 p-10 rounded-lg ">
    <h1 className="text-[24px] font-semibold mb-4">
      Track, Analyze, and Enhance Performance Effectively
    </h1>
    <p className="text-neutral-500 text-lg">
      We transform data into action by monitoring key metrics that drive growth. From engagement convert, every insight helps refine.
    </p>
  </div>

  {/* Image Box */}
  <div className="flex min-w-[350px] max-w-[600px] overflow-hidden pr-4 md:pr-0  rounded-lg ">
    <img
        src="https://cdn.prod.website-files.com/67c3581ddb64922e2ab65814/67fc05b272374329ae13f86a_medium-shot-smiley-man-recording-podcast_25811191.htm%23from_element%3Ddetail_alsolike.avif"
        alt="Podcast Man"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
      
  </div>

  {/* Right Text Box */}
  <div className="flex flex-col justify-between max-w-[350px] bg-zinc-900 p-10 rounded-lg">
    <h1 className="text-[24px] font-semibold mb-4">
      Dedicated to Providing Superior Customer Assistance
    </h1>
    <p className="text-neutral-500 text-lg">
      Our support goes beyond solving issues — it’s about building relationships. We’re here with timely responses, expert guidance.
    </p>
  </div>
</div>

    </section>
  );
};

export default ServicesProblem;
