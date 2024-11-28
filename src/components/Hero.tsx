import { HeroImage } from '@assets';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center">
            <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${HeroImage})` }}
            ></div>
            
            <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-4">
                <h1 className="font-bold leading-tight text-almond font-inter">
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-[128px]">
                        HIGH IMPACT
                    </div>
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-[128px]">
                        INITIATIVES
                    </div>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-seasalt mx-auto font-inter leading-snug">
                    A premier consultancy based in Canada.
                </p>
                <div className="flex justify-center">
                    <a
                        href="mailto:hello@konfer.ca"
                        className="
                            inline-flex items-center justify-center
                            text-white font-semibold
                            text-lg sm:text-xl md:text-2xl
                            h-12 sm:h-14 md:h-16
                            px-8 sm:px-10 md:px-12
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
                        "
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export { Hero };