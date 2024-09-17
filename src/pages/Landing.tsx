import { Header, About, Contact } from '@components'

const Landing = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <About />
            <Contact />
        </div>
    );
};

export { Landing };