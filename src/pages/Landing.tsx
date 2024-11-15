import {Header, About, Contact, Partners, Expertise } from '@components'

const Landing = () => {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white">
            <Header />
            <Hero />
            <Expertise />
            <About />
            <Partners />
            <Contact />
        </main>
    );
};

export { Landing };
