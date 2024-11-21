import { Header, Hero, About, Partners, Expertise, Events, Team, Footer } from '@components'

const Landing = () => {
    return (
        <main className="min-h-screen text-white">
            <Header />
            <Hero />
            <section className="py-12">
                <Expertise />
            </section>
            <section className="py-12">
                <Events />
            </section>
            <section className="py-8 lg:py-12">
                <About />
            </section>
            <section className="py-2 lg:py-8">
                <Team />
            </section>
            <section className="py-2 lg:py-12">
                <Partners />
            </section>
            <Footer />
        </main>
    );
};

export { Landing };