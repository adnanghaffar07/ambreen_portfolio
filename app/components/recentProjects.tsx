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
                    image: "/recent1.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent4.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent3.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent2.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent5.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent6.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent7.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent8.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent9.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent10.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent11.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent12.png",
                },
            ],
        },
        {
            title: "QA Automation",
            projects: [
                {
                    name: "QA Manual Testing",
                    image: "/recent11.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent5.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent7.png",
                },

                {
                    name: "QA Manual Testing",
                    image: "/recent1.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent4.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent9.png",
                },

            ],
        },
        {
            title: "QA Manual Testing",
            projects: [
                {
                    name: "QA Automation",
                    image: "/recent12.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent10.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent7.png",
                },
                {
                    name: "QA Manual Testing",
                    image: "/recent3.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent2.png",
                },
                {
                    name: "QA Automation",
                    image: "/recent6.png",
                },

            ],
        },
    ];

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); // Set default category as All Projects
    const [currentPage, setCurrentPage] = useState(1); // Pagination state
    const itemsPerPage = 3; // Items per page

    // Calculate the number of pages for the current category
    const totalPages = Math.ceil(categories[activeCategoryIndex].projects.length / itemsPerPage);

    // Get the projects for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProjects = categories[activeCategoryIndex].projects.slice(startIndex, startIndex + itemsPerPage);

    // Handle Previous button click
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle Next button click
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div id='experience' className="flex overflow-hidden flex-col items-center p-16 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center w-full max-w-[1312px] max-md:max-w-full">
                <div className="text-6xl font-semibold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
                    <span className="font-medium">My </span>
                    <span className="font-semibold text-[#BB5A5A]">Professional Experience</span>
                </div>
                {/* Tabs for Categories */}
                <div className="flex overflow-hidden flex-wrap gap-2.5 justify-center items-center px-1.5 py-2 mt-8 text-xl bg-gray-500 bg-opacity-10 min-h-[67px] rounded-[10px] text-neutral-900 max-md:max-w-full">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setActiveCategoryIndex(index);
                                setCurrentPage(1); // Reset to first page when switching category
                            }}
                            className={`cursor-pointer overflow-hidden px-8 py-3.5 my-auto font-medium tracking-tight rounded-[10px] min-h-[54px] ${activeCategoryIndex === index
                                ? 'bg-[#BB5A5A] text-white' // Active tab styles
                                : 'bg-transparent text-black' // Inactive tab styles
                                }`}
                        >
                            {category.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Display projects based on the active category with pagination */}
            <div className="flex flex-col mt-16 max-w-full text-xl leading-tight text-white max-w-7xl mx-auto max-md:mt-10">
                <div className="flex flex-wrap gap-7 items-center justify-center w-full">
                    {paginatedProjects.map((project, idx) => (
                        <div key={idx} className="flex flex-col w-[25%] shrink rounded-sm max-md:w-full">
                            <div className="flex overflow-hidden flex-row w-full max-md:max-w-full">
                                <div className="flex relative flex-row w-full mx-auto max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src={project.image}
                                        className="object-cover rounded-3xl"
                                        alt={project.name}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-6 gap-4">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`flex justify-center items-center px-2 py-2 rounded-full bg-white text-[#BB5A5A] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#BB5A5A] hover:text-white'}`}
                        >
                            {/* Left Arrow Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"  // Set fill to none to use stroke
                                stroke="currentColor" // Use currentColor to inherit text color
                                strokeWidth="1" // Set a stroke width to make the arrows bolder
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15.75 4.5a.75.75 0 00-1.06 0L7.47 11.72a.75.75 0 000 1.06l7.22 7.22a.75.75 0 101.06-1.06L8.53 12l7.22-7.22a.75.75 0 000-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`flex justify-center items-center px-2 py-2 rounded-full bg-white text-[#BB5A5A] ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#BB5A5A] hover:text-white'}`}
                        >
                            {/* Right Arrow Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"  // Set fill to none to use stroke
                                stroke="currentColor" // Use currentColor to inherit text color
                                strokeWidth="1" // Set a stroke width to make the arrows bolder
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.25 4.5a.75.75 0 011.06 0l7.22 7.22a.75.75 0 010 1.06l-7.22 7.22a.75.75 0 11-1.06-1.06L15.47 12 8.25 4.78a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>


                    </div>

                )}
            </div>
        </div>
    );
};

export default RecentProjects;
