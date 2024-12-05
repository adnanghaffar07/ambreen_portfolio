import React from "react";
import Image from "next/image";

const InfoSection = () => {
    // Define the content for the boxes
    const boxes = [
        {
            imageSrc: "/work1.png",
            heading: "Automation Engineer",
            description: "Involved in test cases review by development team, product management and modified the test cases based on their feedback.",
            borderColor: "#BB5A5A", // Border color for this box
        },
        {
            imageSrc: "/work2.png",
            heading: "QA Engineer",
            description: "Analyzed business requirements, documented business requirements specifications, wrote Test Plans, Test Cases.",
            borderColor: "#BB5A5A", // Border color for this box
        },
        {
            imageSrc: "/work3.png",
            heading: "Software Developer",
            description: "Create automated test frameworks, design and implementation of test cases, and writing code to improve the overall testability of software",
            borderColor: "#BB5A5A", // Border color for this box
        },
    ];

    return (
        <section id="services" className="px-8 py-20 bg-white max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-[#171717]">My <span className="text-[#BB5A5A]">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        className="border-t-4 border-[#BB5A5A] p-6 bg-white rounded-lg flex flex-col items-start bg-[#FBFBFB] shadow-lg"
                    >
                        <Image
                            src={box.imageSrc}
                            alt={box.heading}
                            width={40}
                            height={40}
                            className="object-contain mb-4"
                        />
                        <h3 className="text-xl text-left font-semibold text-[#000000] mb-2">{box.heading}</h3>
                        <p className="text-left text-[#7F7F7F]">{box.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfoSection;
