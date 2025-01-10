"use client";
import React, { useState } from 'react';

const ToolsAndTechnologies = () => {
    const categories = [
        {
            title: "Frontend Web Development",
            tools: [
                { name: "HTML", image: "/html.png" },
                { name: "CSS", image: "/css.png" },
                { name: "Angular", image: "/angular.png" },
                { name: "Bootstrap", image: "/bootstrap.png" },
                { name: "Redux", image: "/redux.png" },
                { name: "React", image: "/react.png" },
                { name: "TypeScript", image: "/typescript.png" },
                { name: "MobX", image: "/mobx.png" },
                { name: "Vue.js", image: "/vuejs.png" },
                { name: "Tailwind CSS", image: "/tailwind.png" },
                { name: "Zustand", image: "/zustand.png" },

            ]
        },
        {
            title: "Backend Web Development",
            tools: [
                { name: "Node.js", image: "/nodejs.png" },
                { name: "Python", image: "/python.png" },
                { name: "Ruby", image: "/ruby.png" },
                { name: "Django", image: "/django.png" },
                { name: "restful", image: "/restful.png" },
                { name: "spring", image: "/spring.png" },
                { name: "graphql", image: "/graphql.png" },
                { name: "java", image: "/java.png" },
            ]
        },
        {
            title: "Database",
            tools: [
                { name: "PostgreSQL", image: "/postgresql.png" },
                { name: "MySQL", image: "/mysql.png" },
                { name: "Firebase", image: "/firebase.png" },
                { name: "MongoDB", image: "/mongodb.png" },
                { name: "Cassandra", image: "/cassandra.png" },]
        },
        {
            title: "DevOps and Infrastructure",
            tools: [
                { name: "Docker", image: "/docker.png" },
                { name: "Kubernetes", image: "/kubernetes.png" },
                { name: "GitHub Actions", image: "/githubactions.png" },
                { name: "CircleCI", image: "/circleci.png" },
                { name: "Jenkins", image: "/jenkins.png" },
                { name: "Google Cloud", image: "/googlecloud.png" },
                { name: "AWS", image: "/aws.png" },

            ]
        },

        {
            title: "QA Automation Testing",
            tools: [
                { name: "Selenium", image: "/selenium-tool.png" },
                { name: "Python", image: "/python-tool.png" },
                { name: "TypeScript", image: "/typescript-tool.png" },
                { name: "Cypress", image: "/cypress.png" },
                { name: "Appium", image: "/appium-tool.png" },
                { name: "Cucumber", image: "/cucumber.png" },
                { name: "Postman", image: "/postman.png" },
                { name: "JavaScript", image: "/javascript.png" },
                { name: "RestAssured", image: "/restassured.png" },
                { name: "Playwright", image: "/playwright-tool.png" },
                { name: "Java", image: "/java.png" },

            ]
        },

        {
            title: "Manual Testing",
            tools: [
                { name: "Testrail ", image: "/testrail.png" },
                { name: "QTest ", image: "/qtest.png" },
                { name: "DevOps ", image: "/devops.png" },
                { name: "Jira ", image: "/jira-tool.png" },
                { name: "Zephyr ", image: "/zephyr.png" },
                { name: "Bugzilla ", image: "/bugzilla.png" },
                { name: "Azure ", image: "/azure-tool.png" },

            ]
        },
        {
            title: "Performance Testing",
            tools: [
                { name: "JMeter ", image: "/jmeter.png" },
                { name: "Gatling ", image: "/gatling.png" },
                { name: "Loadrunner ", image: "/loadrunner.png" },
                { name: "k6 ", image: "/k6.png" },

            ]
        },
        {
            title: "Security Testing",
            tools: [
                { name: "OWASP ZAP ", image: "/owasp.png" },
                { name: "Burp Suite ", image: "/burp.png" },
                { name: "Metasploit ", image: "/metasploit.png" },
            ]
        },

    ];

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); // Default to the first category

    // Split categories into two groups
    const midIndex = Math.ceil(categories.length / 2);
    const firstHalfCategories = categories.slice(0, midIndex);
    const secondHalfCategories = categories.slice(midIndex);

    return (
        <div className="flex overflow-hidden flex-col items-center p-16 w-full max-md:px-5 max-md:max-w-full" id="tools-section">
            <div className="flex flex-col items-center w-full max-w-[1312px] max-md:max-w-full">
                <div className="text-6xl font-semibold tracking-tighter leading-none text-[#BB5A5A] max-md:max-w-full max-md:text-4xl">
                    Tools<span className="text-[#171717]"> & </span>Technologies
                </div>


                {/* Category Tabs - Two Rows */}
                <div className="flex flex-col gap-4 mt-8">
                    {/* First Row */}
                    <div className="flex bg-[#BB5A5A] bg-opacity-10 overflow-hidden text-[#171717] flex-wrap gap-1.5 justify-center items-center px-1.5 py-2 text-xl min-h-[67px] rounded-[10px] max-md:max-w-full">
                        {firstHalfCategories.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveCategoryIndex(index)} // Change active category on click
                                className={`cursor-pointer overflow-hidden px-6 py-3.5 my-auto font-medium tracking-tight rounded-[8px] ${activeCategoryIndex === index
                                    ? 'bg-[#BB5A5A] text-white' // Active tab styles
                                    : ' text-black'  // Inactive tab styles with black text
                                    }`}
                            >
                                {category.title}
                            </div>
                        ))}
                    </div>

                    {/* Second Row */}
                    <div className="flex bg-[#BB5A5A] bg-opacity-10 overflow-hidden text-[#171717] flex-wrap gap-1.5 justify-center items-center px-1.5 py-2 text-xl min-h-[67px] rounded-[10px] w-auto mx-auto">
                        {secondHalfCategories.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveCategoryIndex(index + midIndex)} // Add midIndex to make it unique for second half
                                className={`cursor-pointer overflow-hidden px-6 py-3.5 my-auto font-medium tracking-tight rounded-[8px] ${activeCategoryIndex === index + midIndex
                                    ? 'bg-[#BB5A5A] text-white' // Active tab styles
                                    : ' text-black'  // Inactive tab styles with black text
                                    }`}
                            >
                                {category.title}
                            </div>
                        ))}
                    </div>


                </div>

            </div>

            {/* Tools Display for the Active Category */}
            <div className="flex flex-col mt-16 text-lg leading-none text-center text-zinc-800 mx-auto max-w-6xl max-md:mt-10 justify-center items-center ">
                <div className="flex flex-wrap gap-20 items-center justify-center w-full max-md:max-w-full">
                    {categories[activeCategoryIndex].tools.map((tool, idx) => (
                        <div key={idx} className="flex flex-col shrink items-center w-[88px]">
                            <img
                                loading="lazy"
                                src={tool.image}
                                className="object-contain rounded-xl items-center justify-center aspect-square w-[88px]"
                                alt={tool.name}
                            />
                            <div className="mt-2.5 text-sm leading-7 max-w-[100px] whitespace-nowrap">{tool.name}</div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default ToolsAndTechnologies;
