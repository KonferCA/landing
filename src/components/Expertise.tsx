import React from 'react';
import partiesImage from '../assets/expertise/parties.png';
import conferencesImage from '../assets/expertise/conferences.png';
import networkingImage from '../assets/expertise/networking.png';
import seminarsImage from '../assets/expertise/seminars.png';

const expertiseData = [
  { title: 'PARTIES', image: partiesImage },
  { title: 'CONFERENCES', image: conferencesImage },
  { title: 'NETWORKING', image: networkingImage },
  { title: 'SEMINARS', image: seminarsImage },
];

const Expertise = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <h2 className="font-inter font-extrabold text-6xl md:text-8xl lg:text-[96px] leading-[1.1] py-2 bg-gradient-to-r from-[#F8D0AA] to-[#AAAAAA] text-transparent bg-clip-text">
          We Bridge Innovation.
        </h2>
        <p className="font-inter font-medium text-2xl md:text-3xl lg:text-[32px] text-white mt-4 mb-12">
          By organizing high-impact events that connect innovative businesses to ambitious students and young professionals.
        </p>
        <h3 className="font-inter font-normal text-xl md:text-2xl lg:text-[24px] text-white mb-8">
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
