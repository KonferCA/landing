import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { FooterIcon } from "@assets";

const Footer = () => {
    return (
        <div>
            <hr className="border-t-1 border-[#3D3D3D] mt-12 mb-12" />
            
            <footer>
                <div className="grid grid-cols-2 gap-2">
                    <div className="pl-6 lg:pl-12">
                        <img src={FooterIcon} alt="footer-icon" className="w-36 lg:w-72" />
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
                            className="
                                inline-flex items-center justify-center
                                text-white font-semibold
                                text-sm lg:text-lg
                                h-10 lg:h-12
                                px-4 lg:px-6
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
                                mt-4
                                group
                            "
                        >
                            hello@konfer.ca
                            <BsChat className="ml-2 mb-0.5 hidden lg:inline-block group-hover:scale-110 transition-transform duration-200" />
                        </a>
                    </div>
                </div>
                <hr className="border-t-1 border-[#3D3D3D] mt-14 mb-8 ml-12 mr-12 w-auto" />
                <p className="text-sm text-white text-center lg:text-left lg:ml-12 pb-12">
                    Konfer &copy; 2024. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export { Footer };