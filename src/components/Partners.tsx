import {
    AvalancheBrand,
    BlockchainFuturist,
    ETHTorontoLogo,
    ETHWomenLogo,
    HawkHacksBrand,
    LCSLogo,
    NEARTorontoBrand,
    SPURBrand,
    SPURLogo,
} from '@assets';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

const partnerInfo = {
    hawkhacks: {
        name: "HawkHacks",
        website: "https://hawkhacks.ca"
    },
    avalanche: {
        name: "Avalanche",
        website: "https://www.avax.network"
    },
    nearToronto: {
        name: "NEAR Toronto",
        website: "https://near.org"
    },
    spur: {
        name: "SPUR Innovation Centre",
        website: "https://spurinnovation.com"
    },
    lcs: {
        name: "Laurier Computing Society",
        website: "https://lauriercs.ca"
    },
    spurLogo: {
        name: "SPUR Innovation",
        website: "https://spurinnovation.com"
    },
    blockchainFuturist: {
        name: "Blockchain Futurist",
        website: 'https://www.futuristconference.com/'
    },
    ethToronto: {
        name: "ETH Toronto",
        website: "https://www.ethtoronto.ca"
    },
    ethWomen: {
        name: "ETH Women",
        website: "https://ethwomen.com"
    }
};

interface TooltipContentProps {
    name: string;
    website: string;
}

interface PartnerImageProps {
    src: string;
    info: { name: string; website: string };
    className: string;
}

const TooltipContent = ({ name, website }: TooltipContentProps) => (
    <div className="text-center">
        <div className="font-bold mb-1">{name}</div>
        <div className="text-sm text-blue-300">
            <a href={website} target="_blank" rel="noopener noreferrer">
                {website}
            </a>
        </div>
    </div>
);

const PartnerImage = ({ src, info, className }: PartnerImageProps) => (
    <Tippy 
        content={<TooltipContent name={info.name} website={info.website} />}
        theme="material"
        placement="top"
        arrow={true}
        duration={200}
        className="partner-tooltip"
        interactive={true}
    >
        <img src={src} className={className} />
    </Tippy>
);

const Partners = () => {
    return (
        <section id="partners" className="px-4 md:px-8 lg:px-16 xl:px-24">
            <h1 className="text-4xl font-bold text-center mb-12">
                Partners
            </h1>
            
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-16 gap-y-12 mb-12">
                    <div className="w-full flex justify-center">
                        <PartnerImage 
                            src={HawkHacksBrand} 
                            info={partnerInfo.hawkhacks}
                            className="grayscale w-[140px] sm:w-[180px] lg:w-[240px] hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <PartnerImage 
                            src={AvalancheBrand} 
                            info={partnerInfo.avalanche}
                            className="grayscale w-[120px] sm:w-[150px] lg:w-[200px] hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <PartnerImage 
                            src={NEARTorontoBrand} 
                            info={partnerInfo.nearToronto}
                            className="grayscale w-[130px] sm:w-[170px] lg:w-[220px] hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <PartnerImage 
                            src={SPURBrand} 
                            info={partnerInfo.spur}
                            className="grayscale w-[120px] sm:w-[150px] lg:w-[200px] hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="bg-[#0E0E0E] rounded-2xl p-8 lg:p-12">
                    <h2 className="text-3xl text-center font-bold mb-8 lg:mb-12">
                        Community partners
                    </h2>

                    <div className="hidden lg:grid lg:grid-cols-5 lg:gap-x-12 lg:place-items-center">
                        <PartnerImage 
                            src={LCSLogo} 
                            info={partnerInfo.lcs}
                            className="w-[90px] hover:scale-110 transition-all duration-300"
                        />
                        <PartnerImage 
                            src={SPURLogo} 
                            info={partnerInfo.spurLogo}
                            className="w-[80px] hover:scale-110 transition-all duration-300"
                        />
                        <PartnerImage 
                            src={BlockchainFuturist}
                            info={partnerInfo.blockchainFuturist}
                            className="w-[300px] hover:scale-110 transition-all duration-300"
                        />
                        <PartnerImage 
                            src={ETHTorontoLogo} 
                            info={partnerInfo.ethToronto}
                            className="w-[300px] hover:scale-110 transition-all duration-300"
                        />
                        <PartnerImage 
                            src={ETHWomenLogo} 
                            info={partnerInfo.ethWomen}
                            className="w-[250px] hover:scale-110 transition-all duration-300"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-8 place-items-center lg:hidden">
                        <PartnerImage 
                            src={LCSLogo} 
                            info={partnerInfo.lcs}
                            className="w-[60px] sm:w-[70px] hover:scale-110 transition-all duration-300"
                        />
                        <PartnerImage 
                            src={SPURLogo} 
                            info={partnerInfo.spurLogo}
                            className="w-[50px] sm:w-[60px] hover:scale-110 transition-all duration-300"
                        />
                        <PartnerImage 
                            src={BlockchainFuturist}
                            info={partnerInfo.blockchainFuturist}
                            className="w-[180px] sm:w-[220px] hover:scale-110 transition-all duration-300"
                        />
                        <PartnerImage 
                            src={ETHTorontoLogo} 
                            info={partnerInfo.ethToronto}
                            className="w-[180px] sm:w-[220px] hover:scale-110 transition-all duration-300"
                        />
                        <PartnerImage 
                            src={ETHWomenLogo} 
                            info={partnerInfo.ethWomen}
                            className="col-span-2 w-[150px] sm:w-[180px] hover:scale-110 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>


            <style>{`
                .partner-tooltip {
                    background-color: #1a1a1a !important;
                    border: 1px solid #333 !important;
                    padding: 0 !important;
                    border-radius: 16px !important;
                    max-width: 300px !important;
                }
                
                .tippy-box {
                    border-radius: 16px !important;
                }

                .tippy-content {
                    border-radius: 15px !important;
                }
                
                .tippy-arrow {
                    color: #1a1a1a !important;
                }

                .tippy-box[data-placement^='top'] > .tippy-arrow::before {
                    border-radius: 0 !important;
                }

                .partner-tooltip a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </section>
    );
};

export { Partners };