"use client";
import React, { useState } from 'react';

const ToolsAndTechnologies = () => {
    const categories = [
        {
            title: "Unit & Automation Testing Framework",
            tools: [
                { name: "Test NG", image: "/unit1.png" },
                { name: "JUnit", image: "/unit2.png" },
                { name: "NUnit", image: "/unit3.png" },
                { name: "PHP Unit", image: "/unit4.png" },
                { name: "Keyword Driven", image: "/unit5.png" },
                { name: "Data-Driver Framework", image: "/unit6.png" },
                { name: "Hybrid Framework", image: "/unit7.png" },

            ]
        },
        {
            title: "Testing",
            tools: [
                { name: "Selenium", image: "/testing1.png" },
                { name: "Cypress", image: "/testing2.png" },
                { name: "Playwright", image: "/testing3.png" },
            ]
        },
        {
            title: "Testing Frameworks",
            tools: [
                { name: "Selenium", image: "/testfram1.png" },
                { name: "Cypress", image: "/testfram2.png" },
            ]
        },
        {
            title: "Database",
            tools: [
                { name: "DBUnit", image: "/db1.png" },    
                { name: "SQL Test", image: "/db2.png" },        
                { name: "Liquibase", image: "/db3.png" },        
                { name: "PgTAP", image: "/db4.png" },                 ]
        },
        {
            title: "CI/CD Tools",
            tools: [
                { name: "Jenkins", image: "/cicd1.png" },    
                { name: "GitHub", image: "/cicd2.png" },    
                { name: "GitLAb", image: "/cicd3.png" },    
                { name: "CircleCI", image: "/cicd4.png" },    
    
                ]
        },
        
        {
            title: "Management Tools",
            tools: [
                { name: "Jira ", image: "/manag1.png" },     
                { name: "QTest ", image: "/manag2.png" },     
                { name: "Buildkite ", image: "/manag3.png" },     
                { name: "Azure ", image: "/manag4.png" },     

                      ]
        },
     
    ];

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); // Default to the first category

    return (
        <div className="flex overflow-hidden flex-col items-center p-16 w-full max-md:px-5 max-md:max-w-full" id="tools-section">
            <div className="flex flex-col items-center w-full max-w-[1312px] max-md:max-w-full">
                <div className="text-6xl font-semibold tracking-tighter leading-none text-[#00A5B6] max-md:max-w-full max-md:text-4xl">
                    Tools<span className="text-[#171717]"> & </span>Technologies
                </div>

                {/* Category Tabs */}
                <div className="flex overflow-hidden text-[#171717] flex-wrap gap-1.5 justify-center items-center px-1.5 py-2 mt-8 text-xl bg-gray-500 bg-opacity-10 min-h-[67px] rounded-[50px] text-neutral-900 max-md:max-w-full">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveCategoryIndex(index)} // Change active category on click
                            className={`cursor-pointer overflow-hidden px-6 py-3.5 my-auto font-medium tracking-tight rounded-[60px] ${
                                activeCategoryIndex === index
                                    ? 'bg-[#00A5B6] text-white' // Active tab styles
                                    : ' text-black'  // Inactive tab styles with black text
                            }`}
                        >
                            {category.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools Display for the Active Category */}
            <div className="flex flex-col mt-16 max-w-full text-lg leading-none text-center text-zinc-800 w-[612px] max-md:mt-10">
                <div className="flex flex-wrap gap-20 items-start w-full max-md:max-w-full">
                    {categories[activeCategoryIndex].tools.map((tool, idx) => (
                        <div key={idx} className="flex flex-col grow shrink items-center w-[88px]">
                            <img
                                loading="lazy"
                                src={tool.image}
                                className="object-contain rounded-xl aspect-square w-[88px]"
                                alt={tool.name}
                            />
                            <div className="mt-2.5 leading-7 max-w-[100px]">{tool.name}</div>
                            
                        </div>
                        
                    ))}
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default ToolsAndTechnologies;
