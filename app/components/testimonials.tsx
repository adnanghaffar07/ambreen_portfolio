"use client";
import React, { useState } from "react";

const Testimonials = () => {
    const experiences = [
        {
            timeframe: "1",
            heading: "Strategic Leadership",
            description: "Strategic Leadership is the Process of Growing up of the Business and CodeAutomation.ai and Developing the Market Place and many people are satisfied.",
        },
        {
            timeframe: "2",
            heading: "Productive Development and Innovation",
            description: "Led the Creation of The AI Code Generator Cutting, Client Development Time by 40% and Lanuched innovative, User Friendly Products.",
        },
        {
            timeframe: "3",
            heading: "Market Expansion",
            description: "Drove Global Expansion into Asia And Europe, Diversified revenue And Formed Strategic industry Partnerships.",
        },
        {
            timeframe: "4",
            heading: "Team Building and Leadership",
            description: "Grew the team from 10 to 200, fostering a culture of innovation and launching a program to develop future leaders successfully.",
        },
        {
            timeframe: "5",
            heading: "Financial Management & Fundraising",
            description: "Raised over $50million in funding and established strong financial practices , significantly increasing profitability.",
        },
        {
            timeframe: "6",
            heading: "Industry Leadership & Recognition",
            description: "Achieved recognition as an industry  thought leader and received awards for  innovation and leadership.",
        },
        // Add more experiences as needed...
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;  // 3 items per page
    const totalItems = experiences.length;  // Total number of items
    const pageCount = Math.ceil(totalItems / itemsPerPage);  // Total pages based on items per page

    const handleNext = () => {
        if (currentIndex < pageCount - 1) {
            setCurrentIndex(currentIndex + 1);  // Move to the next page
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);  // Move to the previous page
        }
    };


    return (
        <div
            id="professional"
            className="relative flex flex-col items-center md:pr-16 md:pl-16 w-full bg-center  py-10 md:py-16 max-md:max-w-full"
        >
            <div className="max-w-full text-3xl md:text-5xl text-center md:leading-50px text-black max-w-lg">
                <span className="font-bold text-black">Key <span className="text-[#BB5A5A]">Achievements</span></span>
            </div>
            <div className="relative w-full max-w-6xl mx-auto mt-16 ">
                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-6">
                    {experiences
                        .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
                        .map((exp, index) => (
                            <div
                                key={index}
                                className="flex flex-col self-stretch py-7  border-b-4 border-[#BB5A5A] h-full my-auto rounded-xl backdrop-blur-[7.5px] bg-[#EACEB4] bg-opacity-30 md:min-w-[204px] w-full transition-all duration-500 ease-in-out"
                            >
                                <div className="flex flex-row">
                                    <div className="self-start ml-6 px-5 py-2.5 bg-white shadow-xl rounded-lg text-3xl text-[#BB5A5A] font-bold max-md:ml-2.5">
                                        {exp.timeframe}
                                    </div>

                                </div>


                                <div className="flex flex-col px-6 mt-6 text-black leading-6 max-md:px-5">
                                    <h2 className="text-2xl font-semibold mb-4">
                                        {exp.heading}
                                    </h2>
                                    <p className="text- font-light">
                                        {exp.description}
                                    </p>

                                </div>

                            </div>
                        ))}
                </div>

                {/* Mobile layout */}
                <div className="grid md:hidden gap-4 px-6">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col self-stretch py-7 my-auto rounded-xl  border-b-4 border-[#BB5A5A] bg-[#EACEB4] bg-opacity-30 min-w-[240px] w-full transition-all duration-500 ease-in-out"
                        >
                            <div className="flex flex-row">
                                <div className="self-start ml-6 px-5 py-2.5 bg-white shadow-xl rounded-lg text-3xl text-[#BB5A5A] font-bold max-md:ml-2.5">
                                    {exp.timeframe}
                                </div>

                            </div>


                            <div className="flex flex-col px-6 mt-6 text-black leading-6 max-md:px-5">
                                <h2 className="text-2xl font-semibold mb-4">
                                    {exp.heading}
                                </h2>
                                <p className="text- font-light">
                                    {exp.description}
                                </p>

                            </div>

                        </div>
                    ))}
                </div>

                {/* Arrows */}
                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 w-full mx-auto py-1 bg-[#BB5A5A] bg-opacity-15 mt-6 rounded-full hidden md:flex md:w-[80px]">
                    {Array.from({ length: pageCount }).map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index
                                ? "bg-[#BB5A5A] w-10 opacity-100"  // Active dot: cylindrical
                                : "bg-[#BB5A5A] w-3 opacity-15"   // Inactive dot: small and transparent
                                }`}
                        />
                    ))}
                </div>
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`hidden md:block absolute left-[-32px] xl:left-[-70px] top-1/2 transform -translate-y-1/2 z-50 rounded-full w-12 h-12 flex items-center justify-center transition-opacity ${currentIndex === 0
                        ? 'bg-[#BB5A5A] opacity-50 cursor-not-allowed'
                        : 'bg-[#BB5A5A] opacity-100 hover:opacity-80'
                        }`}
                >
                    <img src="/arrow-left.png" alt="Previous" className="mx-auto" />
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex + itemsPerPage >= experiences.length}
                    className={`hidden md:block absolute right-[-32px] xl:right-[-70px] top-1/2 transform -translate-y-1/2 z-50 rounded-full w-12 h-12 flex items-center justify-center transition-opacity ${currentIndex + itemsPerPage >= experiences.length
                        ? 'bg-[#BB5A5A] opacity-50 cursor-not-allowed'
                        : 'bg-[#BB5A5A] opacity-100 hover:opacity-80'
                        }`}
                >
                    <img src="/arrow-right.png" alt="Next" className="mx-auto" />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
