import { Header, About, Events, Contact, Partners } from '@components';

const Landing = () => {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white">
            <Header />
            <About />
            <Events />
            <Partners />
            <Contact />
        </main>
    );
};

export { Landing };
