import { useState, useEffect } from 'react';
import { Header, Hero, About, Partners, Expertise, Events, Team, Footer, Loading } from '@components';

const Landing = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
    <>
        {loading ? (
            <Loading />
            ) : (
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
        )}
    </>
  );
};

export { Landing };