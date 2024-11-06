import { Header, About, Contact, Partners, Team } from '@components';

const Landing = () => {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white">
            <Header />
            <About />
            <Contact />
        </main>
    );
};

export { Landing };
