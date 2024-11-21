import { PartiesImage, ConferencesImage, NetworkingImage, SeminarsImage } from '@assets'; 

const expertiseData = [
    { title: 'PARTIES', image: PartiesImage },
    { title: 'CONFERENCES', image: ConferencesImage },
    { title: 'NETWORKING', image: NetworkingImage },
    { title: 'SEMINARS', image: SeminarsImage },
];

const Expertise = () => {
    return (
        <section className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                <h2 className="font-inter font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-[128px] leading-[1.1] py-2 bg-gradient-to-r from-[#F8D0AA] to-[#AAAAAA] text-transparent bg-clip-text">
                    We Bridge Innovation.
                </h2>

                <p className="font-inter font-medium text-xl md:text-2xl lg:text-[28px] text-white mt-4 mb-12">
                    By organizing high-impact events that connect innovative businesses to ambitious students and young professionals.
                </p>

                <h3 className="font-inter font-normal text-lg md:text-xl lg:text-[24px] text-white mb-8">
                    Our Expertise
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {expertiseData.map((item, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-expertise-gradient bg-opacity-40 flex items-end justify-center p-4">
                                <h4 className="font-montserrat font-bold text-xl md:text-2xl lg:text-[24px] xl:text-3xl text-white text-center">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Expertise };
