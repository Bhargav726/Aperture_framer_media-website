import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import V1 from "../assets/V1.mp4";

const faqData = [
  {
    question: "What equipment do you use for your photoshoots?",
    answer:
      "I use professional full-frame cameras with prime lenses, plus appropriate lighting for each project. I always bring backup gear to ensure nothing interrupts your shoot.",
  },
  {
    question: "How long will it take to receive my photos?",
    answer:
      "Typically, photos are delivered within 7 to 10 business days after the shoot.",
  },
  {
    question: "Do you travel for photoshoots?",
    answer:
      "Yes, I'm available for travel. Travel fees may apply depending on the location.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the type and length of the session. Please reach out for a custom quote.",
  },
  {
    question: "Do I need hair and makeup services for my shoot?",
    answer:
      "While not required, professional hair and makeup can enhance your photos. I can recommend trusted stylists if needed.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-40 px-2 text-left relative  ml-40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Text and Image */}
        <div>
          <span className="text-sm bg-gray-100 text-black px-3 py-1 rounded-full">FAQ</span>
          <h2 className="text-4xl font-bold mt-4">Got questions?</h2>
          <p className="text-gray-500 mt-2">
            Here are the most common things clients ask before booking. If you need to know anything else, just reach out directly.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden relative w-full max-w-lg">
          <video
              className="w-full h-auto object-cover rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={V1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">© August Renner</span>
          </div>
        </div>

        {/* Right: FAQs */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl transition-all"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                {isOpen && (
                  <p className="text-gray-600 mt-3 text-sm transition-opacity duration-200">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
