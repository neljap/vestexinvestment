import React, { useState, useEffect } from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mx-4 flex flex-col items-center text-center">
      
      <p className="text-lg text-gray-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-3 justify-center w-full">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mb-6 border border-indigo-500" />
        <div>
          <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
      
    </div>
  );
};

/*
{
    quote: "This platform has revolutionized how we manage our projects. The collaboration features are top-notch!",
    name: "Jane Doe",
    title: "CEO, Tech Solutions",
    image: "/src/assets/undraw_professor-avatar_y9ai.svg", // Placeholder image
  },


*/

const testimonials = [
  {
      name: "Sophia Carter",
      title: "Retiree",
      quote: "I took a leap of faith and invested in this company a year ago, and I couldn't be happier. My returns have exceeded my expectations, and their customer service is always top-notch. Definitely worth the investment!",
      image: "https://picsum.photos/101/101",
    },
    {
      name: "Ethan Walker",
      title: "Business Owner",
      quote: "Honestly, I was skeptical at first, but after seeing the consistent growth in my portfolio, I’m sold. The team is knowledgeable and genuinely cares about your success. I’m looking forward to future investments with them.",
      image: "https://picsum.photos/102/102",
    },
    {
      name: "Olivia Davis",
      title: "Entrepreneur",
      quote: "After researching several options, I chose this company, and it’s been a game-changer. Their transparent communication and solid results have made me feel confident in my financial future. Highly recommend!",
      image: "https://picsum.photos/104/104",
    },
    {
      name: "Liam Thompson",
      title: "Engineer",
      quote:  "I’ve made some smart moves with this company. Their team is responsive, professional, and they really know what they’re doing. My investment has paid off, and I’m excited about what’s next.",
      image: "https://picsum.photos/103/103",
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

  () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="relative flex items-center justify-center">
          {/* <button
            onClick={goToPrevious}
            className="absolute left-0 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none transition duration-300"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button> */}
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
          {/* <button
            onClick={goToNext}
            className="absolute right-0 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none transition duration-300"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button> */}
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