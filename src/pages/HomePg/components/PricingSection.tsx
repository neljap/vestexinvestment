import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureProps {
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ text }) => (
  <div className="flex items-center mb-2">
    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span className="text-gray-700 text-sm">{text}</span>
  </div>
);

interface PricingCardProps {
  plan: string;
  price: Number;
  roi: Number;
  hprice: Number;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  roi,
  hprice,
  features,
  buttonText,
}) => {
  return (
    <div className="bg-white border-y-2 border-black rounded-lg shadow-lg p-6 flex flex-col items-start transform transition duration-300 hover:scale-105">
      <div className="flex flex-col justify-center items-center w-full">
       <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center font-[Jost]">{plan}</h3>
      <p className="text-2xl font-bold text-gray-900 mb-4 font-[Jost]">${Number(price).toLocaleString()}</p> 
      </div>
      
      <div className='py-4'>
        <p className='text-gray-800'> <span className='font-[600] font-[Jost]'>Min Deposit:</span> ${Number(price).toLocaleString()}</p>
        <p className='text-gray-800'><span className='font-[600] font-[Jost]'>Max Deposit:</span> ${Number(hprice).toLocaleString()}</p>
        <p className='text-gray-800'><span className='font-[600] font-[Jost]'>Return of Interest:</span> {Number(roi).toLocaleString()}%</p>
      </div>
      {/* <p className="text-gray-600 mb-6">{description}</p> */}
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} text={feature} />
        ))}
      </div>
      <Link to="/register" className="mt-6 px-8 py-3 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100 transition duration-300">
        {buttonText}
      </Link>
    </div>
  );
};

const PricingSection = () => {
  const pricingPlans = [
    {
      plan: "Basic plan",
      price: 500,
      hprice: 999,
      roi: 20,
      description: "Free plan for all users.",
      features: ["97% AI Precision",
"24/7 Live Support",
"Core Market Trends",
"Affordable Service Rates",
"Monthly Market Review",
"Community Discussion Hub",
"Mobile App Assistance"],
      buttonText: "Get Started",
      buttonLink: "/login",
      imageSrc: "/src/assets/logo_light.png",
    },
    {
      plan: "Business plan",
      price: 1000,
      hprice: 1999,
      roi: 25,
      description: "Ideal for small businesses.",
      features: [
        "98% AI Precision",
"Detailed Market Trends",
"Member Savings Program",
"Learning Support Tools",
"Weekly Market Review",
"Investor Network Entry",
"Strengthened Data Protection"
      ],
      buttonText: "Get Started",
      buttonLink: "#",
      imageSrc: "/src/assets/logo_light.png",
    },
    {
      plan: "Enterprise plan",
      price: 2000,
      hprice: 4999,
      roi: 30,
      description: "Works best for enterprise companies.",
      features: ["99% AI Precision",
"Longer Support Availability",
"Elite Market Analysis",
"Lower Transaction Costs",
"Custom Investment Plans",
"Members-Only Sessions",
"Adjustable Payout Methods"],
      buttonText: "Get Started",
      buttonLink: "#",
      imageSrc: "/src/assets/logo_light.png",
    },
    {
      plan: "Ultimate plan",
      price: 5000,
      roi: 35,
      hprice: 10000,
      description: "For large-scale enterprises.",
      features: [ "99.5% AI Precision",

"Fast-Track Assistance",

"Premium Market Analysis",

"No Transaction Costs",
"Personal Account Advisor",
"Elite Event Access",
"Tailored Investment Plan",
"Priority Opportunity Entry"],
      buttonText: "Get Started",
      buttonLink: "#",
      imageSrc: "/src/assets/logo_light.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Investment Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;