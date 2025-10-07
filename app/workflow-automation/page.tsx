import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
    title: "Workflow Automation Projects | Ambreen Younas",
    description:
        "Explore Ambreen Younas’s workflow automation projects with n8n, Zapier, Make.com & Aloware-AI-driven systems that optimize sales, marketing & operations.",
    openGraph: {
        title: "Workflow Automation Projects | Ambreen Younas",
        description:
            "Explore Ambreen Younas’s workflow automation projects with n8n, Zapier, Make.com & Aloware-AI-driven systems that optimize sales, marketing & operations.",
        url: "https://www.ambreeny.com/workflow-automation", // replace with your actual URL
        images: [
            {
                url: "/ambreen.png", // replace with your OG image
                width: 1200,
                height: 630,
                alt: "Workflow Automation Projects",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Workflow Automation Projects | Ambreen Younas",
        description:
            "Explore Ambreen Younas’s workflow automation projects with n8n, Zapier, Make.com & Aloware-AI-driven systems that optimize sales, marketing & operations.",
        images: ["/ambreen.png"],
    },
};

interface ProjectProps {
    title: string;
    description: string;
    descriptionList?: string[]; // <-- allow list format
    result: string;
    tools: string[];
    image: string;
    reverse?: boolean;
}
const ProjectCard: React.FC<ProjectProps> = ({
    title,
    description,
    descriptionList,
    result,
    tools,
    image,
    reverse = false,
}) => {
    return (
        <div
            className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Text Section */}
            <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-700 leading-relaxed dark:text-white">{description}</p>

                {/* If list exists, render as <ul>, otherwise plain text */}
                {descriptionList ? (
                    <ul className="list-disc pl-6 text-gray-700 dark:text-white">
                        {descriptionList.map((item, index) => (
                            <li key={index} className="leading-relaxed">{item}</li>
                        ))}
                    </ul>
                ) : null}

                <p>
                    <span className="font-semibold">Result:</span> {result}
                </p>
                <p>
                    <span className="font-semibold">Tools:</span> {tools.join(", ")}
                </p>
            </div>


            {/* Image Section */}
            <div className="flex-1">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                />
            </div>
        </div>
    );
};



const page = () => {
    return (
        <div className="flex flex-col w-full max-md:max-w-full ">
            {/* HERO SECTION */}
            <div className="font-poppins flex flex-col lg:flex-row max-w-7xl py-6 px-6 md:px-8 md:py-8 gap-8 justify-between mx-auto md:pb-10">
                {/* Text Area */}
                <div className="flex flex-col justify-center items-start w-full lg:w-2/3 space-y-6">
                    <h1 className="text-xl font-bold text-[#171717] dark:text-white">Workflow Automation</h1>
                    <h2 className="text-3xl font-bold text-[#BB5A5A]">Projects by</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#171717] dark:text-white">Ambreen Younas</h3>
                    <p className="text-lg text-[#171717] dark:text-white max-w-xl text-justify">
                        I’m Ambreen Younas, and I help businesses work smarter by building <span className='font-bold'>workflow automation systems</span> that remove repetitive tasks, reduce costs, and unlock efficiency. From AI-powered sales pipelines to automated content engines, I’ve designed solutions that connect tools, streamline operations, and give teams back their time.
                        Below is a collection of my automation projects built with <span className='font-bold'>n8n, Aloware, Make.com, and Zapier</span>. Each one started with a real business problem — and ended with a practical, automated system that just works.
                    </p>
                    <div className="flex">
                        <Link
                            href="/"
                            className="flex justify-center items-center bg-[#BB5A5A] w-fit text-center hover:bg-[#9e4c4c] transition duration-300 text-white px-6 py-2.5 rounded-[7px]">
                            Back to Home                           </Link>
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
            <div className='bg-[#EACEB4] bg-opacity-30'>
                <main className="space-y-16 max-w-7xl mx-auto px-6 py-10">
                    <h3 className="flex items-center justify-center text-2xl md:text-4xl font-extrabold gap-3 mb-6">
                        <Image
                            src="/n8n-logo.png"
                            alt="n8n Logo"
                            width={100}
                            height={100}
                            className="h-16 w-16 md:h-24 md:w-24 object-contain"
                        />
                        n8n Projects
                    </h3>

                    <ProjectCard
                        title="AI Sales Workflow Automation"
                        description="Sales teams were drowning in call notes and missed follow-ups. I built a system with n8n that captures transcripts, uses AI to identify action items, and automatically updates Notion and Slack. It even drafts Statements of Work and stores them in Google Drive."
                        result="No details slipped through the cracks, and deal cycles became faster and more organized."
                        tools={["n8n", "OpenAI", "Anthropic", "Notion", "Slack", "Google Drive"]}
                        image="/n8n1.png"
                    />

                    <ProjectCard
                        title="Conversational WhatsApp Chatbot"
                        description="To make customer communication more natural, I created a WhatsApp chatbot with n8n, Google Gemini, and SerpAPI. It answers like a human, remembers past chats, and pulls live data when needed."
                        result="A 24/7 assistant that engages customers instantly without extra staff."
                        tools={["n8n", "WhatsApp Business Cloud", "Google Gemini", "SerpAPI"]}
                        image="/n8n2.png"
                        reverse
                    />

                    <ProjectCard
                        title="Smart Gmail Inbox Classifier"
                        description="Inbox overload is a real problem. I designed an automation that reads new emails, checks history, and applies smart Gmail labels automatically using LangChain and n8n."
                        result="Important messages surface instantly, while noise gets filtered away."
                        tools={["n8n", "Gmail API", "LangChain", "OpenRouter"]}
                        image="/n8n3.png"
                    />

                    <ProjectCard
                        title="Crypto Intelligence Agent"
                        description="I built an AI agent that pulls data from CoinMarketCap, analyzes it with GPT, and turns complex crypto trends into plain-language insights."
                        result="Traders received real-time market summaries without hours of manual research."
                        tools={["n8n", "CoinMarketCap API", "GPT"]}
                        image="/n8n4.png"
                        reverse
                    />

                    <ProjectCard
                        title="Internal Smart Chat Agent"
                        description="Inside n8n, I built a chatbot that handles math, knowledge lookups, and context-aware follow-ups. It dynamically decides whether to calculate, search, or recall context."
                        result="A flexible internal assistant for quick answers and support."
                        tools={["n8n", "OpenAI", "Wikipedia API", "Memory Module"]}
                        image="/n8n5.png"
                    />

                    <ProjectCard
                        title="Gmail Outreach from Google Sheets"
                        description="For follow-ups and campaigns, I automated Gmail sending directly from Google Sheets. The system checked dates, status, and sent personalized emails automatically."
                        result="No more missed reminders, and outreach happened right on time."
                        tools={["n8n", "Google Sheets API", "Gmail API"]}
                        image="/n8n6.png"
                        reverse
                    />

                    <ProjectCard
                        title="Content Automation Pipelines"
                        description="Marketing teams needed to repurpose and publish faster. I built end-to-end systems that:"
                        descriptionList={[
                            "Turn long videos into platform-ready clips",
                            "Automate podcast publishing with Descript + Make.com",
                            "Centralize planning in Notion dashboards",
                            "Auto-generate captions and hashtags for social",
                        ]}
                        result="Campaigns launched in a fraction of the time with consistent branding."
                        tools={["n8n", "Make.com", "Airtable", "Notion", "Descript", "OpenAI"]}
                        image="/n8n7.png"
                    />
                </main>

            </div>
            <main className="space-y-16 max-w-7xl mx-auto px-6 py-16">
                <h3 className="flex items-center justify-center text-2xl md:text-4xl w-fit mx-auto dark:p-2 dark:rounded font-extrabold dark:text-black dark:bg-white gap-3 mb-12">
                    <Image
                        src="/aloware-logo.png" // replace with your actual logo path
                        alt="Aloware Logo"
                        width={300}
                        height={300}
                        className='w-[150px] md:w-[300px] object-contain'
                    />
                    Projects
                </h3>

                <ProjectCard
                    title="SMS Lead Engagement Workflow"
                    description="I used Aloware to automate SMS campaigns connected directly with CRMs like HubSpot and Zoho. Leads received personalized responses, follow-ups triggered automatically, and all activity synced back into the CRM."
                    result="Higher engagement rates and smoother sales hand-offs."
                    tools={["Aloware, HubSpot, Zoho CRM, Twilio"]}
                    image="/aloware1.png"
                />
            </main>
            <div className='bg-[#D9D9D9] bg-opacity-30'>
                <main className=" space-y-16 max-w-7xl mx-auto px-6 py-10">
                    <h3 className="flex items-center justify-center text-2xl md:text-4xl font-extrabold gap-3 mb-6">
                        <Image
                            src="/make-logo.png" // replace with your actual logo path
                            alt="Make Logo"
                            width={300}
                            height={300}
                            className='w-[200px] md:w-[230px]  object-contain'
                        />
                        Projects
                    </h3>

                    <ProjectCard
                        title="Qualified Lead Capture & Scheduling"
                        description="On the TEAT website, form submissions were messy. I built a workflow that screened leads, pushed qualified ones into Salesforce, and automatically scheduled meetings through Calendly."
                        result="No more lost leads, faster handovers, and higher booking rates."
                        tools={["Make.com, Salesforce, Twilio, Calendly"]}
                        image="/make1.png"
                    />
                </main>
            </div>
            <main className=" space-y-16 max-w-7xl mx-auto px-6 py-16">
                <ProjectCard
                    title="Website Chatbot for Conversions"
                    description="I designed a chatbot that welcomed visitors, shared product details, captured emails, and sent a welcome message right away."
                    result="Casual visitors turned into engaged prospects automatically."
                    tools={["Make.com, Gmail, Webflow"]}
                    image="/make2.png"
                    reverse
                />
            </main>
            <div className='bg-[#D9D9D9] bg-opacity-30'>
                <main className=" space-y-16 max-w-7xl mx-auto px-6 py-16">
                    <ProjectCard
                        title="Automated Driver Pay & Billing"
                        description="For a logistics company, I created a workflow that logged tasks in Zoho CRM, calculated revenue, synced billing with QuickBooks, and processed weekly driver pay."
                        result="Payments became accurate and on-time without manual spreadsheets."
                        tools={[" Make.com, Onfleet, Zoho CRM, QuickBooks"]}
                        image="/make3.png"
                    />
                </main>
            </div>
            <main className=" space-y-16 max-w-7xl mx-auto px-6 py-16">
                <ProjectCard
                    title="Financial Data Automation"
                    description="Financial advisors needed faster insights. I built a system that collected data into Google Sheets, generated CSV reports, and used AI to create guidance for clients."
                    result="Advisors responded to multiple client queries quickly and with confidence."
                    tools={["Make.com, Google Sheets, OpenAI"]}
                    image="/make4.png"
                    reverse
                />
            </main>
            <main className=" space-y-16 max-w-7xl mx-auto px-6 py-10">
                <h3 className="flex items-center justify-center text-2xl md:text-4xl w-fit mx-auto dark:p-2 dark:rounded font-extrabold dark:text-black dark:bg-white gap-3 mb-12">
                    <Image
                        src="/zapier-logo.png" // replace with your actual logo path
                        alt="Zapier Logo"
                        width={300}
                        height={300}
                        className='w-[150px] md:w-[200px]  object-contain'
                    />
                    Projects
                </h3>

                <ProjectCard
                    title="Full Marketing, Sales, and Fulfillment Automation"
                    description="I connected Meta and Google Ads with CRMs, Slack, Google Sheets, Shopify, and Stripe/PayPal, all through Zapier. Leads were captured, logged, nurtured with campaigns, booked for consultations, and their orders processed to delivery. Reviews and analytics closed the loop."
                    result="A true end-to-end pipeline that saved time, reduced errors, and created a seamless customer journey."
                    tools={[
                        "Zapier",
                        "HubSpot",
                        "ActiveCampaign",
                        "Shopify",
                        "Stripe",
                        "PayPal",
                        "Google Ads",
                        "Meta Ads",
                    ]}
                    image="/zapier1.png"
                />

                <ProjectCard
                    title="First Campaign Launch – Client Update & TikTok Buyer Notification"
                    description="I created a Zapier automation to simplify campaign launches and cut out repetitive manual steps. When a launch form is submitted, the workflow automatically updates client records in Google Sheets, checks if the client is traditional, and then pulls the right details to notify the assigned TikTok buyer. Everything happens seamlessly in the background, so the team doesn’t have to chase updates."
                    result="Campaigns moved faster, client records stayed accurate, and buyers were instantly notified—without anyone lifting a finger."
                    tools={["Zapier", "Google Forms", "Google Sheets"]}
                    image="/zapier2.png"
                    reverse
                />

                <ProjectCard
                    title="AA Fence WP Form – Contact Page Automation"
                    description="I set up a Zapier workflow to handle AA Fence’s contact form submissions seamlessly. Each new entry is captured instantly, logged into both a Master List and a dedicated tracking sheet in Google Sheets, and followed up with an automatic email reply through Gmail."
                    result="Every inquiry is recorded and acknowledged right away, giving the company faster responses, reliable lead tracking, and a more professional first impression."
                    tools={["Zapier", "WPForms", "Google Sheets", "Gmail"]}
                    image="/zapier3.png"
                />

                <ProjectCard
                    title="Lead Automation – Sky Clean Air (Meta Ads)"
                    description="I built a Zapier workflow to instantly capture new leads from Facebook Lead Ads and log them into Google Sheets. As soon as a lead comes in, the system triggers an automated Gmail follow-up, making sure potential customers hear back right away."
                    result="No leads were ever missed, response times dropped to near-instant, and engagement rates improved significantly."
                    tools={["Zapier", "Facebook Lead Ads", "Google Sheets", "Gmail"]}
                    image="/zapier4.png"
                    reverse
                />

            </main>
            <main className=" space-y-16 max-w-7xl mx-auto px-6 py-10 mb-6">
                <h3 className="flex items-center justify-center text-2xl md:text-4xl w-fit mx-auto dark:p-2 dark:rounded font-extrabold dark:text-black dark:bg-white gap-3 mb-12">
                    <Image
                        src="/ghl-logo.png" // replace with your actual logo path
                        alt="GHL Logo"
                        width={300}
                        height={300}
                        className='w-[150px] md:w-[200px]  object-contain'
                    />
                    Projects
                </h3>

                <ProjectCard
                    title="New Patient Appointment Workflow Automation"
                    description="I designed a GoHighLevel automation to make new patient onboarding effortless. As soon as an appointment is booked, the system assigns the patient to a staff member, creates a pipeline record, and tags them as 'New Patient.' From there, it sends a personalized confirmation with clinic details, plus SMS reminders that adjust depending on whether the appointment was booked internally or by the patient online."
                    result="Every lead is captured, staff are always prepared, and patients enjoy a clear, welcoming first experience without missed follow-ups."
                    tools={["GoHighLevel (Workflows, CRM, Email, SMS)"]}
                    image="/ghl1.png"
                />

                <ProjectCard
                    title="Zoom Appointment Workflow Automation"
                    description="I created a GoHighLevel automation to take the stress out of managing Zoom appointments. Whether it was a Consult, Report of Findings, Progress Review, or Check-In, the workflow handled everything: sending confirmations, delivering email and SMS reminders 24 hours and 30 minutes before, and keeping the CRM pipeline up to date. It also tagged patients based on their care plan, making follow-ups more personalized."
                    result="Fewer no-shows, less manual work for staff, and a smooth, reliable experience for every patient type."
                    tools={["GoHighLevel (Workflows, CRM, Email, SMS)"]}
                    image="/ghl2.png"
                    reverse
                />

                <ProjectCard
                    title="Automated Weekly Wellness Email & SMS Campaign"
                    description="I built a GoHighLevel automation to keep patients connected and motivated between visits. Every Tuesday, the system sends an AI-crafted email with wellness tips, using smart subject lines to boost open rates. On Thursdays, it follows up with a supportive SMS—tailored separately for parents of pediatric patients or for adults on their own care plans. The workflow resets automatically each week, so communication never slips."
                    result="Patients felt consistently supported, staff saved time on repetitive outreach, and the clinic built stronger, long-term relationships through steady engagement."
                    tools={["GoHighLevel (Workflows, Email, SMS, AI Content)"]}
                    image="/ghl3.png"
                />
            </main>

            <section className="max-w-6xl mx-auto px-6 py-8 mb-10">
                <div className="relative rounded-xl p-6 bg-white text-gray-700 leading-relaxed">
                    {/* Glow background */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 blur-2xl opacity-60 -z-10"></div>
                    <p>
                        Every project here started with a bottleneck: too many manual steps,
                        scattered data, or missed opportunities. Through{" "}
                        <span className="font-semibold">
                            workflow automation and AI–driven solutions
                        </span>
                        , I transformed those problems into streamlined systems that run
                        quietly in the background, freeing people to focus on growth, not
                        grunt work. If you’re ready to{" "}
                        <span className="font-semibold">automate your workflows</span>, let’s
                        talk about building a solution tailored for your business.
                    </p>
                </div>
            </section>
        </div>

    )
}

export default page