
// import "./TestHero.css"
import Navbar from "./Navbar";
// import { Button } from "../../ui";
import { Link } from "react-router-dom";

const TestHero = () => {

  return (
    <div className="">
        <Navbar />

        <div className="h-[100vh] bg-heroimgone bg-center bg-opacity-50 bg-cover flex justify-center items-center align-middle w-full ">
                <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
                  <h3 className="text-xl md:text-4xl text-center font-[Jost]" data-aos="zoom-in-down">SECURE YOUR FUTURE WITH SMART REAL ESTATE INVESTMENT - HIGH RETURNS, ZERO RISK AND LASTING VALUE</h3>

                    <p className="text-center md:text-lg text:sm" data-aos="zoom-in-down">Discover a smarter way to build wealth through carefully selected real estate opportunities. Our investment options are designed to deliver strong returns with minimal risk, backed by expert insights and market research.</p>
                    <Link to="/register" data-aos="zoom-in-down">
                    <button className="bg-neutral-900 border border-gray-100 rounded-lg px-4 py-2">Get Started</button>
                    </Link>
                    
                </div>
              </div>
               
            </div>
        
    </div>
  )
}

export default TestHero;


// {/* <Slider {...settings}>
//             <div className="h-[75vh] bg-heroimgone bg-center bg-opacity-50 bg-cover flex justify-center items-center align-middle w-full ">
//                 <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
//                 <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
//                   <h3 className="text-xl md:text-4xl">EMPOWER YOUR WEALTH JOURNEY</h3>

//                     <p className="text-center md:text-lg text:sm">Navigate the markets with confidence using our advanced trading platform, designed for both beginners and seasoned investors seeking precision, speed, and reliability</p>
//                     <Link to="/login">
//                     <button className="bg-neutral-900 rounded-lg px-4 py-2">Get Started</button>
//                     {/* <Button btntext="Get Started"/> */}
//                      {/* <Button btntext="Get Started"/>  */}
//                     </Link>
                    
//                 </div>
//               </div>
               
//             </div>
//             <div className="h-[75vh] bg-heroimgtwo bg-center bg-cover bg-opacity-80">
//               <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
//                 <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
//                   <h3 className="text-xl md:text-4xl text-center">UNLOCKING YOUR FINANCIAL POTENTIALS</h3>
//                     <p className="text-center md:text-lg" >Our user-friendly interface and powerful tools make trading and investing accessible to everyone. Whether you're a seasoned pro or just starting, we've got you covered.</p>
//                     <Link to="/login">
//                      <button className="bg-neutral-900 rounded-lg px-4 py-2">Get Started</button>
//                     </Link>
//                 </div>
//               </div>
                
                
//             </div>
//             <div className="h-[75vh] bg-heroimgthree bg-center bg-cover">
//                 <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
//                 <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
//                   <h3 className="text-xl md:text-4xl text-center"> EXPERIENCE THE FUTURE OF FINANCIAL FREEDOM</h3>
//                     <p className="text-center md:text-lg"> Our platform combines advanced technology and expert insights to revolutionize your trading and investment journey.</p>
//                     <Link to="/login">
//                      <button className="bg-neutral-900 rounded-lg px-4 py-2">Get Started</button>
//                     </Link>
//                 </div>
//               </div>
                
//             </div>
//             <div className="h-[75vh] bg-heroimgfour bg-center bg-cover bg-opacity-80">
//               <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
//                 <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center">
//                   <h3 className="text-xl md:text-4xl text-center">UNLOCKING YOUR FINANCIAL POTENTIALS</h3>
//                     <p className="text-center md:text-lg" >Our user-friendly interface and powerful tools make trading and investing accessible to everyone. Whether you're a seasoned pro or just starting, we've got you covered.</p>
//                     <Link to="/login">
//                      <button className="bg-neutral-900 rounded-lg px-4 py-2">Get Started</button>
//                     </Link>
//                 </div>
//               </div>
                
                
//             </div>
//         </Slider> */}