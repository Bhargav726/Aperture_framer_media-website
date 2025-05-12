import React from "react";
import B1 from '../assets/B1.avif';
import B2 from '../assets/B2.avif';
import B3 from '../assets/B3.avif';
import B4 from '../assets/B4.avif';
const BlogSection = () => {
  return (
    <section className="pt-40 px-2 text-center relative  ml-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-left">
          <span className="text-sm bg-gray-100 text-black px-3 py-1 rounded-full ">Blog</span>
          <h2 className="text-4xl font-bold mt-4 text-left">Behind the lens</h2>
          <p className="text-gray-500 mt-2 text-left">
            Thoughts, insights, and stories from my photography journey.<br/>
             Take a peek into my creative process and recent projects.
          </p>
          <div className="mt-4 text-right">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
              View all posts
            </button>
          </div>
        </div>

        {/* Featured Blog */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
          {/* Image Section with Effects */}
          <div className="group relative w-full lg:w-1/2 overflow-hidden rounded-3xl">
            <img
              src={B1}
              alt="Featured"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-95 group-hover:blur-sm"
            />
            {/* Corner Brackets */}
            <div className="absolute top-2 left-2 text-white text-xl font-bold">⌜</div>
            <div className="absolute top-2 right-2 text-white text-xl font-bold">⌝</div>
            <div className="absolute bottom-2 left-2 text-white text-xl font-bold">⌞</div>
            <div className="absolute bottom-2 right-2 text-white text-xl font-bold">⌟</div>
            {/* Center Target */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">+</div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-left">
            <span className="text-xs bg-black text-white px-3 py-1 rounded-full">Must Read</span>
            <h3 className="text-4xl font-semibold mt-4 mb-2 ">
              Full-Frame vs. Crop Sensor:<br/>
              Which for Photography?
            </h3>
            <p className="text-gray-600 mb-4 ">
              An honest look at the real-world differences between these camera systems to help you choose what's actually right for your photography needs.
            </p>
            <p className="text-sm text-gray-400">By August Renner©</p>
          </div>
        </div>


        {/* Grid of Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Post 1 */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md">
            <div className="relative overflow-hidden rounded-2xl ">
              <img
                src={B2}
                alt="Post 1"
                className="rounded-2xl w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95 group-hover:blur-sm"
              />
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 text-white text-xl font-bold">⌜</div>
              <div className="absolute top-2 right-2 text-white text-xl font-bold">⌝</div>
              <div className="absolute bottom-2 left-2 text-white text-xl font-bold">⌞</div>
              <div className="absolute bottom-2 right-2 text-white text-xl font-bold">⌟</div>
              {/* Center Target */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">+</div>
              </div>
            </div>
            <h4 className="mt-4 font-medium text-lg text-left">
              Finding Natural Light in Unexpected<br/>
               Places
            </h4>
            <span className="inline-block mt-2 text-sm bg-green-100 text-green-800 px-3 py-2 mb-10 ml-60 rounded-full ">Lighting</span>
          </div>

          {/* Post 2 */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={B3}
                alt="Post 2"
                className="rounded-2xl w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95 group-hover:blur-sm"
              />
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 text-white text-xl font-bold">⌜</div>
              <div className="absolute top-2 right-2 text-white text-xl font-bold">⌝</div>
              <div className="absolute bottom-2 left-2 text-white text-xl font-bold">⌞</div>
              <div className="absolute bottom-2 right-2 text-white text-xl font-bold">⌟</div>
              {/* Center Target */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">+</div>
              </div>
            </div>
            <h4 className="mt-4 font-medium text-lg text-left">
              My Approach to Editing: Creating a Consistent Photography Style
            </h4>
            <span className="inline-block mt-2 text-sm bg-orange-100 text-orange-800 px-3 py-2 mb-10 ml-60 rounded-full">Editing</span>
          </div>

          {/* Post 3 */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={B4}
                alt="Post 3"
                className="rounded-2xl w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95 group-hover:blur-sm"
              />
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 text-white text-xl font-bold">⌜</div>
              <div className="absolute top-2 right-2 text-white text-xl font-bold">⌝</div>
              <div className="absolute bottom-2 left-2 text-white text-xl font-bold">⌞</div>
              <div className="absolute bottom-2 right-2 text-white text-xl font-bold">⌟</div>
              {/* Center Target */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">+</div>
              </div>
            </div>
            <h4 className="mt-4 font-medium text-lg text-left">
              Pricing Your Photography: Strategies That Work
            </h4>
            <span className="inline-block mt-2 text-sm bg-blue-100 text-blue-800 px-3 py-2 mb-10 ml-60 rounded-full">Business</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
