import { Header, About, Contact } from '@components'

const Landing = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <Header />
            <About />
            <Contact />
        </main>
    );
};

export { Landing };
