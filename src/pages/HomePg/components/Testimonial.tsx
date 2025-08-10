import React, { useState, useEffect } from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-4 flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-indigo-500" />
      <p className="text-lg text-gray-700 italic mb-6">"{quote}"</p>
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
};

const testimonials = [
  {
    quote: "This platform has revolutionized how we manage our projects. The collaboration features are top-notch!",
    name: "Jane Doe",
    title: "CEO, Tech Solutions",
    image: "/src/assets/undraw_professor-avatar_y9ai.svg", // Placeholder image
  },
  {
    quote: "An incredibly intuitive and powerful tool. Our team's productivity has soared since we started using it.",
    name: "John Smith",
    title: "Lead Developer, Innovate Co.",
    image: "/src/assets/undraw_professor-avatar_y9ai.svg", // Placeholder image
  },
  {
    quote: "Customer support is outstanding, and the features are exactly what we needed for our growing business.",
    name: "Emily White",
    title: "Operations Manager, Global Corp.",
    image: "/src/assets/undraw_professor-avatar_y9ai.svg", // Placeholder image
  },
  {
    quote: "The best investment we've made this year. It's streamlined our workflow and saved us countless hours.",
    name: "Michael Brown",
    title: "Founder, Creative Agency",
    image: "/src/assets/undraw_professor-avatar_y9ai.svg", // Placeholder image
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none transition duration-300"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={goToNext}
            className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none transition duration-300"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-indigo-500' : 'bg-gray-300'} transition duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;