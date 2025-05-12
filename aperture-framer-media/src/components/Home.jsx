import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LuLoaderPinwheel } from "react-icons/lu";
import Img from "../assets/Homepic.png";
import sky from "../assets/sky.avif";
import clouds from "../assets/clouds.png";
const Home = ({ onVisibleChange }) => {
    const navigate = useNavigate();
    const homeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                onVisibleChange(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (homeRef.current) observer.observe(homeRef.current);
        return () => {
            if (homeRef.current) observer.unobserve(homeRef.current);
        };
    }, [onVisibleChange]);
    return (
        <div ref={homeRef} id="home" className="z-50 relative h-screen w-screen text-white overflow-x-hidden font-sans">
            {/* Masked background layer */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${sky})` }}
            ></div>
            {/* Header */}
            <div className="absolute top-6 left-6 z-20">
                <h1 className="text-lg font-semibold">August Renner</h1>
                <p className="text-sm text-gray-300">Photographer</p>
            </div>

            {/* Center icon */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl">
                <span role="img" aria-label="lens"><LuLoaderPinwheel /></span>
            </div>

            {/* Top Right Button */}
            <button
                onClick={() => navigate('/contact')}
                className="absolute top-6 right-6 bg-white text-black px-8 py-2 rounded-full"
            >
                Contact
            </button>

            {/* Main Title */}
            <div className="relative inline-block pt-20 z-10">
                {/* Corner Brackets */}
                <div className="absolute top-30 left-0 text-2xl font-bold">⌜</div>
                <div className="absolute top-30 right-0 text-2xl font-bold">⌝</div>
                <div className="absolute bottom-0 left-0 text-2xl font-bold">⌞</div>
                <div className="absolute bottom-0 right-0 text-2xl font-bold">⌟</div>

                <h1 className="text-[20vw] font-bold tracking-tight text-center px-6">
                    AUGUST
                </h1>
            </div>

            {/* Face placeholder (optional: use image here) */}
            <div
                className="relative h-80 w-full text-white overflow-x-hidden font-sans bg-cover"
                style={{ backgroundImage: `url(${clouds})` }}
            ></div>
            <img src={Img} alt="img" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[320px] max-w-full object-cover z-20 text-center"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 40%, rgba(0, 0, 0, 0.5) 80%, transparent 100%)",
                    maskImage:
                        "linear-gradient(to bottom, black 40%, rgba(0, 0, 0, 0.5) 80%, transparent 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                }} />
            {/* Footer buttons */}
            <div className=" bottom-6 right-6 flex flex-col space-y-3 items-end fixed z-50">
                <button
                    onClick={() => navigate('/buy')}
                    className="bg-black text-white px-4 py-2 rounded-full"
                >
                    Buy template
                </button>
                <button
                    onClick={() => navigate('/framer')}
                    className="bg-white text-black px-4 py-2 rounded-full border"
                >
                    Made in Framer
                </button>
            </div>
            
        </div>
    )
}
export default Home;

