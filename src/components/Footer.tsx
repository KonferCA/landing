import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsChat } from "react-icons/bs";

import { footerIcon } from "@assets";

// TODO: Match the footer design with the Figma design
const Footer = () => {
    return (
        <div>
            <hr className="border-t-1 border-[#3D3D3D] mt-12 mb-12" />
            
            <footer>
                <div className="grid grid-cols-2 gap-2">
                    <div className="pl-6 lg:pl-12">
                        <img src={footerIcon} alt="footer-icon" className="w-36 lg:w-72" />

                        <div className="flex gap-4 mt-4">
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

                        <p className="text-sm lg:text-md text-white font-bold mt-6 mb-4">
                            Canada
                        </p>

                        <a 
                            href="https://maps.app.goo.gl/eYvWwuUKGzNMUVyMA"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm lg:text-md text-white hover:underline"
                        >
                            283 Duke St West, <br />
                            Kitchener, ON N2H 5C2
                        </a>
                    </div>

                    <div className="text-right pr-6 lg:pr-12">
                        <h2 className="text-lg font-bold text-white lg:text-2xl"> Ready to Innovate? </h2>

                        <a
                            href="mailto:hello@konfer.ca"
                            className="inline-block text-white font-bold text-sm lg:text-xl py-2 px-2 lg:px-4 lg:py-4 rounded-full transition-colors duration-300 bg-gradient-to-r from-azure to-celestial-blue font-inter mt-4"
                        >
                            hello@konfer.ca
                            <BsChat className="lg:inline-block md:inline-block sm:inline-block text-lg lg:text-2xl text-white ml-2 mb-1 hidden" />
                        </a>
                    </div>
                </div>

                <hr className="border-t-1 border-[#3D3D3D] mt-14 mb-8 ml-12 mr-12 w-auto" />

                <p className="text-sm text-white text-center lg:text-left lg:ml-12 pb-12">
                    Konfer &copy; 2024 | <a href="https://www.konfer.ca"> Terms of Use </a>
                </p>
            </footer>
        </div>
    );
};

export { Footer };
