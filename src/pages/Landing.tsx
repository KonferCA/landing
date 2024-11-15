import { Header, About, Contact, Partners, Expertise, Events, Footer } from '@components'

const Landing = () => {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white">
            <Header />
            <Hero />
            <Expertise />
            <About />
            <Events />
            <Partners />
            <Contact />
            <Footer />
        </main>
    );
};

export { Landing };
