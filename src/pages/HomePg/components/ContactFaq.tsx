import axios from 'axios';
import  { useState } from 'react';

const ContactFaq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<any | null>(null);
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async() => {
    setLoading(true)
    try {
      await axios.post("")
    } catch (error) {
      
    }finally{
      setLoading(false)
      setName("")
      setEmail("")
      setNumber(null);
      setSubject("")
      setMessage("")

    }
  }

  const faqs = [
    {
      question: "What types of investments do you offer?",
      answer: "We offer a range of investments including stocks, Real Estate, Oil & Gas, Agriculture and Cryptocurrencies."
    },
    {
      question: "How do I get Started?",
      answer: "Simply click on the 'Get Started' button, fill out the registration form, and fund your account to start investing."
    },
    {
      question: "is there a minimum Investment Amount?",
      answer: "Yes, The Investment start as low as $500"
    },
    {
      question: "Are my Investments Safe?",
      answer: "Yes, There are 100% safe, Insured and Regulated by the Government Regulatory Bodies"
    },
    {
      question: "Can I Withdraw My Money AnyTime?",
      answer: "Yes, Once your Investment Yields, you can make withdrawals anytime."
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-purple-50 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Left Section - Contact Us & FAQ */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold font-[Jost] text-gray-800 mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-12 max-w-lg">
              We've gathered answers to the most common questions we receive (FAQ) - you might just find what you're looking for here! If not, no worries! We'll be happy to help. Just drop us a message using the form below.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-[Jost]">Frequently Asked Questions (FAQ)</h2>
            

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="zoom-in-down">
                  <button
                    className="w-full flex justify-between items-center p-6 text-lg font-semibold text-gray-800 focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <svg
                      className={`w-6 h-6 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="p-6 pt-0 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 bg-white p-8 rounded-lg shadow-lg" data-aos="zoom-in-down">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Still have questions?</h2>
            <p className="text-gray-600 mb-8">We want to hear from you</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name *</label>
                  <input type="text" id="name" value={name} onChange={(e:any) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email *</label>
                  <input type="email" id="email" value={email} onChange={(e:any) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone number</label>
                <input type="number" id="phone" value={number} onChange={(e:any) => setNumber(e.target.value)}  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                <input type="text" id="subject" value={subject} onChange={(e:any) => setSubject(e.target.value)} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message *</label>
                <textarea id="message" rows={6} value={message} onChange={(e: any) => setMessage(e.target.value)} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline transition-colors"
              >
                {loading ? "Submitting..." : "Submit"}
        
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFaq;