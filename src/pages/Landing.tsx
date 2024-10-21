import { Header, About, Contact, Footer } from '@components'

const Landing = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <Header />
            <About />
            <Contact />
            <Footer />
        </main>
    );
};

export { Landing };
