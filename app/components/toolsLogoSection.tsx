"use client"
import React from "react";
import Image from "next/image";

const ToolLogosSection = () => {
  const logos = [
    { src: "/githubCLI.png", alt: "githubCLI" },
    { src: "/junit.png", alt: "junit" },
    { src: "/selenium.png", alt: "selenium" },
    { src: "/playwright.png", alt: "playwright" },
    { src: "/jira.png", alt: "jira" },
    { src: "/azure.png", alt: "azure" },
    { src: "/appium.png", alt: "appium" },
  ];

  return (
    <section className="h-auto xl:h-[224px] py-4  py-4 px-2 bg-[#EACEB4] bg-opacity-30 flex items-center overflow-hidden">
      {/* Outer container for scrolling */}
      <div className="relative w-full flex items-center overflow-hidden">
        {/* Logos container with two sets of logos */}
        <div className="tool-logos-container flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={index} className="logo-item w-16  xl:w-[140px] h-16 xl:h-[140px]  bg-[#EACEB4] bg-opacity-30 border border-2 border-[#EACEB4] rounded-[16px] xl:rounded-[26px] flex items-center justify-center mx-8">
              <Image src={logo.src} alt={logo.alt} width={76} height={76} className="w-[30px] xl:w-[76px] h-[30px] xl:h-[76px]" />
            </div>
          ))}
          {/* Second set of logos (duplicate) */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-item w-16  xl:w-[140px] h-16 xl:h-[140px]  bg-[#EACEB4] bg-opacity-30 border border-2 border-[#EACEB4] rounded-[16px] xl:rounded-[26px] flex items-center justify-center mx-8">
              <Image src={logo.src} alt={logo.alt} width={76} height={76} className="w-[30px] xl:w-[76px] h-[30px] xl:h-[76px]" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Apply the smooth scrolling animation */
        .tool-logos-container {
          display: flex;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Move the container by 50% of its width */
          }
        }
      `}</style>
    </section>
  );
};

export default ToolLogosSection;
