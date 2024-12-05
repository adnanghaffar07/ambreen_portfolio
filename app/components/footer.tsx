
import ButtonScrollToSection from "./buttonScroll";

export default function Footer() {
    // const [email, setEmail] = useState(""); // Track email input


    // Explicitly typing the event as React.FormEvent<HTMLFormElement>
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault(); // Prevent default form submission

    //     try {
    //         const response = await fetch("/api/projectdiscussionform", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 email: email,
    //             }),
    //         });

    //         if (response.ok) {
    //             alert("Email sent successfully");
    //             setEmail(""); // Reset email input field
    //         } else {
    //             alert("Failed to send email");
    //         }
    //     } catch (error) {
    //         console.error("Error sending email:", error);
    //     }
    // };
    return (


        <div className="flex overflow-hidden flex-col justify-between px-16 py-6 w-full rounded-tl-3xl rounded-tr-3xl bg-[#171717] min-h-[381px] max-md:px-5 max-md:max-w-full">
            <div className="mt-5" style={{ border: '1px solid rgba(187, 90, 90, 0.5)' }} />


            <div className="flex flex-wrap gap-10 justify-start items-start mt-6 w-full max-md:max-w-full">
                <div className="flex flex-col items-start md:justify-between md:min-h-[239px] md:w-[400px] max-md:max-w-full">
                    <div className="flex overflow-hidden gap-2.5 items-center py-2.5 min-h-[66px] rounded-[60px]">
                        <div className="flex gap-2.5 items-center self-stretch my-auto">
                            <img
                                loading="lazy"
                                src="/amb-nav.png"
                                className="object-contain w-12 h-12 aspect-[1.2]"
                            />
                            <div className="self-stretch my-auto text-2xl text-white">
                                AMBREEN
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start mt-4 mb-2">
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
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ambreeny007@gmail.com"
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
                </div>
                <div className="flex flex-col md:mr-16">
                    <div className="text-xl font-semibold tracking-tight text-[#BB5A5A]">
                        Navigations
                    </div>
                    <div className="flex flex-col mt-7 text-base tracking-tight text-gray-50">
                        <ButtonScrollToSection
                            content="Services"
                            classes=" cursor-pointer"
                            destination="services"
                            key="Get-Started-Now-button"
                        />
                        <ButtonScrollToSection
                            content="Professional Experience"
                            classes=" cursor-pointer mt-5"
                            destination="experience"
                            key="Get-Started-Now-button"
                        />
                        <ButtonScrollToSection
                            content="Tools & Technologies"
                            classes=" cursor-pointer  mt-5"
                            destination="tools-section"
                            key="Get-Started-Now-button"
                        />
                        <ButtonScrollToSection
                            content="Why Hire Me"
                            classes=" cursor-pointer mt-5"
                            destination="hire"
                            key="Get-Started-Now-button"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="text-xl font-semibold tracking-tight text-[#BB5A5A]">
                        Contact
                    </div>
                    <div className="flex flex-col mt-7 text-base tracking-tight text-gray-50">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <a
                                href="tel:+16133166042" // Telephone link format
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    loading="lazy"
                                    src="/footer-call.png" // Replace with the actual phone icon path
                                    className="object-contain w-5 aspect-square"
                                    alt="Phone"
                                />
                            </a>
                            <span>+1 (613) 3166042</span>
                        </div>
                        <div className="flex items-center gap-3 mt-5 cursor-pointer">
                            <a
                                href="https://www.ambreeny.com/" // Email link format
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    loading="lazy"
                                    src="/footer-web.png" // Replace with the actual email icon path
                                    className="object-contain w-5 aspect-square"
                                    alt="Email"
                                />
                            </a>
                            <span>ambreeny.com</span>
                        </div>
                        <div className="flex items-center gap-3 mt-5 cursor-pointer">
                            <a
                                href="mailto:ambreeny007@gmail.com" // Email link format
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    loading="lazy"
                                    src="/footer-mail.png" // Replace with the actual email icon path
                                    className="object-contain w-5 aspect-square"
                                    alt="Email"
                                />
                            </a>
                            <span>ambreeny007@gmail.com</span>
                        </div>
                    </div>

                </div>
                {/* <div className="flex flex-col min-w-[240px] w-[304px]">
                    <div className="text-xl font-semibold tracking-tight text-[#BB5A5A]">
                        Get in touch
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-start mt-7 w-full max-w-[304px]">
                            <div className="overflow-hidden gap-2.5 self-stretch px-3.5 py-4 text-base tracking-tight text-black bg-white rounded-tl-2xl rounded-bl-2xl min-h-[51px] min-w-[240px] w-[258px]">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex overflow-hidden gap-2.5 justify-center rounded-tr-2xl rounded-br-2xl items-center px-2 py-3.5 bg-[#BB5A5A] rounded-none min-h-[51px] w-[46px]">
                                <button type="submit" className="object-contain self-stretch my-auto w-8 aspect-square">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5908d3b545afb53fc931b2f740d5f90a90794ee5f32ad017c00b219bcd45ccd5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                                        alt="Send"
                                    />
                                </button>
                            </div>
                        </div>
                    </form>
                </div> */}
            </div>
            <div className="mt-3" style={{ border: '1px solid rgba(187, 90, 90, 0.5)' }} />

            <div className="mt-6 w-full text-base text-center font-light text-sm text-white max-md:max-w-full">
                Copyright© 2024 Ambreeny. All Rights Reserved.
            </div>
        </div>)
}

