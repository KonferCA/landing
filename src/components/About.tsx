const About = () => {
    return (
        <section className="text-white p-8 min-h-screen">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5084F5] to-[#00FFCC]">About Konfer</span>
                </h1>
                
                <p className="text-white mb-12 max-w-3xl">
                    At Konfer, we believe that relationships are everything. We cultivate partnerships to ease the burden of building
                    and executing impactful events from the ground up. Our team of multi-faceted event planners, project managers,
                    and technology specialists is dedicated to helping you bring your next event to life.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ml-0">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Industries</h2>
                        <p className="text-white mb-4">
                            We serve a diverse range of industries, helping any company or organization create
                            impactful and successful events.
                        </p>
                        <p className="text-white">
                            In the past we've had strong success in{' '}
                            <span className="font-semibold">Web3, Crypto</span>, and{' '}
                            <span className="font-semibold">Technology</span> Companies.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Culture</h2>
                        <p className="text-white mb-4">
                            We believe that every event is a gateway to connecting cultures and fostering
                            relationships.
                        </p>
                        <p className="text-white">
                            We take pride in having fun with our work, while delivering outstanding results for our
                            clients and communities.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Values</h2>
                        <p className="text-white">
                            Values Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            consectetur, urna sed ultrices egestas, sem nunc imperdiet quam, id tempus ligula mi et
                            ligula.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Resources</h2>
                        <p className="text-white">
                            We're connected w/ resources, we're connected w/ resources, Values Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { About };