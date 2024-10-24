"use client";
import React, { useState } from "react";

const ProfessionalExperience = () => {
    const experiences = [
        {
            company: "LighthouseAI",
            description: "Led API testing efforts using Postman and RestAssured to validate seamless integration between various microservices and back-end systems.",
            details: "Collaborated closely with developers to debug issues, analyze logs, and resolve API failures, ensuring system reliability and performance.",
        },
        {
            company: "Pexip",
            description: "Developed detailed test plans and scripts based on functional and technical specifications for both manual and automated testing.",
            details: "Ensured comprehensive coverage of key features and edge cases to deliver high-quality software.",
        },
        {
            company: "Vet Scout",
            description: "Integrated Jenkins with GitHub to automate build and testing processes, enabling continuous integration and delivery pipelines.",
            details: "SConfigured nightly builds and set up notifications to continuously monitor the health and stability of applications across multiple environments.",
        },
        {
            company: "Fundthrough",
            description: "Worked in tandem with the DevOps team to deploy and manage test environments, leveraging Docker and Kubernetes to ensure efficient infrastructure management.",
            details: "Maintained stable, reliable test environments to produce consistent and accurate test results across the development lifecycle.",
        },
        {
            company: "Make with Tech",
            description: "Developed performance testing scripts using JMeter to simulate real-world user scenarios and identify potential bottlenecks in the application.",
            details: "Analyzed test results and provided actionable insights to the development team for performance optimization."
        },
        {
            company: "Apics",
            description: "Implemented end-to-end automation scripts using Cypress to validate web applications across various browsers.",
            details: "Integrated Cypress with CI/CD pipelines for automated regression testing and ensured that new features were thoroughly tested before release."
        },
        {
            company: "Hearo",
            description: "Conducted mobile application testing using Appium, focusing on both Android and iOS platforms.",
            details: "Developed test scripts to validate core functionalities, UI elements, and user experience across different mobile devices and OS versions."
        },
        {
            company: "Site-Source",
            description: "Collaborated with cross-functional teams, including developers, product managers, and UX designers, to ensure all testing requirements were aligned with business objectives.",
            details: "Participated in daily stand-ups, sprint planning, and retrospectives to track progress and resolve issues in a timely manner."
        }
    ];


    
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < experiences.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div
            id="professional"
            className="relative flex flex-col items-center pr-16 pl-16 w-full bg-cover bg-center min-h-[738px] rounded-[60px] max-md:px-5 py-10 md:py-24 max-md:max-w-full"
            style={{ backgroundImage: 'url("/My Services.png")' }}
        >
            <div className="max-w-full text-5xl text-center tracking-tighter leading-none text-gray-50 w-[1299px] max-md:max-w-full max-md:text-4xl">
                <span className="font-medium">Professional </span>
                <span className="font-medium text-[#00A5B6]">Experience</span>
            </div>

            {/* Wrap the content and arrows in a container */}
            <div className="relative w-full max-w-[1440px] mt-24 h-full">
                {/* On desktop, show paginated 4 items */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 h-full">
                    {experiences
                        .slice(currentIndex, currentIndex + itemsPerPage)
                        .map((exp, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col self-stretch py-7 h-full my-auto rounded-3xl border border-white border-solid backdrop-blur-[7.5px] bg-white bg-opacity-10 min-w-[240px] w-full transition-all duration-500 ease-in-out"
                            >
                                <div className="self-start ml-6 text-xl text-white  font-medium max-md:ml-2.5">
                                    {exp.company}
                                </div>
                                <div className="shrink-0 mt-6 h-px border border-solid border-white border-opacity-50" />
                                <div className="flex flex-col px-6 mt-6 text-white leading-6 max-md:px-5">
                                    <div>{exp.description}</div>
                                    <div className="mt-2.5 w-[250px]">{exp.details}</div>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Pagination Dots */}
                <div className="hidden md:flex absolute -bottom-20 left-1/2 transform -translate-x-1/2 gap-2 items-center z-0 px-4 py-2.5 rounded-xl border border-solid bg-white bg-opacity-10 border-white border-opacity-10">
                    {[...Array(Math.ceil(experiences.length / itemsPerPage))].map((_, idx) => (
                        <div
                            key={idx}
                            className={`flex shrink-0 self-stretch my-auto w-9 h-2 rounded ${currentIndex / itemsPerPage === idx ? 'bg-white' : 'bg-white bg-opacity-40'
                                }`}
                        />
                    ))}
                </div>

                {/* Arrow Buttons */}
                {currentIndex + itemsPerPage < experiences.length && (
                    <button
                        onClick={handleNext}
                        className="hidden md:flex absolute right-[-32px] top-1/2 transform -translate-y-1/2 z-50 bg-[#00A5B6] text-white rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img
                            loading="lazy"
                            src="/arrow-right.png"
                            alt="Next"
                        />
                    </button>
                )}

                {currentIndex > 0 && (
                    <button
                        onClick={handlePrev}
                        className="hidden md:flex absolute left-[-32px] top-1/2 transform -translate-y-1/2 z-50 bg-[#00A5B6] text-white rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img
                            loading="lazy"
                            src="/arrow-left.png"
                            alt="Previous"
                        />
                    </button>
                )}
            </div>

            {/* On mobile, show all 8 items */}
            <div className="hidden max-md:flex flex-wrap gap-8 justify-center items-center">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col self-stretch py-7 my-auto rounded-3xl border border-white border-solid backdrop-blur-[7.5px] bg-white bg-opacity-10 min-w-[240px] w-[298px] transition-all duration-500 ease-in-out"
                    >
                        <div className="self-start ml-6 text-xl text-white  font-medium max-md:ml-2.5">
                            {exp.company}
                        </div>
                        <div className="shrink-0 mt-6 h-px border border-solid border-white border-opacity-50" />
                        <div className="flex flex-col px-6 mt-6 text-white leading-6 max-md:px-5">
                            <div>{exp.description}</div>
                            <div className="mt-2.5 w-[250px]">{exp.details}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfessionalExperience;
