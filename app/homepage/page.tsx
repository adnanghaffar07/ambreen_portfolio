import React from 'react'
import ProfessionalExperience from '../components/pagination'
import ToolsAndTechnologies from '../components/tools'
import RecentProjects from '../components/recentProjects'
import ButtonScrollToSection from '../components/buttonScroll';
import ProjectDiscussionForm from '../components/contactForm';
import Link from 'next/link';

const Homepage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full max-md:max-w-full">
                {/* HERO SECTION */}
                <div id='home' className="px-6 flex flex-col lg:flex-row relative gap-10 justify-center w-full min-h-[846px] text-[#171717] mx-auto items-center max-w-[1500px]">
                    <div className="flex absolute z-0 flex-col items-center text-center min-w-[240px] top-[37px] max-w-5xl mx-auto max-md:relative max-md:top-auto max-md:my-5">
                        <div className="flex z-0 flex-col items-center self-center mx-auto max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f6d05037b2c9df3d167a957135fccbc628f82e9b5b5dbabd4ca261e8d0e3bdf?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                                className="object-contain max-w-full rounded-none aspect-[1.95] w-[125px] max-md:w-[80px]"
                            />
                            <div className="mt-2.5 text-8xl tracking-tighter leading-none max-md:text-4xl">
                                <span className="font-semibold">I’m </span>
                                <span className="font-semibold text-[#00A5B6]">Ambreen</span>
                                <span className="font-semibold">!</span>
                            </div>
                            <div className="mt-2.5 text-6xl font-semibold tracking-tighter leading-[56px] max-md:text-4xl max-md:leading-10">
                                Lead Automation Software Quality Assurance Engineer
                                <br />
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94e7568702c70987619134468d6626d120852f52e0810b70ca2194ee8575b538?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                            className="object-contain absolute -bottom-3 z-0 aspect-[0.98] h-[88px] left-[-10px] max-md:hidden"
                        />
                    </div>

                    <div className="flex absolute z-0 flex-col text-xl font-medium leading-8 bottom-[69px] md:left-[100px] min-w-[240px] max-w-[350px] max-md:relative max-md:bottom-auto max-md:left-auto max-md:w-full max-md:text-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f70bc5c4357a3a1890b619af1c4becc5b1ba6e5ffe48b27d5a39706fde42d4e4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                            className="object-contain w-9 aspect-square max-md:mx-auto"
                        />
                        <div className="mt-3">
                            Certified cybersecurity professional with 8+ years of experience
                            in IT, focusing on secure code testing, Apex code testing, and
                            robust security architecture. Proven expertise in penetration
                            testing, vulnerability assessment, and collaborating <br />
                            with clients to deliver cutting-
                            <br />
                            edge security solutions.
                            <br />
                        </div>
                    </div>

                    <div className="flex absolute z-0 flex-col items-end leading-none text-center bottom-[275px] right-[100px] text-neutral-900 max-md:relative max-md:bottom-auto max-md:right-auto max-md:items-center max-md:w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f387bb7a59d129b39303602333ee41a56ef631f118a33743978d9830c50ebe0a?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                            className="object-contain w-40 max-w-full aspect-[5] max-md:w-[80%]"
                        />
                        <div className="flex flex-col items-end mt-5 max-md:items-center">
                            <div className="text-5xl font-bold tracking-tighter max-md:text-4xl">
                                8+ Years
                            </div>
                            <div className="mt-1.5 text-xl tracking-tight">Experience</div>
                        </div>
                    </div>

                    <div className="flex absolute left-2/4 z-0 flex-col text-white rounded-none -translate-x-2/4 bottom-[-276px] min-h-[100px] lg:h-[769px] min-w-[240px] translate-y-[0%] w-[660px] max-md:relative max-md:bottom-auto max-md:left-auto max-md:translate-x-0 max-md:w-full">
                        <div className="flex relative flex-col justify-center items-center px-20 -mb-10 mt-32 md-mb-0 md:mt-0 xl:py-80 w-full min-h-[100px] lg:min-h-[769px] max-md:px-5 max-md:py-24">
                            <img
                                loading="lazy"
                                srcSet="/ambreen.png"
                                className="object-cover absolute xl:size-full"
                            />
                            <div className="flex overflow-hidden relative gap-2.5 justify-center items-center px-2.5 py-2 mb-0 max-w-full bg-white bg-opacity-10 min-h-[67px] rounded-[50px] max-w-[351px] max-md:w-full">
                                <a href="/Ambreen - Lead Automation QA Engineer.pdf" download>
                                    <div className="overflow-hidden self-stretch px-2 py-3.5 text-center my-auto w-44 md:w-52 text-lg font-medium tracking-tight bg-black min-h-[54px] rounded-[60px] cursor-pointer">
                                        Download CV
                                    </div>
                                </a>
                                <Link
                                    href="https://calendly.com/ambreeny007"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='overflow-hidden flex-1 text-center shrink gap-2.5 self-stretch py-2 pr-2.5 pl-2.5 my-auto text-lg md:text-2xl font-light rounded-[60px] cursor-pointer'
                                >
                                    Hire me
                                </Link>

                            </div>
                            <img
                                src="/arrowup.png"  // Update with the correct path to your arrow image
                                alt="Arrow"
                                className="hidden lg:flex absolute -right-52 top-1/1 transform -translate-y-1/2"  // Adjust size and position as needed
                            />
                        </div>
                    </div>
                </div>
                {/* Professional Experience SEction */}
                <ProfessionalExperience />
                {/* Work Experience */}
                <div id='work' className="flex flex-col items-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full">
                    <div className="text-6xl tracking-tighter leading-none text-[#171717] max-md:max-w-full max-md:text-4xl">
                        <span className="font-medium">My </span>
                        <span className="font-semibold text-[#00A5B6]">Work Experience</span>
                    </div>

                    {/* Use Grid Layout for Work Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-md:mt-10 w-full max-w-7xl">
                        <div className="flex gap-10 self-stretch pr-6 my-auto rounded-lg border border-solid bg-zinc-50 border-black border-opacity-0 max-md:max-w-full">
                            <div className="flex shrink-0 h-56 bg-[#00A5B6] w-[7px]" />
                            <div className="flex flex-col grow shrink-0 self-center mt-4 basis-0 w-fit max-md:max-w-full">
                                <div className=" text-2xl lg:text-3xl font-semibold leading-9 text-[#171717] md:max-w-[300px]">
                                    Sr. QA Automation Engineer
                                </div>
                                <div className="mt-3.5 text-lg lg:text-xl font-medium text-[#7F7F7F] max-md:max-w-full">
                                    Involved in test cases review by development team, product management, and modified the test cases based on their feedback.
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-10 self-stretch pr-6 my-auto rounded-lg border border-solid bg-zinc-50 border-black border-opacity-0 max-md:max-w-full">
                            <div className="flex shrink-0 h-56 bg-[#00A5B6] w-[7px]" />
                            <div className="flex flex-col grow shrink-0 self-center mt-4 basis-0 w-fit max-md:max-w-full">
                                <div className=" text-2xl lg:text-3xl font-semibold leading-9 text-[#171717] md:max-w-[400px]">
                                    Software Development Engineer in Test
                                </div>
                                <div className="mt-3.5 text-lg lg:text-xl font-medium text-[#7F7F7F] max-md:max-w-full">
                                    Create automated test frameworks, design and implementation of test cases, and writing code to improve the overall testability of software.
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-10 self-stretch pr-6 my-auto rounded-lg border border-solid bg-zinc-50 border-black border-opacity-0  max-md:max-w-full">
                            <div className="flex shrink-0 h-56 bg-[#00A5B6] w-[7px]" />
                            <div className="flex flex-col grow shrink-0 self-center mt-4 basis-0 w-fit max-md:max-w-full">
                                <div className=" text-2xl lg:text-3xl font-semibold leading-none text-[#171717] md:max-w-[300px]">
                                    QA Engineer
                                </div>
                                <div className="mt-3.5 text-lg lg:text-xl font-medium text-[#7F7F7F] max-md:max-w-full">
                                    Analyzed business requirements, documented business requirements specifications, wrote Test Plans, Test Cases.
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-10 self-stretch pr-6 my-auto rounded-lg border border-solid bg-zinc-50 border-black border-opacity-0 max-md:max-w-full">
                            <div className="flex shrink-0 h-56 bg-[#00A5B6] w-[7px]" />
                            <div className="flex flex-col grow shrink-0 self-center mt-4 basis-0 w-fit max-md:max-w-full">
                                <div className=" text-2xl lg:text-3xl font-semibold leading-none text-[#171717] md:max-w-[300px]">
                                    QA Tester
                                </div>
                                <div className="mt-3.5 text-lg lg:text-xl font-medium text-[#7F7F7F] max-md:max-w-full">
                                    Analyzed requirements, functional specification & required documents for Manual Testing.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recent Projects */}
                <RecentProjects />
                {/* Tools and Technologies */}
                <ToolsAndTechnologies />
                {/* Why HIRE ME */}
                <div id='hire' className="flex overflow-hidden flex-col justify-center items-center py-14 pr-16 w-full bg-gray-100 min-h-[703px] rounded-[50px] max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col md:flex-row relative justify-between items-start max-w-full min-h-[600px] w-full md:w-[1299px]">

                        {/* Left side - Image */}
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7613baaf31b62b54222c17dfa27a79ad7c7e358c08cf18b398d40394098a4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7613baaf31b62b54222c17dfa27a79ad7c7e358c08cf18b398d40394098a4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7613baaf31b62b54222c17dfa27a79ad7c7e358c08cf18b398d40394098a4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7613baaf31b62b54222c17dfa27a79ad7c7e358c08cf18b398d40394098a4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7613baaf31b62b54222c17dfa27a79ad7c7e358c08cf18b398d40394098a4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7613baaf31b62b54222c17dfa27a79ad7c7e358c08cf18b398d40394098a4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7613baaf31b62b54222c17dfa27a79ad7c7e358c08cf18b398d40394098a4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd7613baaf31b62b54222c17dfa27a79ad7c7e358c08cf18b398d40394098a4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                            className="object-contain z-0 self-start aspect-[1.12] h-[469px] min-w-[240px] w-full md:w-[527px] max-md:max-w-full"
                        />

                        {/* Right side - Content */}
                        <div className="flex flex-col flex-1 shrink my-auto md:ml-16 basis-0 min-w-[240px] max-w-full">
                            <div className="w-full text-6xl font-semibold tracking-tighter leading-none text-[#171717] max-w-full md:text-4xl text-center md:text-left">
                                Why <span className="text-[#00A5B6]">Hire me</span>?
                            </div>
                            <div className="mt-12 text-xl tracking-tight text-[#606060] max-w-[600px] leading-7 md:mt-10 text-center md:text-left">
                                Excellent working experience in API testing, product reviews, product regression and new feature testing, QA process management, release management and making the release report, ensuring all critical/major bugs are fixed before release.
                            </div>
                            <div className="flex flex-wrap gap-2.5 items-start mt-12 w-full md:mt-10">
                                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] items-center md:items-start">
                                    <div className="flex gap-1 items-center text-4xl font-bold tracking-tight whitespace-nowrap text-slate-800">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8fa3c1a439a45d7f3f40bd33923811b39db58bd4a99a7e8cbcc008f628a68e4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                                            className="object-contain w-12 aspect-square"
                                        />
                                        <div>150+</div>
                                    </div>
                                    <div className="mt-2.5 text-xl tracking-tight text-gray-500">
                                        Projects Completed
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] items-center md:items-start">
                                    <div className="flex gap-1 items-center text-4xl font-bold tracking-tight whitespace-nowrap text-slate-800">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2212333cd7d7143f4e33fbdee980369fbd5069ab7ab4e64cce7b9cf8ebd8aca4?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                                            className="object-contain w-12 aspect-square"
                                        />
                                        <div className="self-stretch my-auto">5.0</div>
                                    </div>
                                    <div className="mt-2.5 text-xl tracking-tight text-gray-500">
                                        Client Satisfaction
                                    </div>
                                </div>
                            </div>
                            <Link
                                    href="https://calendly.com/ambreeny007"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex justify-center md:justify-start gap-2.5 md:self-start px-14 py-4 mt-12 text-3xl font-semibold tracking-tight text-white bg-neutral-900 rounded-[24px] max-md:px-5 max-md:mt-10 cursor-pointer'
                                >
                                    Hire me
                                </Link>
                        </div>
                    </div>
                </div>
                {/* Contact Section */}
                <ProjectDiscussionForm />
            </div>
        </div >
    )
}

export default Homepage