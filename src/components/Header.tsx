import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { IoCloseOutline } from "react-icons/io5";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsChat } from "react-icons/bs";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const toggleMenu = () => {
        if (!isOpen) {
            // Store current scroll position before locking
            setScrollPosition(window.scrollY);
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.width = '100%';
        } else {
            // Restore scroll position after unlocking
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollPosition);
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Cleanup scroll lock if component unmounts while menu is open
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, []);

    return (
        <header 
            className={`fixed top-0 mt-4 left-0 right-0 mx-auto w-full max-w-7xl text-white py-4 px-8 md:px-16 flex items-center justify-between z-50 ${
                scrolled ? 'bg-opacity-50 bg-[#1C1C1C] rounded-3xl shadow-lg backdrop-filter backdrop-blur-lg' : ''
            }`}
            style={isOpen ? { backgroundColor: '#1C1C1C' } : undefined}
        >
            <div className="flex items-center">
                <Link to="hero" offset={-75} smooth={true} duration={500}>
                    <img
                        src="/konfer_logo.svg"
                        alt="Konfer Logo"
                        className="h-8 w-auto ml-0 lg:ml-10 mr-4 md:mr-6"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:flex-grow md:justify-center">
                <ul className="flex space-x-6 cursor-pointer font-bold text-lg">
                    <li className="hover:underline">
                        <Link to="about-us" offset={-75} smooth={true} duration={500}>About Us</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="past-events" offset={-75} smooth={true} duration={500}>Past Events</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="partners" offset={-75} smooth={true} duration={500}>Partners</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center h-8">
                <button className="text-white focus:outline-none p-1" onClick={toggleMenu}>
                    {!isOpen && (
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className="w-full h-0.5 bg-white"></span>
                            <span className="w-full h-0.5 bg-white"></span>
                            <span className="w-full h-0.5 bg-white"></span>
                        </div>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-[#1C1C1C] z-50 md:hidden"
                    style={{ top: 0 }}
                >
                    <div className="flex flex-col min-h-screen px-8 py-4">
                        <div className="flex items-center justify-between">
                            <Link to="hero" offset={-75} smooth={true} duration={500}>
                                <img
                                    src="/konfer_logo.svg"
                                    alt="Konfer Logo"
                                    className="h-8 w-auto ml-0 lg:ml-10 mr-4 md:mr-6"
                                />
                            </Link>
                            <button 
                                onClick={toggleMenu} 
                                className="text-white focus:outline-none p-1"
                            >
                                <IoCloseOutline className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex-grow mt-12">
                            <ul className="space-y-6 text-gray-300">
                                <li>
                                    <Link 
                                        to="about-us" 
                                        onClick={toggleMenu} 
                                        offset={-75} 
                                        smooth={true} 
                                        duration={500} 
                                        className="text-xl"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="our-work" 
                                        onClick={toggleMenu} 
                                        offset={-75} 
                                        smooth={true} 
                                        duration={500} 
                                        className="text-xl"
                                    >
                                        Our Work
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="partners" 
                                        onClick={toggleMenu} 
                                        offset={-75} 
                                        smooth={true} 
                                        duration={500} 
                                        className="text-xl"
                                    >
                                        Partners
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="space-y-8 mb-8">
                            <div className="text-center">
                                <h2 className="text-2xl mb-4">Ready to Innovate?</h2>
                                <a
                                    href="mailto:hello@konfer.ca"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-azure to-celestial-blue text-white px-6 py-3 rounded-full"
                                >
                                    hello@konfer.ca
                                    <BsChat className="text-xl" />
                                </a>
                            </div>

                            <div className="flex justify-center gap-4">
                                <a 
                                    href="https://x.com/Konferca" 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-2xl text-white hover:text-azure"
                                >
                                    <FaXTwitter />
                                </a>
                                <a 
                                    href="https://instagram.com/konfer.ca/" 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-2xl text-white hover:text-azure"
                                >
                                    <FaInstagram />
                                </a>
                                <a 
                                    href="https://linkedin.com/company/konferca/" 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-2xl text-white hover:text-azure"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
                <Link
                    to="contact"
                    offset={-75}
                    smooth={true}
                    duration={500}
                    className="text-white px-4 py-2 lg:mr-10 rounded cursor-pointer font-bold text-lg hover:underline"
                >
                    Contact
                </Link>
            </div>
        </header>
    );
};

export { Header };