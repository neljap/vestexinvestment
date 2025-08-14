import { Link } from "react-router-dom";
import ContactFaq from "./ContactFaq";
import TestimonialSection from "./Testimonial";
import PricingSection from "./PricingSection";
import Footer from "./Footer";
import { Testimony } from "./Testimony";
import Navbar from "./Navbar";
import { useRef } from "react";
import { servicesItems } from "../../../utils";

const FirstBody = () => {
  
// Package
  const PackRef = useRef<any>(null)

  const scrollToPack = () => {
    PackRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

// AboutRef
  const AboutRef = useRef<any>(null)

  const scrollToAbout = () => {
    AboutRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }


  const ServicesRef = useRef<any>(null)

  const scrollToServices = () => {
    ServicesRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const ContactRef = useRef<any>(null)

  const scrollToContact = () => {
    ContactRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const TestyRef = useRef<any>(null)

  const scrollToTesty = () => {
    TestyRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className="overflow-hidden">
      <Navbar AboutRef={scrollToAbout} ServicesRef={scrollToServices} PackagesRef={scrollToPack} TestimonialsRef={scrollToTesty} ContactRef={scrollToContact}/>
      <div id="about" ref={AboutRef}>
            <div className="h-[100vh] md:h-[75vh] bg-black text-neutral-100 ">
                <div className="container">
                <div className="w-full md:w-2/3 justify-center items-center flex flex-col gap-2 md:gap-4 pt-2 md:pt-16 text-center font-[600] mx-auto">
                <h2 className="font-[Jost] text-lg md:text-3xl">Welcome to Vestex Investment – Your Trusted Partner in High-Yield Investments</h2>
<p>At Vestexinvestment, we specialize in diversified asset trading, offering you a smarter way to grow your wealth. Our expertise spans across high-potential markets including real estate, Bitcoin and cryptocurrency trading, agriculture investment, and oil & gas ventures. Backed by a team of experienced analysts and traders, we strategically trade these assets on behalf of our investors to deliver consistent, high-yield returns.</p>

<p>We offer investors up to 35% profit returns, leveraging cutting-edge trading technologies and market insights to maximize performance while minimizing risk. Your capital is not only managed with care—it is secured and backed by government policies, ensuring an added layer of protection and peace of mind.</p>

<p>Whether you're a seasoned investor or just starting your investment journey, Vestexinvestment provides a reliable, transparent, and secure platform to help your money work harder for you.</p>
<Link to="/register">
<button className="bg-green-600 py-2 px-6  rounded text-neutral-100 border border-green-200">Get Started Today.</button>
</Link>

                </div>
                </div>
               
            </div>
      {/* Oil and Gas */}
    <div className="h-[100vh] bg-heroimgone bg-center bg-opacity-50 bg-cover flex justify-center items-center align-middle w-full ">
                <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
                  <h3 className="text-xl md:text-4xl text-center font-[Jost]">SECURE YOUR FUTURE WITH SMART REAL ESTATE INVESTMENT - HIGH RETURNS, ZERO RISK AND LASTING VALUE</h3>

                    <p className="text-center md:text-lg text:sm">Discover a smarter way to build wealth through carefully selected real estate opportunities. Our investment options are designed to deliver strong returns with minimal risk, backed by expert insights and market research.</p>
                    <Link to="/register">
                    <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2">Get Started</button>
                    </Link>
                    
                </div>
              </div>
               
            </div>
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/oil-gas-bg.jpg')" }}
      >
        {/* Yellow overlay */}
        <div className="absolute top-0 right-0 w-full h-full  "></div>

        {/* Hero Content */}
        
        <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white" >
          <div className="container">
           <div className="md:w-2/3 mx-auto w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-xl md:text-4xl text-center font-[Jost] uppercase">
              Secure Strong Returns in One of the World’s Most Profitable Sectors.
            </h3>

            <p className="text-center md:text-lg text:sm" >
              Step into a powerful asset class that continues to deliver consistent, above-market returns. Our oil and gas investment opportunities give you direct access to energy projects with real-world impact and long-term income potential.
            </p>
            <Link to="/register" >
              <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2">
                Get Started
              </button>
            </Link>
          </div> 
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
          <div className="container">
          <div className="md:w-2/3 mx-auto w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-xl md:text-4xl text-center font-[Jost] uppercase">
              Build Wealth with Bitcoin: The Future of Digital Investment
Secure, Scarce, and High-Growth
            </h3>

            <p className="text-center md:text-lg text:sm">
              Bitcoin has proven itself as the most powerful digital asset of the decade — delivering exceptional returns, global adoption, and long-term value. Now is the time to position your portfolio for the future of finance.
            </p>
            <Link to="/register">
              <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2">
                Get Started
              </button>
            </Link>
          </div>  
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
          <div className="container">
           <div className="md:w-2/3 mx-auto w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="text-xl md:text-4xl text-center font-[Jost] uppercase">
              Invest in Agriculture. Earn Strong Returns.
            </h3>

            <p className="text-center md:text-lg text:sm">
              Grow Your Wealth by Investing in the Future of Sustainable Farming
Unlock consistent returns and long-term value by investing in high-performing agricultural projects.
            </p>
            <Link to="/register">
              <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2">
                Get Started
              </button>
            </Link>
          </div> 
          </div>
          
        </div>
      </div>     
      </div>


      {/* Services */}
      <div className="bg-dashbg text-neutral-100" id="services" ref={ServicesRef} >
        <div className="container">
        <h3 className="py-6 text-2xl md:text-4xl font-[Jost] font-[600] text-center">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12 pt-4 pb-8">
          {servicesItems.map((item:any, index) => (
           <div className="shadow rounded flex flex-col justify-start items-start p-6 gap-4 min-h-[300px] border-t-2 border-[#ededed] bg-dashcont" key={index}>
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
      </div>
      <div id="packages" ref={PackRef}>
       <PricingSection /> 
      </div>
      
      
      <div id="testimonials" ref={TestyRef}>
        <div>
          {window.innerWidth < 768 ? (
            <TestimonialSection />
          ) : ( 
            <Testimony />
            // <h1 className="text-center text-3xl py-4">Register Now</h1>
          )}
        </div>
        
      </div>
      
      <div id="contact" ref={ContactRef}>
       <ContactFaq /> 
      </div>
      


      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default FirstBody;
