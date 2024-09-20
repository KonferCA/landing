const Contact = () => {
    return (
        <section id="contact" className="w-full max-w-4xl mx-auto text-center py-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to innovate?</h2>
            <p className="text-xl lg:text-2xl mb-8">
                <a href="mailto:hello@konfer.ca" className="hover-underline-animation hover:text-[#345d95]">
                    hello@konfer.ca
                </a>
            </p>
            <div className="flex justify-center space-x-6">
                {[{ name: 'Twitter', url: 'https://x.com/Konferca' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/konferca/' },
                { name: 'Instagram', url: 'https://www.instagram.com/konfer.ca/' }].map((platform, index) => (
                    <a key={index} href={platform.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#345d95] transition duration-300 hover-underline-animation">
                        {platform.name}
                    </a>
                ))}
            </div>
        </section>
    );
};

export { Contact };