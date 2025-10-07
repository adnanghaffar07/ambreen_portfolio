import React from 'react'
import ToolsAndTechnologies from '../components/tools'
import RecentProjects from '../components/recentProjects'
import ProjectDiscussionForm from '../components/contactForm';
import Link from 'next/link';
import ToolLogosSection from '../components/toolsLogoSection';
import InfoSection from '../components/workExperience';
import Testimonials from '../components/testimonials';

const Homepage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full max-md:max-w-full">
                {/* HERO SECTION */}
                <div id="home" className="font-poppins flex flex-col lg:flex-row max-w-7xl py-6 px-6 md:px-8 md:py-8 gap-8 justify-between mx-auto md:pb-10">
                    {/* Text Area */}
                    <div className="flex flex-col justify-center items-start w-full lg:w-2/3 space-y-6">
                        <h1 className="text-xl font-bold text-[#171717] dark:text-white">Hi I am</h1>
                        <h2 className="text-3xl font-bold text-[#BB5A5A]">Ambreen</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#171717] dark:text-white">Lead Automation</h3>
                        <h4 className="text-4xl md:text-5xl font-extrabold text-[#171717] dark:text-white ml-5 md:ml-10">
                            Software <span className="text-[#BB5A5A]">QA</span> Engineer
                        </h4>
                        <p className="text-lg text-[#171717] dark:text-white max-w-xl text-justify">
                            With 8+ years in Automation QA and Full Stack Development, I deliver scalable solutions, optimize testing,
                            enhance code quality, and implement CI/CD pipelines, ensuring efficient, high-quality and user-friendly software.
                        </p>

                        <div className="flex">
                            <Link
                                href="/workflow-automation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center bg-[#BB5A5A] w-fit text-center hover:bg-[#9e4c4c] transition duration-300 text-white px-6 py-2.5 rounded-[7px]">
                                Explore My Automations                            </Link>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="flex justify-center items-center w-full md:w-2/3">
                        <img
                            src="/ambreen.png"
                            alt="Ambreen's Image"
                            className="w-full h-auto mb-6 max-w-sm md:max-w-full object-cover xl:ml-32"
                        />
                    </div>
                </div>

                {/* Tools Logo SEction */}
                <ToolLogosSection />

                {/* WORK EXPERIENCE */}
                <InfoSection />

                {/* Recent Projects */}
                <RecentProjects />
                {/* Tools and Technologies */}
                <ToolsAndTechnologies />

                {/* key Achievements */}
                <Testimonials />

                {/* Things I Love Section */}
                <section className="py-6 md:py-16 px-6 md:px-10 max-w-7xl mx-auto">
                    {/* Container for Left and Right content */}
                    <div className="flex flex-col md:grid lg:grid-cols-2 items-center justify-between gap-12">

                        {/* Left Side: Heading, Description, and Button */}
                        <div className="w-full md:w-full text-center md:text-left md:mr-10">
                            <h2 style={{ lineHeight: "60px" }} className="text-3xl md:text-5xl max-w-sm dark:text-white font-semibold text-black mb-4">
                                <span className='text-[#BB5A5A]'>Things</span> I Love Doing
                            </h2>
                            <p className="text-lg text-[#323433] dark:text-white max-w-md mb-6">
                                I’m fueled by coffee, inspired by books, and passionate about tech. Nature recharges me, and music is my therapy. From coding and gadgets to hiking and reading, I embrace creativity and growth in all forms, making every day an adventure.
                            </p>
                            <Link
                                href="https://calendly.com/ambreeny007"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center bg-[#BB5A5A] lg:w-[150px] text-center hover:bg-[#9e4c4c] transition duration-300 text-white px-6 py-2.5 rounded-[7px]">
                                Hire Me
                            </Link>
                        </div>

                        {/* Right Side: 6 Cards */}
                        <div className=" grid grid-cols-1 gap-6 md:ml-10">
                            {/* Card 1 */}
                            <div className="md:w-[350px] flex items-center bg-white rounded-lg px-3 md:px-6 py-3.5"
                                style={{
                                    boxShadow: '0 4px 20px rgba(187, 90, 90, 0.3), 0 1px 10px rgba(187, 90, 90, 0.2)',
                                }}>
                                <img src="/coffee.png" alt="Icon 1" className="h-7 mr-4" /> {/* Replace with actual icon */}
                                <h3 className="text-xl font-semibold text-black">I live for coffee</h3>
                            </div>


                            {/* Card 2 */}
                            <div className="md:w-[350px] md:ml-16 flex items-center bg-white rounded-lg px-3 md:px-6  py-3.5"
                                style={{
                                    boxShadow: '0 4px 20px rgba(187, 90, 90, 0.3), 0 1px 10px rgba(187, 90, 90, 0.2)',
                                }}>
                                <img src="/book.png" alt="Icon 1" className="h-7 mr-4" /> {/* Replace with actual icon */}
                                <h3 className="text-xl font-semibold text-black">Books are my escape</h3>
                            </div>


                            {/* Card 3 */}
                            <div className="md:w-[350px] flex items-center bg-white rounded-lg px-3 md:px-6  py-3.5"
                                style={{
                                    boxShadow: '0 4px 20px rgba(187, 90, 90, 0.3), 0 1px 10px rgba(187, 90, 90, 0.2)',
                                }}>
                                <img src="/cpu.png" alt="Icon 1" className="h-7 mr-4" /> {/* Replace with actual icon */}
                                <h3 className="text-xl font-semibold text-black">Tech is my passion</h3>
                            </div>


                            {/* Card 4 */}
                            <div className="md:w-[350px] md:ml-16 flex items-center bg-white rounded-lg px-3 md:px-6  py-3.5"
                                style={{
                                    boxShadow: '0 4px 20px rgba(187, 90, 90, 0.3), 0 1px 10px rgba(187, 90, 90, 0.2)',
                                }}>
                                <img src="/sun.png" alt="Icon 1" className="h-7 mr-4" /> {/* Replace with actual icon */}
                                <h3 className="text-xl font-semibold text-black">I thrive in nature</h3>
                            </div>

                            {/* Card 6 */}
                            <div className="md:w-[350px] flex items-center bg-white rounded-lg px-3 md:px-6  py-3.5"
                                style={{
                                    boxShadow: '0 4px 20px rgba(187, 90, 90, 0.3), 0 1px 10px rgba(187, 90, 90, 0.2)',
                                }}>
                                <img src="/music.png" alt="Icon 1" className="h-7 mr-4" /> {/* Replace with actual icon */}
                                <h3 className="text-xl font-semibold text-black">Music is my therapy</h3>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-6 md:py-16 px-6 md:px-10 max-w-7xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-center text-3xl md:text-5xl dark:text-white font-bold text-black mb-12">
                        Testimonials
                    </h2>

                    {/* Testimonial Cards */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Testimonial 1 */}
                        <div
                            className="w-full md:w-[350px] bg-white rounded-lg p-6"
                            style={{
                                boxShadow: '0px 4px 20px rgba(187, 90, 90, 0.3), 0px 1px 10px rgba(187, 90, 90, 0.2)',
                            }}
                        >                            {/* Star Rating */}
                            <div className="flex justify-start mb-4">
                                <img src="/star-rating.png" alt="Rating" className="w-24" /> {/* Replace with your star rating image */}
                            </div>

                            {/* Testimonial Paragraph */}
                            <p className="text-md font-md text-black mb-6">
                                Fantastic team to work with. Really stepped up and took care of everything we asked them to do for us! Would rehire her in the future!. Highly recommended!          </p>

                            {/* Client Info */}
                            <div className="flex items-center gap-4">
                                <img src="/test-1.png" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-gray-800">Amir Uddin</p>
                                    <p className="text-[#92929D]">CEO & Founder</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div
                            className="w-full md:w-[350px] bg-white rounded-lg p-6"
                            style={{
                                boxShadow: '0px 4px 20px rgba(187, 90, 90, 0.3), 0px 1px 10px rgba(187, 90, 90, 0.2)',
                            }}
                        >                            {/* Star Rating */}
                            <div className="flex justify-start mb-4">
                                <img src="/star-rating.png" alt="Rating" className="w-24" /> {/* Replace with your star rating image */}
                            </div>

                            {/* Testimonial Paragraph */}
                            <p className="text-md font-md text-black mb-6">
                                Ambreen demonstrated exceptional proficiency in WordPress, PHP, CSS, and CSS liquid along with a strong understanding of REST APIs.          </p>

                            {/* Client Info */}
                            <div className="flex items-center gap-4">
                                <img src="/test-2.png" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-gray-800">Salim Ahmed</p>
                                    <p className="text-[#92929D]">CTO</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div
                            className="w-full md:w-[350px] bg-white rounded-lg p-6"
                            style={{
                                boxShadow: '0px 4px 20px rgba(187, 90, 90, 0.3), 0px 1px 10px rgba(187, 90, 90, 0.2)',
                            }}
                        >         {/* Star Rating */}
                            <div className="flex justify-start mb-4">
                                <img src="/star-rating.png" alt="Rating" className="w-24" /> {/* Replace with your star rating image */}
                            </div>

                            {/* Testimonial Paragraph */}
                            <p className="text-md font-md text-black mb-6">
                                Ambreen showcased outstanding skills in Shopify, JavaScript, HTML, and SCSS, coupled with a solid grasp of GraphQL APIs.
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center gap-4">
                                <img src="/test-3.jpg" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-gray-800">Sofia Karim</p>
                                    <p className="text-[#92929D]">Creative Director</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Skills section */}
                <section className="relative py-6 md:py-16 px-6">
                    {/* Heading */}
                    <h2 className="text-center text-3xl md:text-5xl font-semibold dark:text-white text-black mb-8 md:-mb-4">
                        My <span className='text-[#BB5A5A]'>Skills</span>
                    </h2>
                    {/* Background image container */}
                    <div
                        className="relative bg-cover bg-center h-[430px] sm:h-[350px] md:h-[200px] max-w-7xl mx-auto"
                        style={{ backgroundImage: 'url("/skills-bg.png")' }} // Replace with your background image path
                    >
                        {/* Card container with absolute positioning */}
                        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 md:gap-10 md:-mb-12">
                            {/* Card 1 */}
                            <div className="h-14 bg-white shadow-xl rounded-full border-t-4 border-[#BB5A5A] flex items-center justify-center px-5 ">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Leadership</h3>
                            </div>

                            {/* Card 2 */}
                            <div className="h-14 bg-white shadow-xl rounded-full border-t-4 border-[#BB5A5A] flex items-center justify-center px-5 ">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Communication</h3>
                            </div>

                            {/* Card 3 */}
                            <div className="h-14 bg-white shadow-xl rounded-full border-t-4 border-[#BB5A5A] flex items-center justify-center px-5 ">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Adaptability</h3>
                            </div>

                            {/* Card 4 */}
                            <div className="h-14 bg-white shadow-xl rounded-full border-t-4 border-[#BB5A5A] flex items-center justify-center px-5">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Problem-Solving</h3>
                            </div>

                            {/* Card 5 */}
                            <div className="h-14 bg-white shadow-xl rounded-full border-t-4 border-[#BB5A5A] flex items-center justify-center px-5">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Teamwork</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why HIRE ME */}
                <div id='hire' className="flex overflow-hidden flex-col justify-center px-6 items-center py-6 lg:py-0 lg:pr-16 w-full bg-[#EACEB4] bg-opacity-10 dark:bg-opacity-40 min-h-[703px] max-md:max-w-full">
                    <div className="flex flex-col md:flex-row relative justify-between md:items-start max-w-full min-h-[600px] w-full md:w-[1299px]">

                        {/* Left side - Image */}
                        <img
                            loading="lazy"
                            src="/ambreen-hire.png"
                            alt='hire me'
                            className="object-contain md:self-start mb-10 md:mb-0 xl:px-[110px] h-[350px] lg:h-[550px]"
                        />

                        {/* Right side - Content */}
                        <div className="flex flex-col flex-1 shrink my-auto md:ml-16 basis-0 min-w-[240px] max-w-full">
                            <h2 className="w-full text-3xl font-semibold leading-7 dark:text-white text-[#171717] max-w-full md:text-5xl text-center md:text-left">
                                Why <span className="text-[#BB5A5A]">Hire me</span>?
                            </h2>
                            <p className="mt-12 text-lg  text-[#323433] dark:text-white md:max-w-[500px] leading-8 md:mt-10 text-center md:text-left">
                                With 8+ years in Automation QA and Full Stack Development, I deliver scalable solutions, optimize testing, and implement CI/CD pipelines. Proficient in Selenium, Appium, Jenkins, and languages like Python, Java, and JavaScript, I ensure high-quality, user-friendly software through efficient testing, attention to detail, and cross-functional collaboration.                            </p>

                            <div className="flex flex-wrap gap-2.5 items-start mt-12 w-full md:mt-10">
                                <div className="flex flex-col flex-1 shrink basis-0  items-center md:items-start">
                                    <div className="flex gap-1 items-center text-2xl md:text-4xl font-bold tracking-tight whitespace-nowrap text-black">
                                        <img
                                            loading="lazy"
                                            src='/star-rataing.png'
                                            alt='project-completed'
                                            className="object-contain w-10 "
                                        />
                                        <div>150+</div>
                                    </div>
                                    <div className="mt-2.5 text-md md:text-lg text-center dark:text-white text-[#667085]">
                                        Projects Completed
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 shrink basis-0 w-[150px] items-center md:items-start">
                                    <div className="flex gap-1 items-center text-2xl md:text-4xl font-bold tracking-tight whitespace-nowrap text-black">
                                        <img
                                            loading="lazy"
                                            src='/project.png'
                                            alt='Star rating'
                                            className="object-contain w-10 "
                                        />
                                        <div className="self-stretch my-auto">4.9</div>
                                    </div>
                                    <div className="mt-2.5 text-md md:text-lg text-center  dark:text-white text-[#667085]">
                                        Client Satisfaction
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 shrink basis-0 items-center md:items-start">
                                    <div className="flex gap-1 items-center text-2xl md:text-4xl font-bold tracking-tight whitespace-nowrap text-black">
                                        <img
                                            loading="lazy"
                                            src='/calender.png'
                                            alt='Calender'
                                            className="object-contain w-10 "
                                        />
                                        <div className="self-stretch my-auto">8+</div>
                                    </div>
                                    <div className="mt-2.5 text-md md:text-lg text-center dark:text-white text-[#667085]">
                                        Years Experience
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="https://calendly.com/ambreeny007"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center md:justify-start gap-2.5 md:self-start px-14 py-2.5 mt-12 text-xl text-white bg-[#BB5A5A] rounded-[7px] max-md:px-5 max-md:mt-10 cursor-pointer border-2 border-transparent transition-all duration-300 hover:bg-white hover:border-[#BB5A5A] hover:text-[#BB5A5A]"
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