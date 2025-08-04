import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Components/Footer.jsx";
import { motion } from "framer-motion";
import One from "../assets/1.jpg"
import Two from "../assets/2.jpg"
import Three from "../assets/3.jpg"
import Four from "../assets/4.jpg"
import Five from "../assets/5.jpg"
import Six from "../assets/6.jpg"
import PartnerOne from "../assets/p1.svg"
import PartnerTwo from "../assets/p2.svg"
import PartnerThree from "../assets/p3.svg"
import PartnerFour from "../assets/p4.svg"
import PartnerFive from "../assets/p5.svg"
import PartnerSix from "../assets/p6.svg"
import PartnerSeven from "../assets/p7.svg"

const Home = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [contentVisible, setContentVisible] = useState(true);
    const [visibleImages, setVisibleImages] = useState(1);
    const [servicesRef, setServicesRef] = useState(null);
    const service = [One, Two, Three, Four, Five, Six];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });

            if (servicesRef) {
                const rect = servicesRef.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionHeight = rect.height;
                const cursorY = e.clientY;

                if (cursorY >= sectionTop && cursorY <= sectionTop + sectionHeight) {
                    const progress = Math.max(0, Math.min(1, (cursorY - sectionTop) / sectionHeight));
                    const imagesToShow = Math.floor(1 + (progress * (service.length - 1)));
                    setVisibleImages(imagesToShow);
                } else if (cursorY < sectionTop) {
                    setVisibleImages(1);
                }
            }
        };

        const handleMouseDown = () => {
            setContentVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [servicesRef, service.length]);

    const marketingServices = [
        { title: "🎥 Special Video Shoot & 📸 Photo Shoot", description: "From cinematic brand videos to high-quality product photography, our team creates compelling visual content that tells your story and captivates your audience." },
        { title: "📰 PR Services", description: "Strengthen your brand's presence with our professional public relations services. We manage your media outreach, press coverage, event promotions, and influencer collaborations to build credibility and visibility." },
        { title: "Search Engine Optimization (SEO)", description: "Boost your visibility and traffic through targeted keyword strategies, technical optimization, and high-quality backlinks." },
        { title: "Social Media Marketing (SMM)", description: "Engage your audience and grow your brand across platforms like Instagram, Facebook, LinkedIn, and YouTube with creative content and data-driven campaigns." },
        { title: "Performance Marketing", description: "Drive measurable results through conversion-focused ads across Google, Meta, and other platforms." },
        { title: "Google Ads & PPC Campaigns", description: "Maximize ROI with smart bidding, keyword targeting, and conversion tracking." },
        { title: "Email Marketing", description: "Reach your audience directly with personalized, action-oriented email campaigns." },
        { title: "Content Marketing", description: "Deliver value and build authority through articles, blogs, landing pages, and more." },
        { title: "Influencer Marketing", description: "Partner with trusted influencers to authentically promote your brand and boost reach." },
        { title: "Remarketing & Retargeting", description: "Re-engage lost visitors with customized ads and bring them back to your website." },
        { title: "Display Advertising", description: "Reach new audiences with engaging visual ads placed on high-traffic websites." },
        { title: "Video Marketing", description: "Share your story through product demos, testimonials, animated explainers, and brand promos." },
        { title: "Website Development & Optimization", description: "Build fast, responsive, and conversion-friendly websites using platforms like Next.js and WordPress." },
        { title: "Online Reputation Management (ORM)", description: "Protect and enhance your brand image through strategic review management and response strategies." },
        { title: "WhatsApp & SMS Marketing", description: "Send direct, real-time communication to your customers with promotional and transactional campaigns." },
        { title: "Marketplace Marketing (Amazon, Flipkart, etc.)", description: "Optimize and promote your products on major marketplaces to drive eCommerce sales." }
    ];

    const Teams = [
        {
            title: "Meet the Trivaan Ads Team",
            description: "At Trivaan Ads, we combine creativity, technology, and strategy to deliver digital marketing solutions that help your brand grow and connect with the right audience. Our dedicated team of experts works collaboratively to ensure every project exceeds expectations."
        },
        {
            title: "Digital Marketing Manager",
            description: "Leads overall marketing strategy, campaign planning, and team coordination to ensure every project aligns with your brand goals and delivers measurable results."
        },
        {
            title: "Content Creator",
            description: "Develops engaging and relevant content across platforms — from blogs and articles to ad copy and scripts — to communicate your brand's unique voice."
        },
        {
            title: "Social Media Manager",
            description: "Manages and grows your social media presence by creating, scheduling, and interacting with your audience on platforms like Instagram, Facebook, LinkedIn, and more"
        },
        {
            title: "Graphic Designer",
            description: "Creates compelling visuals including digital ads, branding materials, social media graphics, and promotional assets that catch the eye and convey your message clearly"
        },
        {
            title: "Video Editor",
            description: "Transforms raw footage into polished videos — whether ads, promos, or social media clips — that captivate viewers and boost engagement."
        },
        {
            title: "Photographer / Videographer",
            description: "Captures high-quality images and videos for your campaigns, product shoots, events, and more, ensuring your brand looks its best across all channels."
        },
        {
            title: "SEO Specialist",
            description: "Optimizes your website and content to improve search engine rankings, increase organic traffic, and enhance overall online visibility."
        },
        {
            title: "Paid Ads Specialist",
            description: "Plans and manages paid advertising campaigns on platforms like Google Ads and social media, driving targeted traffic and maximizing ROI."
        },
        {
            title: "Web Developer",
            description: "Builds and maintains responsive, user-friendly websites and landing pages designed to convert visitors into customers."
        },
        {
            title: "Email Marketing Specialist",
            description: "Designs and executes personalized email campaigns that nurture leads, promote products, and build customer loyalty."
        },
        {
            title: "Analytics Specialist",
            description: "Tracks, analyzes, and reports campaign performance data to provide insights and optimize marketing strategies for continuous improvement."
        },
        {
            title: "Production Assistant",
            description: "Supports video/photo shoots and marketing projects by handling logistics, equipment, and coordination, ensuring smooth and efficient operations."
        },
    ]

    const PartnerDetails = [
        {
            img: PartnerOne,
            details: "Pioneering digital marketing innovators redefining brand strategies.",
            Navigate: "/"
        },
        {
            img: PartnerTwo,
            details: "Leaders in sustainable marketing practices and ethical campaigns.",
            Navigate: "/"
        },
        {
            img: PartnerThree,
            details: "Curators of the latest global marketing trends and technologies.",
            Navigate: "/"
        },
        {
            img: PartnerFour,
            details: "Suppliers of premium-quality content for high-end brands.",
            Navigate: "/"
        },
        {
            img: PartnerFive,
            details: "Masters of digital design bringing marketing concepts to life.",
            Navigate: "/"
        },
        {
            img: PartnerSix,
            details: "Creators of distinctive and impactful marketing campaigns.",
            Navigate: "/"
        },
        {
            img: PartnerSeven,
            details: "Experts merging technology with marketing to shape the future.",
            Navigate: "/"
        },
    ]

    return (
        <>
            <div className="bg-black min-h-screen flex flex-col text-white font-sans relative overflow-x-hidden">
                <Navbar />

                {/* Roller cursor - Hide on mobile */}
                <div
                    className="pointer-events-none fixed z-50 border border-white rounded-full w-8 h-8 transition-transform duration-75 hidden md:block"
                    style={{ left: cursorPos.x - 16, top: cursorPos.y - 16 }}
                ></div>

                {contentVisible && (
                    <>
                        {/* Hero Section */}
                        <main className="flex-grow flex items-center justify-center text-center py-12 px-4 sm:py-18">
                            <motion.h1
                                className="text-[12vw] sm:text-[10vw] lg:text-[8vw] font-extrabold tracking-tight"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <span className="text-white">Trivaan</span>
                                <span className="text-gray-500">.Ads.</span>
                            </motion.h1>
                        </main>

                        {/* Footer menu */}
                        <section className="px-4 sm:px-8 py-4 text-sm border-t border-gray-700">
                            <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-xl font-semibold uppercase">
                                {["About", "Services", "Blogs", "Contact-Us", "Carrier"].map((label) => (
                                    <div key={label} className="flex gap-2 group">
                                        <li className="transition-transform duration-300 group-hover:translate-x-2">
                                            <a href="">{label}</a>
                                        </li>
                                        <FaArrowRight className="mt-1 opacity-0 group-hover:opacity-100 transition duration-300" />
                                    </div>
                                ))}
                            </ul>
                        </section>

                        {/* What We Do Section */}
                        <section className="min-h-screen w-full p-4 sm:p-8 lg:p-20 flex flex-col justify-between">
                            {/* Top main text */}
                            <div className="flex-grow flex items-center">
                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans leading-tight max-w-5xl">
                                    We are trendsetters in the digital marketing industry, blending innovative
                                    strategies with a passion for results.
                                </p>
                            </div>

                            {/* Bottom three-part section */}
                            <div className="w-full border-t border-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0 pt-6 lg:pt-0 lg:h-40 lg:px-20">
                                {/* Left label */}
                                <div className="w-full lg:w-auto">
                                    <p className="uppercase text-zinc-500 font-semibold tracking-widest text-sm">
                                        What we do
                                    </p>
                                </div>

                                {/* Center description */}
                                <div className="w-full lg:max-w-xl">
                                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
                                        We craft exceptional digital marketing campaigns, merging
                                        cutting-edge technology with proven strategies.
                                    </p>
                                </div>

                                {/* Right circular button */}
                                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center border border-white rounded-full overflow-hidden">
                                        {/* Rotating ring */}
                                        <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>

                                        {/* Static center icon */}
                                        <div className="relative z-10">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 sm:h-8 sm:w-8"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="white"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 12h14M12 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* About Us */}
                        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-16 space-y-4 sm:space-y-6">
                            <motion.h2 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold" 
                                initial={{ opacity: 0, y: 40 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.6 }}
                            >
                                About Us
                            </motion.h2>
                            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                                Welcome to Trivaan Ads, a full-service agency specializing in result-oriented digital marketing solutions. As a leading provider of digital marketing services in India, we help brands grow, engage, and convert through innovative online strategies and powerful creative execution.
                            </p>
                            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                                At Trivaan Ads, we offer more than just marketing services—we deliver scalable, data-driven campaigns that bring measurable success. Whether you're looking to boost brand awareness, increase leads, or dominate your niche, our expert team has you covered.
                            </p>
                            <p className="text-base sm:text-lg">Our core <span className="font-bold">digital marketing services</span> include:</p>
                            
                            {/* Services list with responsive layout */}
                            <div className="space-y-3 sm:space-y-4">
                                <p className="text-sm sm:text-base"><span className="font-bold">Social Media Marketing (SMM):</span> <span className="text-zinc-400">Build and engage your audience across Facebook, Instagram, LinkedIn, and more</span></p>
                                <p className="text-sm sm:text-base"><span className="font-bold">SEO Marketing:</span> <span className="text-zinc-400">Rank higher in search engine results and increase organic traffic</span></p>
                                <p className="text-sm sm:text-base"><span className="font-bold">Display Advertising:</span> <span className="text-zinc-400">Capture attention with high-impact visual ads across the web</span></p>
                                <p className="text-sm sm:text-base"><span className="font-bold">Remarketing:</span> <span className="text-zinc-400">Reconnect with users and convert visitors into customers</span></p>
                                <p className="text-sm sm:text-base"><span className="font-bold">Content Marketing:</span> <span className="text-zinc-400">Tell your story and provide value with blogs, articles, and campaigns</span></p>
                                <p className="text-sm sm:text-base"><span className="font-bold">Influencer Marketing:</span> <span className="text-zinc-400">Leverage trusted voices to promote your brand authentically</span></p>
                                <p className="text-sm sm:text-base"><span className="font-bold">Video Marketing:</span> <span className="text-zinc-400">Deliver your message with compelling video content</span></p>
                                <p className="text-sm sm:text-base"><span className="font-bold">PR Services:</span> <span className="text-zinc-400">Build credibility and media presence with strategic public relations</span></p>
                                <p className="text-sm sm:text-base"><span className="font-bold">Digital Marketing Ads:</span> <span className="text-zinc-400">Launch high-performing ad campaigns tailored to your goals</span></p>
                            </div>
                            
                            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                                With a strong foundation in digital marketing India, our team brings global thinking and local expertise. From internet marketing to social media marketing services, we help brands navigate the digital landscape with confidence.
                            </p>
                            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                                Partner with Trivaan Ads for forward-thinking marketing solutions that drive real results.
                            </p>
                        </section>

                        {/* Our Services - Progressive reveal with images */}
                        {/* <section ref={setServicesRef} className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-16 bg-zinc-900 space-y-6 sm:space-y-12 min-h-screen">
                            <motion.h2 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" 
                                initial={{ opacity: 0, y: 40 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.6 }}
                            >
                                Our Services
                            </motion.h2>
                            
                          
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8">
                                {service.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        className={`h-32 sm:h-40 w-full overflow-hidden rounded-lg ${index >= visibleImages ? 'invisible' : 'visible'}`}
                                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                        animate={{ 
                                            opacity: index < visibleImages ? 1 : 0, 
                                            y: index < visibleImages ? 0 : 30,
                                            scale: index < visibleImages ? 1 : 0.8
                                        }}
                                        transition={{ 
                                            duration: 0.4,
                                            ease: "easeOut",
                                            delay: index < visibleImages ? index * 0.1 : 0
                                        }}
                                    >
                                        {index < visibleImages && (
                                            <img 
                                                src={img} 
                                                alt={`Service ${index + 1}`} 
                                                className="w-full h-full object-cover transition-all duration-300"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-center mb-6">
                                <div className="flex space-x-2">
                                    {service.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index < visibleImages ? 'bg-white' : 'bg-zinc-600'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            
                         
                            <div className="text-center text-zinc-400 text-sm mb-8">
                                Move your cursor down through this section to reveal all services ({visibleImages}/{service.length} visible)
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                {marketingServices.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-zinc-800 p-4 sm:p-6 rounded-lg shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section> */}

                        {/* Our Team - Responsive layout */}
                        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-16 space-y-6 sm:space-y-8">
                            <motion.h2 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" 
                                initial={{ opacity: 0, y: 40 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.6 }}
                            >
                                Our Team
                            </motion.h2>
                            
                            {/* Team grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                                {["Digital Marketing Manager", "Content Creator", "Social Media Manager", "Graphic Designer", "SEO Specialist", "Web Developer"].map((member, i) => (
                                    <motion.div
                                        key={i}
                                        className="p-4 sm:p-6 border border-zinc-700 rounded-lg"
                                        initial={{ opacity: 0, y: 60 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                    >
                                        <h4 className="text-base sm:text-lg font-semibold mb-1">{member}</h4>
                                        <p className="text-xs sm:text-sm text-zinc-400">Expert in {member.toLowerCase()} and contributes to impactful campaigns.</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Team details */}
                            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
                                {Teams.map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className="space-y-2 sm:space-y-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">{item.title}</h1>
                                        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Our Partners - Fixed and Responsive */}
                        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-16 bg-zinc-950 space-y-6">
                            <motion.h2 
                                className="text-3xl sm:text-4xl lg:text-7xl font-serif font-bold text-white text-center" 
                                initial={{ opacity: 0, y: 40 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.6 }}
                            >
                                Our Partners
                            </motion.h2>
                            <p className="uppercase font-sans text-center text-zinc-600 font-semibold text-xs sm:text-sm">
                                -Trusted partners in digital marketing excellence-
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {PartnerDetails.map((item, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="flex flex-col items-center justify-center border border-zinc-800 rounded-md bg-black p-4 sm:p-6 min-h-[200px] sm:min-h-[250px] text-center hover:border-zinc-600 transition-colors duration-300" 
                                        initial={{ opacity: 0, y: 20 }} 
                                        whileInView={{ opacity: 1, y: 0 }} 
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.img && (
                                            <img 
                                                src={item.img} 
                                                alt={`Partner ${index + 1}`} 
                                                className="max-h-12 sm:max-h-16 mb-3 sm:mb-4 object-contain filter brightness-75 hover:brightness-100 transition-all duration-300" 
                                            />
                                        )}
                                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                                            {item.details}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Home;