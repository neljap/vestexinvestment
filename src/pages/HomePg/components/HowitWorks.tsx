import React from 'react';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="flex flex-col items-center text-center p-2">
      <div className="relative w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-6">
        {icon}
        <div className="absolute -bottom-2 right-0 bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          {stepNumber}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const HowitWorks = () => {
  const steps = [
    {
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      ),
      title: "Open your account",
      description: "Beguiled demoralized all...",
      stepNumber: "01",
    },
    {
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      ),
      title: "Select a currency pair",
      description: "Minus id maxime placeat...",
      stepNumber: "02",
    },
    {
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.523 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Analyze the market",
      description: "Itaque earu rerum tenetur...",
      stepNumber: "03",
    },
    {
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      ),
      title: "Trade & make money",
      description: "perferen doloribus asperio...",
      stepNumber: "04",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mx-auto ">
         <h2 className="text-base font-semibold text-gray-600 text-center mb-2">How It's Work</h2>
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Start Trading <span className="text-gray-600">on Your Terms</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-center items-start">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <StepCard {...step} />
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center h-full">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div> 
        </div>
        
      </div>
    </section>
  );
};

export default HowitWorks;