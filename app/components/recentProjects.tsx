"use client";
import React, { useState } from 'react';

const RecentProjects = () => {
    // Define the project categories and the respective projects
    const categories = [
        {
            title: "All Projects",
            projects: [
                {
                    name: "QA Manual Testing",
                    image: "/all1.png",
                },
                {
                    name: "QA Automation",
                    image: "/all2.png",
                },
                {
                    name: "QA Automation",
                    image: "/all3.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/all4.png",
                },
            ],
        },
        {
            title: "QA Manual Testing",
            projects: [
                {
                    name: "QA Manual Testing",
                    image: "/qa1.png",
                },
                {
                    name: "QA Automation",
                    image: "/all2.png",
                },
                {
                    name: "QA Automation",
                    image: "/all3.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/qa2.png",
                },
            ],
        },
        {
            title: "QA Automation",
            projects: [
                {
                    name: "QA Manual Testing",
                    image: "/all2.png",
                },
                {
                    name: "QA Automation",
                    image: "/qa1.png",
                },
                {
                    name: "QA Automation",
                    image: "/qa2.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/auto1.png",
                },
            ],
        },
    ];

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); // Set default category as All Projects

    return (
        <div id='services' className="flex overflow-hidden flex-col items-center p-16 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center w-full max-w-[1312px] max-md:max-w-full">
                <div className="text-6xl font-semibold tracking-tighter leading-none text-[#00A5B6] max-md:max-w-full max-md:text-4xl">
                    <span className="text-[#171717]">My</span> Recent Projects
                </div>
                {/* Tabs for Categories */}
                <div className="flex overflow-hidden flex-wrap gap-2.5 justify-center items-center px-1.5 py-2 mt-8 text-xl bg-gray-500 bg-opacity-10 min-h-[67px] rounded-[50px] text-neutral-900 max-md:max-w-full">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveCategoryIndex(index)} // Switch categories on click
                            className={`cursor-pointer overflow-hidden px-8 py-3.5 my-auto font-medium tracking-tight rounded-[60px] min-h-[54px] ${activeCategoryIndex === index
                                    ? 'bg-[#00A5B6] text-white' // Active tab styles
                                    : 'bg-transparent text-black' // Inactive tab styles
                                }`}
                        >
                            {category.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Display projects based on the active category */}
            <div className="flex flex-col mt-16 max-w-full text-xl leading-tight text-white w-[1168px] max-md:mt-10">
                <div className="flex flex-wrap gap-7 items-start w-full">
                    {categories[activeCategoryIndex].projects.map((project, idx) => (
                        <div key={idx} className="flex flex-col w-[48%] shrink rounded-sm min-w-[240px] max-md:w-full">
                            <div className="flex overflow-hidden flex-col w-full rounded-sm border-solid border-[0.834px] border-orange-200 border-opacity-10 max-md:max-w-full">
                                <div className="flex relative flex-col w-full max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src={project.image}
                                        className="object-cover"
                                        alt={project.name}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default RecentProjects;
