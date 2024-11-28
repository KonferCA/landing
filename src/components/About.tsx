const About = () => {
    return (
        <section
            id="about-us"
            className="text-white px-4 md:px-8 lg:px-16 xl:px-24"
        >
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5084F5] to-[#00FFCC]">
                        About Konfer
                    </span>
                </h1>

                <p className="text-white mb-12 text-lg">
                    We specialize in sourcing, organizing, and executing
                    high-impact initiatives for companies and groups. Yacht
                    parties, case competitions, hackathons, workshops, or
                    networking events - we bring creativity and precision to
                    every stage of the planning process. Our deep expertise in
                    event planning, sponsorship and partnership acquisition,
                    marketing, outreach, operations, logistics, and audience
                    engagement ensures every initiative is impactful, memorable,
                    and flawlessly executed.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ml-0">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Expertise</h2>
                        <p className="text-white text-lg">
                            We’ve successfully executed some of the largest
                            initiatives in Canada; from high-energy hackathons
                            and dynamic case competitions to exclusive yacht
                            parties and engaging networking events.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Culture</h2>
                        <p className="text-white text-lg">
                            We take pride in having fun with our work, while
                            delivering outstanding results for our clients and
                            communities - our team is fueled by a passion for
                            helping individuals grow.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Values</h2>
                        <p className="text-white text-lg">
                            We embrace fresh ideas and push boundaries in every
                            initiative we create. Precision, creativity, and
                            professionalism guide everything we do. Building
                            strong, lasting relationships between companies,
                            talent, and communities is at our core.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Resources</h2>
                        <p className="text-white text-lg">
                            Our extensive network spans top universities,
                            premier venues, and industry-leading influential
                            organizations, giving us unmatched access to the
                            people and spaces that make events extraordinary.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { About };

