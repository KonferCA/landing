const About = () => {
    return (
        <div className="flex-grow flex justify-center items-center text-center mt-0 m-4">
            <div className="border-4 border-[#fca311] rounded-xl shadow-2xl space-y-5 p-8">
                <p className="text-xl lg:text-2xl underline font-bold">Konfer bridges innovative companies with the next generation of tech talent. </p>
                <p className="text-lg lg:text-xl pt-2">
                    We organize high-impact events connecting businesses to ambitious students and young professionals.
                </p>

                <hr className="border-[#fca311] border-1 my-4" />

                <p className="text-lg lg:text-xl font-semibold">
                    Check out some of our orgs and past events!
                </p>

                <div className="grid grid-cols-1 gap-2 justify-items-center text-center">
                    <button className="w-[15rem] bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"> 
                        <a href="https://hawkhacks.ca" target="_blank" rel="noreferrer"> HawkHacks </a>
                    </button>
                    <button className="w-[15rem] bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"> 
                        <a href="https://lauriercs.ca" target="_blank" rel="noreferrer"> Laurier Computing Society </a>
                    </button>
                    <button className="w-[15rem] bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"> 
                        <a href="https://lu.ma/8iwq9lxb" target="_blank" rel="noreferrer"> Yacht After-Party @ Collision 2024 </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { About };