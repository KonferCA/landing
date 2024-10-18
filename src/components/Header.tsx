const Header = () => {
    return (
        <header className="w-full text-white p-4 pt-10 flex items-center justify-between">
            <div className="flex items-center pl-12">
                <img
                    src="/konfer_logo.svg"
                    alt="Konfer Logo"
                    className="h-10 w-auto mr-6"
                />
            </div>
            <nav className="flex-grow flex justify-center">
                <ul className="flex space-x-6 font-montserrat font-bold text-xl">
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#our-work">Our Work</a></li>
                    <li><a href="#partners">Partners</a></li>
                </ul>
            </nav>
            <div className="pr-12">
                <a href="#contact" className="text-white px-4 py-2 rounded font-montserrat font-bold text-2xl">Contact</a>
            </div>
        </header>
    );
}

export { Header };
