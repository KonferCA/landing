import {
    AvalancheBrand,
    ETHTorontoLogo,
    ETHWomenLogo,
    HawkHacksBrand,
    LCSLogo,
    NEARTorontoBrand,
    SPURBrand,
    SPURLogo,
} from '@assets';

const Partners = () => {
    return (
        <section id="partners">
            <h1 className="text-4xl mb-6 lg:text-5xl lg:mb-0 font-bold text-center">
                Partners
            </h1>
            <div className="pt-6 max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-12">
                    <img src={HawkHacksBrand} className="grayscale" />
                    <img src={AvalancheBrand} className="grayscale -mt-5" />
                    <img src={NEARTorontoBrand} className="grayscale" />
                    <img src={SPURBrand} className="grayscale" />
                </div>
                <div className="bg-[#0E0E0E] rounded-md p-10 mt-10">
                    <h2 className="text-3xl text-center font-bold">
                        Community Partners
                    </h2>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-12 pt-10">
                        <img src={LCSLogo} className="" />
                        <img src={SPURLogo} className="" />
                        <img src={ETHTorontoLogo} className="" />
                        <img src={ETHWomenLogo} className="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Partners };
