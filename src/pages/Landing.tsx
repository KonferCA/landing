import { Header, About, Contact, Team } from '@components';

const Landing = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <Header />
            <About />
            <Team />
            <Contact />
        </main>
    );
};

export { Landing };
