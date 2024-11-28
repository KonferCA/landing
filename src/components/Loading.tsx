import { BrandLogo } from '@assets';

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
            <div className="relative">
                <img
                    className="h-14 w-14 opacity-30"
                    src={BrandLogo}
                    alt="Loading Animation Shadow"
                />
                <img
                    className="h-14 w-14 absolute top-0 left-0 animate-[pulse_2s_cubic-bezier(0,0,0.2,1)_infinite]"
                    src={BrandLogo}
                    alt="Loading Animation"
                />
            </div>
        </div>
    );
};

export { Loading };