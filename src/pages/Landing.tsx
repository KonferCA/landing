import { Header, About, Contact } from '@components'

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <Header />
            <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                <About />
                <Contact />
            </main>
        </div>
    );
};

export { Landing };