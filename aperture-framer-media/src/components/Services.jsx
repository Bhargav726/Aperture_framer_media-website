import React from 'react';
import Model from "../assets/Model.avif";
import Man from "../assets/Man.avif";
import Man1 from "../assets/Man1.avif";

const services = [
    {
        title: 'Fashion & Editorial',
        description: 'Striking imagery for brands, and publications, capturing style and personality.',
        image: Model,
        link: '#fashion',
    },
    {
        title: 'Brand & Commercial',
        description: 'High-impact photography for businesses, campaigns, and products.',
        image: Man,
        link: '#brand',
    },
    {
        title: 'Portrait & Studio',
        description: 'Professional headshots and portraits tailored to reflect your personality and vision.',
        image: Man1,
        link: '#portrait',
    },
];

const Services = () => {
    return (
        <div className="pt-20 px-2 text-left relative  ml-40">
            <div className="flex flex-col lg:flex-row items-start gap-12">
                {/* Left Content */}
                <div className="flex-1 text-left">
                    <span className="bg-gray-100 text-sm px-3 py-1 rounded-full text-black">Services</span>
                    <h2 className="text-5xl font-bold mt-6 mb-4">How can I help?</h2>
                    <p className="text-gray-500 text-lg mb-8 text-justify">
                        From editorial shoots to personal portraits, I bring your vision to life with precision,
                        creativity, and a deep understanding of light and composition.
                    </p>

                    <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">✓</div>
                            <p className="font-medium">Professional Editing</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">✓</div>
                            <p className="font-medium">Edited & Unedited (RAW) Images</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">✓</div>
                            <p className="font-medium">Personal and Commercial Licensing</p>
                        </div>
                    </div>

                    <a href="#portfolio">
                        <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                            View portfolio
                        </button>
                    </a>
                </div>

                {/* Right Service Cards */}
                <div className="flex-1 space-y-6">
                    {services.map((service, idx) => (
                        <a
                            key={idx}
                            href={service.link}
                            className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div>
                                <h3 className="font-semibold text-lg text-black">{service.title}</h3>
                                <p className="text-gray-500 text-sm text-justify">{service.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
