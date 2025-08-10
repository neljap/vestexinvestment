import { Link } from "react-router-dom";
import ContactFaq from "./ContactFaq";
import TestimonialSection from "./Testimonial";
import PricingSection from "./PricingSection";
import Footer from "./Footer";

const FirstBody = () => {
  const servicesItems = [
    {
      heading: "Dedicated 24 hours Customer Support",
      text: "Our expert support team is available to assist you at every step — from onboarding to ongoing investment management."
    },
    {
      heading: "Bank-Grade Security",
      text: "Your data and assets are protected with industry-leading encryption, multi-layer authentication, and secure custody solutions."
    },
    {
      heading: "Fully Regulated & Compliant",
      text: "We operate under strict regulatory standards to ensure transparency, legal compliance, and investor protection."
    },
    {
      heading: "Expert-Led Investment Insights",
      text: "Our seasoned analysts and advisors provide data-driven strategies and market insights tailored to your goals."
    },
    {
      heading: "Global Access, Local Expertise",
      text: "We offer international investment opportunities with localized support and insights to suit your market preferences."
    }
  ]
  return (
    <div className="relative  text-black overflow-hidden">
      {/* Oil and Gas */}

      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/oil-gas-bg.jpg')" }}
      >
        {/* Yellow overlay */}
        <div className="absolute top-0 right-0 w-full h-full  "></div>

        {/* Hero Content */}
        <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white" >
          <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-xl md:text-4xl text-center font-[Jost] uppercase" data-aos="zoom-in-down">
              Secure Strong Returns in One of the World’s Most Profitable Sectors.
            </h3>

            <p className="text-center md:text-lg text:sm" data-aos="zoom-in-down">
              Step into a powerful asset class that continues to deliver consistent, above-market returns. Our oil and gas investment opportunities give you direct access to energy projects with real-world impact and long-term income potential.
            </p>
            <Link to="/register" data-aos="zoom-in-down">
              <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      
     {/* Trading Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1705992451/hhero_c1gym9.jpg')",
        }}
      >
        {/* Yellow overlay */}
        {/* <div className="absolute top-0 right-0 w-full h-full bg-neutral-700 opacity-75 "></div> */}

        {/* Hero Content */}
         <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
          <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-xl md:text-4xl text-center font-[Jost] uppercase" data-aos="zoom-in-down">
              Build Wealth with Bitcoin: The Future of Digital Investment
Secure, Scarce, and High-Growth
            </h3>

            <p className="text-center md:text-lg text:sm" data-aos="zoom-in-down">
              Bitcoin has proven itself as the most powerful digital asset of the decade — delivering exceptional returns, global adoption, and long-term value. Now is the time to position your portfolio for the future of finance.
            </p>
            <Link to="/register" data-aos="zoom-in-down">
              <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div> 

      {/* Agriculture Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/tracktorfarm.jpg')" }}
      >
        {/* Yellow overlay */}
        <div className="absolute top-0 right-0 w-full h-full  "></div>

        {/* Hero Content */}
         <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
          <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-xl md:text-4xl text-center font-[Jost] uppercase" data-aos="zoom-in-down">
              Invest in Agriculture. Earn Strong Returns.
            </h3>

            <p className="text-center md:text-lg text:sm" data-aos="zoom-in-down">
              Grow Your Wealth by Investing in the Future of Sustainable Farming
Unlock consistent returns and long-term value by investing in high-performing agricultural projects.
            </p>
            <Link to="/register" data-aos="zoom-in-down">
              <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container">
        <h3 className="py-6 text-2xl md:text-4xl font-[Jost] font-[600] text-center">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12 pt-4 pb-8">
          {servicesItems.map((item:any, index) => (
           <div className="shadow rounded flex flex-col justify-start items-start p-6 gap-4 min-h-[300px] border-t-2 border-black" key={index}>
            <div><svg className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg></div>
            <h1 className="text-2xl font-[600]">{item.heading}</h1>
            <p className="text-sm">{item.text}</p>
            <Link to="/register" >
              <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2 text-white ">
                Get Started
              </button>
            </Link>
          </div> 
          ))}
          
        </div>
      </div>

      <PricingSection />
      <TestimonialSection />

      <ContactFaq />


      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default FirstBody;
