const About = () => {
    return (
        <section className="w-full max-w-4xl mx-auto text-center space-y-16 py-16">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Konfer bridges innovative companies with the next generation of tech talent.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
                We organize high-impact events connecting innovative businesses to ambitious students and young professionals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {['HawkHacks', 'Laurier Computing Society', ['Yacht After-Party', '@ Collision 2024']].map((event, index) => (
                    <a 
                        key={index}
                        href={['https://hawkhacks.ca', 'https://lauriercs.ca', 'https://lu.ma/8iwq9lxb'][index]} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group relative overflow-hidden p-3 transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-[#345d95] opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
                        <h3 className="text-lg font-semibold relative z-10">
                            {Array.isArray(event) ? event[0] : event}
                        </h3>
                        {Array.isArray(event) && (
                            <p className="text-sm relative z-10 text-gray-400">{event[1]}</p>
                        )}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#345d95] transition-all duration-300 group-hover:w-full"></div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export { About };