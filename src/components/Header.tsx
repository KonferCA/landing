import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from "react-icons/io5";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsChat } from "react-icons/bs";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "tween",
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 0.3
            }
        }
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const ContactButton = () => (
        <a
            href="mailto:hello@konfer.ca"
            className="
                inline-flex items-center justify-center
                text-white font-semibold
                h-10
                px-4
                rounded-3xl
                bg-gradient-to-r from-azure to-celestial-blue
                shadow-lg shadow-celestial-blue/20
                hover:shadow-xl hover:shadow-celestial-blue/30
                hover:translate-y-[-2px]
                active:translate-y-[1px]
                font-inter tracking-wide
                transition-all duration-200
                border border-white/10
                backdrop-blur-sm
                group
            "
        >
            Contact Us
            <BsChat className="ml-2 mb-0.5 group-hover:scale-110 transition-transform duration-200" />
        </a>
    );

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Link
                            to="hero"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="cursor-pointer"
                        >
                            <img
                                src="/konfer_logo.svg"
                                alt="Konfer"
                                className="h-8"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="about-us"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            About Us
                        </Link>
                        <Link
                            to="past-events"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            Our Work
                        </Link>
                        <Link
                            to="partners"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            Partners
                        </Link>
                        <ContactButton />
                    </nav>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-white p-2"
                    >
                        <div className="space-y-1.5">
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                        </div>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-[#1C1C1C] z-50 md:hidden"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center p-4">
                                <Link
                                    to="hero"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    onClick={handleLinkClick}
                                    className="cursor-pointer"
                                >
                                    <img
                                    src="/konfer_logo.svg"
                                    alt="Konfer"
                                    className="h-8"
                                    />
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white p-2"
                                >
                                    <IoCloseOutline size={32} />
                                </button>
                            </div>

                            <nav className="flex-1 flex flex-col px-8 pt-12 space-y-6">
                                <Link
                                    to="about-us"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    onClick={handleLinkClick}
                                    className="text-gray-300 text-2xl cursor-pointer"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="past-events"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    onClick={handleLinkClick}
                                    className="text-gray-300 text-2xl cursor-pointer"
                                >
                                    Our Work
                                </Link>
                                <Link
                                    to="partners"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    onClick={handleLinkClick}
                                    className="text-gray-300 text-2xl cursor-pointer"
                                >
                                    Partners
                                </Link>
                            </nav>

                            <div className="p-8 space-y-8">
                                <div className="text-left ml-0">
                                    <h2 className="text-white text-2xl mb-2 font-bold">Ready to Innovate?</h2>
                                    <a
                                        href="mailto:hello@konfer.ca"
                                        className="
                                            inline-flex items-center justify-center
                                            text-white font-semibold
                                            h-10
                                            px-4
                                            rounded-3xl
                                            bg-gradient-to-r from-azure to-celestial-blue
                                            shadow-lg shadow-celestial-blue/20
                                            hover:shadow-xl hover:shadow-celestial-blue/30
                                            hover:translate-y-[-2px]
                                            active:translate-y-[1px]
                                            font-inter tracking-wide
                                            transition-all duration-200
                                            border border-white/10
                                            backdrop-blur-sm
                                            group
                                        "
                                    >
                                        hello@konfer.ca
                                        <BsChat className="ml-2 mb-0.5 group-hover:scale-110 transition-transform duration-200" />
                                    </a>
                                </div>

                                <div className="flex justify-left gap-6">
                                    <a href="https://x.com/Konferca" className="text-white">
                                        <FaXTwitter size={24} />
                                    </a>
                                    <a href="https://instagram.com/konfer.ca/" className="text-white">
                                        <FaInstagram size={24} />
                                    </a>
                                    <a href="https://linkedin.com/company/konferca/" className="text-white">
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export { Header };