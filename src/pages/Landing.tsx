import { Header, Hero, About, Contact, Partners, Expertise, Events, Team, Footer } from '@components'

const Landing = () => {
    return (
        <main className="min-h-screen text-white">
            <Header />
            <Hero />
            <Expertise />
            <About />
            <Events />
            <Partners />
            <Contact />
            <Team />
            <Footer />
        </main>
    );
};

export { Landing };
