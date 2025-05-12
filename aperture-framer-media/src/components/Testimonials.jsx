import React, { useEffect, useRef } from 'react';
import client1 from '../assets/C1.avif';
import client2 from '../assets/C2.avif';
import client3 from '../assets/C3.avif';
import client4 from '../assets/C4.avif';
import client5 from '../assets/C5.avif';

const testimonials = [
  {
    name: 'Sophia Williams',
    title: 'Jewelry Designer',
    image: client1,
    review: 'You made the entire experience comfortable and fun. The images perfectly capture both my pieces and their story.',
  },
  {
    name: 'James Thornton',
    title: 'Meridian Tech',
    image: client2,
    review: 'Our team headshots have never looked this good. Professional yet approachable, with impressive consistency.',
  },
  {
    name: 'Olivia Park',
    title: 'Style Quarterly',
    image: client3,
    review: 'Your editorial eye is exceptional. You delivered images that told a complete story while staying exactly on brief.',
  },
  {
    name: 'Liam Chen',
    title: 'Creative Lead',
    image: client4,
    review: 'An incredible talent with a great eye for detail. Our campaign was brought to life flawlessly.',
  },
  {
    name: 'Pavan',
    title: 'Jewelry Designer',
    image: client5,
    review: 'You made the entire experience comfortable and fun. The images perfectly capture both my pieces and their story.',
  },
];

const Testimonials = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   // Scroll to the end on mount
//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (scrollContainer) {
//       scrollContainer.scrollLeft = scrollContainer.scrollWidth;
//     }
//   }, []);

  return (
    <section className="pt-40 px-2 text-center relative  ml-40">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1 mb-2 rounded-full bg-gray-100 text-black text-sm">
          Testimonials
        </div>
        <h2 className="text-4xl font-semibold mb-2">What my clients say</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Real feedback from people I've worked with. Their experiences tell you more about my approach than I ever could.
        </p>
      </div>

      {/* <div
        ref={scrollContainerRef}
        className="mt-12 overflow-x-auto scrollbar-hide"
      > */}
        <div className="flex flex-row-reverse gap-6 animate-scroll px-4 min-w-max z-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-100 rounded-2xl p-6 w-80 shadow-md text-left"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mx-auto mb-4 text-left"
              />
              <div className="flex justify-center mb-2">
                {'★★★★★'.split('').map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-justify">{testimonial.review}</p>
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Testimonials;
