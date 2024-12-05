import React from "react";
import Image from "next/image";

const ToolLogosSection = () => {
  // Manually define the tool logos array
  const logos = [
    { src: "/githubCLI.png", alt: "githubCLI" },
    { src: "/junit.png", alt: "junit" },
    { src: "/selenium.png", alt: "selenium" },
    { src: "/playwright.png", alt: "playwright" },
    { src: "/jira.png", alt: "jira" },
    { src: "/azure.png", alt: "azure" },
    { src: "/appium.png", alt: "appium" },
    // Add more tools as needed
  ];

  return (
    <section className="h-auto xl:h-[224px] py-4 px-2 bg-[#EACEB4] bg-opacity-30 flex items-center overflow-hidden">
      <div className="w-full flex flex-wrap justify-center 2xl:gap-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-16  xl:w-[140px] h-16 xl:h-[140px] bg-[#EACEB4] bg-opacity-30 border border-2 border-[#EACEB4] rounded-[16px] xl:rounded-[26px] flex items-center justify-center mx-4 my-2 md:my-0 flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={96}
              height={96}
              className="h-[30px] xl:h-[76px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolLogosSection;
