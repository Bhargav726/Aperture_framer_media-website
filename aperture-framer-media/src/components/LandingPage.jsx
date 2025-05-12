import React from 'react';
import L1 from "../assets/L1.avif";
import L2 from "../assets/L2.avif";
import L3 from "../assets/L3.avif";

const LandingPage = () => {
  return (
    <div className="pt-40 px-2 text-center relative  ml-40">
      <h1 className="text-6xl sm:text-6xl font-bold text-center leading-tight">
        The perfect shot is just a <br /> conversation away
      </h1>
      <p className="mt-6 text-gray-600 text-lg max-w-1xl">
        Reach out now and let's discuss bringing your vision to life<br />
        with photography that truly captures what matters.
      </p>

      <button className="mt-8 bg-black text-white py-3 px-6 rounded-full text-lg hover:opacity-90 transition">
        Get in touch
      </button>
      {/* Image section with individual brackets */}
      <div className="relative mt-16 flex justify-center items-center gap-4">

        {/* Image 1 with brackets */}
        <div className="relative w-48 sm:w-72 rotate-[-10deg] rounded-3xl shadow-lg">
          <div className="absolute top-3 left-3 text-4xl  text-white">⌜</div>
          <div className="absolute top-3 right-3 text-4xl text-white">⌝</div>
          <div className="absolute bottom-3 left-3 text-4xl text-white">⌞</div>
          <div className="absolute bottom-3 right-3 text-4xl text-white">⌟</div>
          <img
            src={L1}
            alt="Scenery"
            className="w-full h-auto rounded-3xl"
          />
        </div>

        {/* Image 2 with brackets */}
        <div className="relative w-52 sm:w-80 z-10 rounded-3xl shadow-2xl">
          <div className="absolute top-3 left-3 text-4xl  text-white">⌜</div>
          <div className="absolute top-3 right-3 text-4xl text-white">⌝</div>
          <div className="absolute bottom-3 left-3 text-4xl text-white">⌞</div>
          <div className="absolute bottom-3 right-3 text-4xl text-white">⌟</div>
          <img
            src={L2}
            alt="Portrait"
            className="w-full h-auto rounded-3xl"
          />
        </div>

        {/* Image 3 with brackets */}
        <div className="relative w-48 sm:w-72 rotate-[10deg] rounded-3xl shadow-lg">
          <div className="absolute top-3 left-3 text-4xl  text-white">⌜</div>
          <div className="absolute top-3 right-3 text-4xl text-white">⌝</div>
          <div className="absolute bottom-3 left-3 text-4xl text-white">⌞</div>
          <div className="absolute bottom-3 right-3 text-4xl text-white">⌟</div>
          <img
            src={L3}
            alt="Product"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-20 px-2 text-center relative  ml-35">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
          Instagram ↗
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
          LinkedIn ↗
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
          YouTube ↗
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
