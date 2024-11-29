import { useState, useEffect } from 'react';
import { Header, Hero, About, Partners, Expertise, Events, Team, Footer, Loading } from '@components';

const Landing = () => {
    const [loading, setLoading] = useState(true);
    const [contentReady, setContentReady] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setLoading(true);
        
        const loadImages = () => {
            return new Promise<void>((resolve) => {
                const images = document.querySelectorAll('img');
                const imagePromises = Array.from(images).map(img => {
                    if (img.complete) {
                        return Promise.resolve();
                    } else {
                        return new Promise<void>(resolve => {
                            img.addEventListener('load', () => resolve());
                            img.addEventListener('error', () => resolve());
                        });
                    }
                });
                Promise.all(imagePromises).then(() => resolve());
            });
        };

        const loadFonts = () => {
            return document.fonts.ready;
        };

        const timer = setTimeout(() => {
            setContentReady(true);
        }, 100);

        Promise.all([
            loadImages(),
            loadFonts(),
            new Promise(resolve => setTimeout(resolve, 1000)) 
        ]).then(() => {
            if (contentReady) {
                setFadeOut(true);
                setTimeout(() => setLoading(false), 500);
            }
        });

        return () => {
            clearTimeout(timer);
        };
    }, [contentReady]);

    return (
        <>
            {loading ? (
                <div className={`transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                    <Loading />
                </div>
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