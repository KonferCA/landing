import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 mt-4 left-0 right-0 mx-auto w-full max-w-7xl text-white py-4 px-8 md:px-16 flex items-center justify-between z-50 ${scrolled ? 'bg-opacity-50 bg-[#1C1C1C] rounded-3xl shadow-lg backdrop-filter backdrop-blur-lg' : ''}`}>
            <div className="flex items-center">
                <Link to="hero" offset={-75} smooth={true} duration={500}>
                    <img
                        src="/konfer_logo.svg"
                        alt="Konfer Logo"
                        className="h-8 w-auto ml-0 lg:ml-10 mr-4 md:mr-6"
                    > 
                    </img>
                </Link>
            </div>

            {/* TODO: Update mobile menu to match figma */}
            <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:flex-grow md:justify-center absolute md:static top-full left-0 w-full md:w-auto md:bg-transparent`}>
                <ul className="flex space-x-4 md:space-x-6 cursor-pointer font-bold text-base md:text-lg">
                    <li className="hover:underline"><Link to="about-us" offset={-75} smooth={true} duration={500} onClick={toggleMenu}> About Us </Link></li>
                    <li className="hover:underline"><Link to="past-events" offset={-75} smooth={true} duration={500} onClick={toggleMenu}> Past Events </Link></li>
                    <li className="hover:underline"><Link to="partners" offset={-75} smooth={true} duration={500} onClick={toggleMenu}> Partners </Link></li>
                </ul>
            </nav>

            <div className="md:hidden mr-0">
                <button className="text-white focus:outline-none" onClick={toggleMenu}>                    
                    {isOpen ? (
                        <FaTimes className="h-6 w-6" />
                    ) : (
                        <FaBars className="h-6 w-6" />
                    )}
                </button>
            </div>

            <div className="hidden md:block">
                <Link to="contact" offset={-75} smooth={true} duration={500} className="text-white px-4 py-2 lg:mr-10 rounded cursor-pointer font-bold text-lg hover:underline"> Contact </Link>         
            </div>
        </header>
    );
}

export { Header };