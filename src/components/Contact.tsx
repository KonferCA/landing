const Contact = () => {
    return (
        <section id="contact" className="w-full flex-none h-[10vh] flex flex-col justify-end items-start text-left p-6 lg:p-12">
            <h1 className="text-xl uppercase lg:text-[2rem] font-bold leading-tight lg:leading-none">
                reach out to us
            </h1>
            <p className="font-bold text-xl pt-1 tracking-widest">
                <a href="mailto:hello@konfer.ca">
                    hello@konfer.ca
                </a>
            </p>
        </section>
    );
};

export { Contact };