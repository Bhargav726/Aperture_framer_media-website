import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Model from "../assets/Model.avif";
import Model1 from "../assets/Model1.avif";
import Jewelry from "../assets/Jewelry.avif";
import Model2 from "../assets/Model2.avif";
import Model3 from "../assets/Model3.avif";
import cap from "../assets/cap.avif";
import leaf1 from '../assets/leaf1.avif';
import leaf2 from "../assets/leaf2.avif";

const Philosophy = () => {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    const text = `Every Photography should make an impact. I capture Moments that blend artistry, storytelling, and emotion to create visuals that stand out.`;
    const words = text.split(" ");

    return (
        <>
            <div className=" px-2 text-center relative ml-40">
                <div className="relative items-center text-center pb-20">
                    {/* Left leaf */}
                    <img
                        src={leaf2} // replace with your uploaded image path
                        alt="Left Leaf"
                        className="absolute left-40 top-1/2 transform -translate-y-1/2 w-24 opacity-20 hidden md:block"
                    />

                    {/* Right leaf */}
                    <img
                        src={leaf1} // replace with your uploaded image path
                        alt="Right Leaf"
                        className="absolute right-40 top-1/2 transform -translate-y-1/2 w-24 opacity-20 hidden md:block"
                    />

                    <section className="text-center mt-20 px-4 relative z-10">
                        <div className="flex justify-center space-x-2">
                            <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-10 h-10 rounded-full" />
                            <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-20 h-20 z-10 rounded-full" />
                            <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-10 h-10 rounded-full" />
                        </div>
                        <div className="text-orange-500 text-2xl mt-2">★★★★★</div>
                        <h1 className="text-2xl font-semibold mt-2 text-black">
                            Trusted by brands & creatives worldwide
                        </h1>
                        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                            Over 100 brands and creatives trust me to capture<br/>
                             their stories through bold, refined imagery.
                        </p>
                    </section>
                </div>

                {/* Text Section */}
                <section className=" relative max-w-4xl mx-auto mb-24 pt-40" ref={sectionRef}>
                    <span className="text-sm bg-gray-200 px-3 py-2 rounded-full text-black">Philosophy</span>
                    <h1 className="text-4xl sm:text-3xl font-semibold mt-6 flex flex-wrap justify-center">
                        {words.map((word, index) => (
                            <span
                                key={index}
                                className={`transition-opacity transform duration-700 ease-out mx-1 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-50 translate-y-2"
                                    }`}
                                style={{ transitionDelay: `${index * 500}ms` }}
                            >
                                {word}
                            </span>
                        ))}
                    </h1>
                    <p className="text-sm text-gray-500 mt-6">© August Renner</p>
                </section>


                {/* Images Section */}
                <div className="flex flex-col items-center px-4 md:px-10 space-y-10 -z-50 pb-40">
                    <div className="flex flex-wrap gap-x-40 justify-center">
                        <img src={Model} alt="Model" className="w-100 h-80 object-cover rounded-2xl" />
                        <img src={Jewelry} alt="Jewelry" className="w-100 h-80 object-cover rounded-2xl" />
                    </div>

                    <div className="flex justify-center">
                        <img src={Model1} alt="Model1" className="w-100 h-80 object-cover rounded-2xl" />
                    </div>

                    <div className="flex justify-between w-full px-4 md:px-10">
                        <img src={cap} alt="Cap" className="w-[30%] h-60 object-cover rounded-2xl" />
                        <img src={Model2} alt="Model2" className="w-[48%] h-80 object-cover rounded-2xl" />
                    </div>

                    <img src={Model3} alt="Model3" className="w-4/5 h-auto object-cover rounded-2xl" />
                </div>
            </div>
        </>
    );
};

export default Philosophy;
