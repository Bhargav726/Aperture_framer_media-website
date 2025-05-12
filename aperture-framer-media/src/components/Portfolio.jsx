import React from "react";
import P1 from "../assets/P1.avif";
import P2 from "../assets/P2.avif";
import P3 from "../assets/P3.avif"
import P4 from "../assets/P4.avif"
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-40 px-2 text-center relative  ml-40">
            <div className="text-center mb-4">
                <span className="text-sm bg-gray-200 rounded-full px-4 py-1 text-black">
                    Portfolio
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-6">
                    A look through my lens
                </h2>
                <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                    Each frame tells a story, capturing genuine moments that showcase
                    my style and vision. Browse through my favorite projects.
                </p>
                <div className="relative overflow-hidden mt-6">
                    <p className="text-gray-500 text-sm mb-2 text-center">Featured on:</p>
                    <div className="whitespace-nowrap animate-scroll flex gap-10 text-xl font-semibold text-gray-800">
                        <span>🕶 Amsterdam</span>
                        <span>venice.</span>
                        <span>✈️</span>
                        <span>🕶 Amsterdam</span>
                        <span>venice.</span>
                        <span>✈️</span>
                        {/* repeat to ensure seamless loop */}
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-white p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First image card */}
                    <div className="bg-gray-100 p-2 rounded-2xl shadow">
                        <div className="overflow-hidden rounded-xl relative group">
                            <img
                                src={P1}
                                alt="Model Portrait"
                                className="w-full h-full object-cover rounded-xl transform transition duration-700 ease-in-out scale-105 group-hover:scale-95 group-hover:blur-sm"
                            />
                            {/* Corner Brackets */}
                            <div className="absolute top-5 left-5 text-white text-xl font-bold">⌜</div>
                            <div className="absolute top-5 right-5 text-white text-xl font-bold">⌝</div>
                            <div className="absolute bottom-20 left-5 text-white text-xl font-bold">⌞</div>
                            <div className="absolute bottom-20 right-5 text-white text-xl font-bold">⌟</div>

                            {/* Center Target + */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    +
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-4 px-2">
                                <div className="text-xs text-left">
                                    <h1>Wild Boom</h1>
                                    <p>Mar 25, 2025</p>
                                </div>
                                <button
                                    onClick={() => navigate('/fashion')}
                                    className="bg-black text-white px-4 py-1 rounded-full border"
                                >
                                    Fashion & Editorial
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Second image card */}
                    <div className="bg-gray-100 p-2 rounded-2xl shadow">
                        <div className="overflow-hidden rounded-xl relative group">
                            <img
                                src={P2}
                                alt="Product Photography"
                                className="w-full h-full object-cover rounded-xl transform transition duration-700 ease-in-out scale-105 group-hover:scale-95 group-hover:blur-sm"
                            />
                            {/* Corner Brackets */}
                            <div className="absolute top-5 left-5 text-white text-2xl font-bold">⌜</div>
                            <div className="absolute top-5 right-5 text-white text-2xl font-bold">⌝</div>
                            <div className="absolute bottom-20 left-5 text-white text-2xl font-bold">⌞</div>
                            <div className="absolute bottom-20 right-5 text-white text-2xl font-bold">⌟</div>

                            {/* Center + icon */}
                            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                +
                            </div>

                            <div className="flex justify-between items-center mt-4 px-2">
                                <div className="text-xs text-left">
                                    <h1>Soft Metals</h1>
                                    <p>Apr 15, 2025</p>
                                </div>
                                <button
                                    onClick={() => navigate('/fashion')}
                                    className="bg-black text-white px-4 py-1 rounded-full border"
                                >
                                    Band & Commercial
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Third image card */}
                    <div className="bg-gray-100 p-2 rounded-2xl shadow">
                        <div className="overflow-hidden rounded-xl relative group">
                            <img
                                src={P3}
                                alt="Model Portrait"
                                className="w-full h-full object-cover rounded-xl transform transition duration-700 ease-in-out scale-105 group-hover:scale-95 group-hover:blur-sm"
                            />
                            {/* Corner Brackets */}
                            <div className="absolute top-5 left-5 text-white text-xl font-bold">⌜</div>
                            <div className="absolute top-5 right-5 text-white text-xl font-bold">⌝</div>
                            <div className="absolute bottom-20 left-5 text-white text-xl font-bold">⌞</div>
                            <div className="absolute bottom-20 right-5 text-white text-xl font-bold">⌟</div>

                            {/* Center Target + */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    +
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-4 px-2">
                                <div className="text-xs text-left">
                                    <h1>Coastal Slow</h1>
                                    <p>May 02, 2025</p>
                                </div>
                                <button
                                    onClick={() => navigate('/fashion')}
                                    className="bg-black text-white px-4 py-1 rounded-full border"
                                >
                                    Portfolio
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Fourth image card */}
                    <div className="bg-gray-100 p-2 rounded-2xl shadow">
                        <div className="overflow-hidden rounded-xl relative group">
                            <img
                                src={P4}
                                alt="Product Photography"
                                className="w-full h-full object-cover rounded-xl transform transition duration-700 ease-in-out scale-105 group-hover:scale-95 group-hover:blur-sm"
                            />
                            {/* Corner Brackets */}
                            <div className="absolute top-5 left-5 text-white text-2xl font-bold">⌜</div>
                            <div className="absolute top-5 right-5 text-white text-2xl font-bold">⌝</div>
                            <div className="absolute bottom-20 left-5 text-white text-2xl font-bold">⌞</div>
                            <div className="absolute bottom-20 right-5 text-white text-2xl font-bold">⌟</div>

                            {/* Center + icon */}
                            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                +
                            </div>

                            <div className="flex justify-between items-center mt-4 px-2">
                                <div className="text-xs text-left">
                                    <h1>Sun Veil</h1>
                                    <p>Jan 15, 2025</p>
                                </div>
                                <button
                                    onClick={() => navigate('/fashion')}
                                    className="bg-black text-white px-4 py-1 rounded-full border"
                                >
                                    Portfolio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
