import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 py-12 ml-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* Left Column */}
        <div className='text-left'>
          <h2 className="text-xl font-semibold relative inline-block ml-7">
            {/* Top-left */}
            <span className="absolute top-0 left-0 -translate-x-full -translate-y-1/2 text-4xl">⌜</span>
            {/* Top-right */}
            <span className="absolute top-0 right-0 translate-x-full -translate-y-1/2 text-4xl">⌝</span>
            {/* Bottom-left */}
            <span className="absolute bottom-0 left-0 -translate-x-full translate-y-1/2 text-4xl">⌞</span>
            {/* Bottom-right */}
            <span className="absolute bottom-0 right-0 translate-x-full translate-y-1/2 text-4xl">⌟</span>

            <span className="">Aperture</span>
          </h2>

          <p className="mt-4 text-gray-600 text-justify text-1xl pt-8">
            Professional photography portfolio template that helps creatives showcase their work with elegant simplicity and visual impact.
          </p>
          <p className="mt-4 text-gray-500 text-left">
            Created by <span className="font-semibold text-black">Bhargav Reddy</span> © 2025
          </p>
        </div>

        {/* Center Column — empty (used to balance layout if needed) */}
        <div></div>

        {/* Right Column */}
        <div className="flex gap-12 justify-start sm:justify-end">
          {/* Pages */}
          <div>
            <h3 className=" text-lg font-semibold mb-3 text-left">Pages</h3>
            <ul className="space-y-1 text-gray-600 text-left">
              <li><a href="#" className='text-gray-500'>Home</a></li>
              <li><a href="#" className='text-gray-500'>Portfolio</a></li>
              <li><a href="#" className='text-gray-500'>Blog</a></li>
              <li><a href="#" className='text-gray-500'>About</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-3 text-lg text-left">Information</h3>
            <ul className="space-y-1 text-gray-600 text-left">
              <li><a href="#" className='text-gray-500'>Contact</a></li>
              <li><a href="#" className='text-gray-500'>Privacy Policy</a></li>
              <li><a href="#" className='text-gray-500'>Terms</a></li>
              <li><a href="#" className='text-gray-500'>404</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
