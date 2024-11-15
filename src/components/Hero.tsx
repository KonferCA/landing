import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            {/* background image */}
            <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            
            {/* content overlay */}
            <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-4">
                <h1 className="font-bold leading-tight text-almond font-inter">
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[128px]">
                        HIGH IMPACT
                    </div>
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[128px]">
                        INITIATIVES
                    </div>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-seasalt max-w-lg mx-auto font-inter leading-snug">
                    Konfer bridges innovative companies with<br />
                    the next generation of tech talent.
                </p>
                <a
                    href="#contact"
                    className="inline-block text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-colors duration-300 bg-gradient-to-r from-azure to-celestial-blue font-inter"
                >
                    GET IN TOUCH
                </a>
            </div>
        </section>
    );
};

export { Hero };
