'use client';
import { useState } from 'react';

interface ServiceSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, imageUrl, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative w-full overflow-hidden mb-8 rounded-lg shadow-xl" id={id}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
        style={{ backgroundImage: `url(${imageUrl})`, transform: isOpen ? 'scale(1.05)' : 'scale(1)' }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 p-8 md:p-16 flex flex-col justify-between min-h-[400px]">
        <h3 className="text-white text-5xl md:text-7xl font-bold mb-4">
          {title}
        </h3>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-white text-lg md:text-xl leading-relaxed bg-black bg-opacity-60 p-4 rounded-lg">
            {description}
          </p>
        </div>

        <div
          className="absolute inset-0 cursor-pointer flex items-end justify-center pb-8"
          onClick={toggleOpen}
        >
          {!isOpen && (
            <div className="flex flex-col items-center text-white animate-bounce text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Scroll for more details
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 antialiased">
      <header className="relative w-full bg-white p-12 md:p-16 md:px-24 flex flex-col md:flex-row items-center justify-between shadow-md">
        <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            Our Company <br /> Service
          </h1>
        </div>
        <div className="max-w-xl text-center md:text-right">
          <p className="text-lg md:text-lg text-gray-600 leading-relaxed">
            We are a Philippine-based digital business card service, proudly launched in 2025. Our mission is to provide innovative and seamless digital networking solutions for professionals and businesses.
          </p>
        </div>
      </header>

       <main className="container mx-auto p-4 md:p-8">
        <ServiceSection
          id="custom-design"
          title="CUSTOM DIGITAL CARD DESIGN"
          description="Craft a unique and memorable digital business card that perfectly reflects your brand. Our design experts will work with you to create stunning visuals and a professional layout."
          imageUrl="https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1675876932/ideas-and-advice-prod/en-au/Img-20-scaled-1/Img-20-scaled-1.jpg?_i=AA"
        />

        <ServiceSection
          id="interactive-features"
          title="INTERACTIVE FEATURES & INTEGRATIONS"
          description="Enhance your networking with dynamic elements like QR codes, NFC tap-to-share, embedded videos, social media links, and direct calls-to-action. Seamlessly integrate with your existing platforms."
          imageUrl="https://i.ibb.co/ds50YkjT/Untitled-design-2.png" 
        />

        <ServiceSection
          id="analytics-management"
          title="ANALYTICS"
          description="Gain insights into your networking efforts with built-in analytics, tracking views and interactions. Easily manage and deploy digital business cards for you, ensuring brand consistency."
          imageUrl="https://www.shutterstock.com/image-vector/financial-growth-revenue-graph-vector-600nw-769479952.jpg"
        />
      </main>
    </div>
  );
}
