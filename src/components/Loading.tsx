import { BrandLogo } from '@assets';

const Loading: React.FC = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <img
                className="h-14 w-14 animate-ping"
                src={BrandLogo}
                alt="Loading Animation"
            />            
        </div>
    );
};

export { Loading };