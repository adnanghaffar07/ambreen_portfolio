
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex overflow-hidden flex-col justify-between px-16 py-6 w-full bg-black min-h-[270px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-start mt-6 w-full max-md:max-w-full">
                <div className="flex flex-col items-center md:justify-between max-md:max-w-full">
                    <div className="flex overflow-hidden gap-2.5 items-center py-2.5 min-h-[66px]">
                        <div className="flex gap-2.5 items-center md:mt-6 self-stretch my-auto">
                            <img
                                loading="lazy"
                                src="/amb-nav.png"
                                className="object-contain h-14 aspect-[1.2]"
                            />
                            <div className="self-stretch my-auto text-2xl text-white">
                                AMBREEN
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:space-x-6 md:mt-7 text-base text-gray-50">
                        <Link
                            href="/#services"
                            className="cursor-pointer mt-5"
                        >
                            Services
                        </Link>

                        <Link
                            href="/#experience"
                            className="cursor-pointer mt-5"
                        >
                            Professional Experience
                        </Link>

                        <Link
                            href="/#tools-section"
                            className="cursor-pointer mt-5"
                        >
                            Tools & Technologies
                        </Link>

                        <Link
                            href="/#hire"
                            className="cursor-pointer mt-5"
                        >
                            Why Hire Me
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col mt-1 text-base tracking-tight text-gray-50">
                        <div className="flex items-center gap-3 mt-10 cursor-pointer">
                            <a
                                href="https://www.ambreeny.com/" // Email link format
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row gap-3"

                            >
                                <img
                                    loading="lazy"
                                    src="/footer-web.png" // Replace with the actual email icon path
                                    className="object-contain w-5 aspect-square"
                                    alt="Email"
                                />
                                <p>ambreeny.com</p>
                            </a>

                        </div>
                    </div>

                </div>

            </div>
            <div className="flex flex-col md:flex-row" >
                <div className="flex md:hidden flex gap-4 items-start mt-10 mb-2">
                    <a
                        href="https://wa.me/+16133166042" // WhatsApp link format
                        target="_blank" // Opens in a new tab
                        rel="noopener noreferrer" // For security reasons
                    >
                        <img
                            loading="lazy"
                            src="/whatsapp.png"
                            className="object-contain shrink-0 w-5 aspect-square"
                            alt="WhatsApp"
                        />
                    </a>

                    <a
                        href="https://github.com/ambreen4191" // GitHub URL
                        target="_blank" // Open link in a new tab
                        rel="noopener noreferrer" // For security reasons
                    >
                        <img
                            loading="lazy"
                            src="/github.png"
                            className="object-contain shrink-0 w-5 aspect-square"
                            alt="GitHub"
                        />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ambreen@ambreeny.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            loading="lazy"
                            src="/gmail.png"
                            className="object-contain shrink-0 w-5 aspect-square"
                            alt="Gmail"
                        />
                    </a>


                    <a
                        href="https://www.linkedin.com/in/ambreen-younas-3022511b4/" // LinkedIn URL
                        target="_blank" // Open LinkedIn in a new tab
                        rel="noopener noreferrer" // For security reasons
                    >
                        <img
                            loading="lazy"
                            src="/linkdein.png"
                            className="object-contain shrink-0 w-5 aspect-square"
                            alt="LinkedIn"
                        />
                    </a>

                </div>
                <div className="mt-6 mb-3 2xl:-mr-[150px] w-full text-center font-light text-sm text-white max-md:max-w-full">
                    Copyright© 2025 Ambreeny. All Rights Reserved.
                </div>
                {/* <div className="hidden md:flex flex gap-4 items-start mt-4 mb-2">
                    <a
                        href="https://wa.me/+16133166042" // WhatsApp link format
                        target="_blank" // Opens in a new tab
                        rel="noopener noreferrer" // For security reasons
                    >
                        <img
                            loading="lazy"
                            src="/whatsapp.png"
                            className="object-contain shrink-0 w-7 aspect-square"
                            alt="WhatsApp"
                        />
                    </a>

                    <a
                        href="https://github.com/ambreen4191" // GitHub URL
                        target="_blank" // Open link in a new tab
                        rel="noopener noreferrer" // For security reasons
                    >
                        <img
                            loading="lazy"
                            src="/github.png"
                            className="object-contain shrink-0 w-7 aspect-square"
                            alt="GitHub"
                        />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ambreen@ambreeny.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            loading="lazy"
                            src="/gmail.png"
                            className="object-contain shrink-0 w-7 aspect-square"
                            alt="Gmail"
                        />
                    </a>


                    <a
                        href="https://www.linkedin.com/in/ambreen-younas-3022511b4/" // LinkedIn URL
                        target="_blank" // Open LinkedIn in a new tab
                        rel="noopener noreferrer" // For security reasons
                    >
                        <img
                            loading="lazy"
                            src="/linkdein.png"
                            className="object-contain shrink-0 w-7 aspect-square"
                            alt="LinkedIn"
                        />
                    </a>

                </div> */}
            </div>

        </div>)
}

