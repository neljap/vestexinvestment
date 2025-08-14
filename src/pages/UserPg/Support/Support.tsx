import { useContext, useEffect, useState } from "react";
import { TopNav } from "../components"
import TestScroll from "../components/TestScroll"
import { AuthContext } from "../../../app/AuthContext";
import axios from "axios";
import { baseUrl } from "../../../utils";
import toast from "react-hot-toast";
import SpinnerLoading from "../../HomePg/components/SpinnerLoading";


const Support = () => {
  const { data } = useContext(AuthContext);
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    document.title = "Support - Vestex Investment";
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormLoading(true);
    try {
      let response = await axios.post(`${baseUrl}/support`, {
        subject,
        category,
        message,
        userid: data?._id
      });
      if(response){
        toast.success("Support ticket submitted successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#333",
            color: "#fff",
            font: "Jost, sans-serif",
          },
        });
      }
      setFormLoading(false);
      alert
     
    } catch (error) {
      
    }finally{
      setFormLoading(false);
 setSubject("");
      setCategory("");
      setMessage("");
    }
  }
  return (
    <div>
      {loading ? (
        <SpinnerLoading />
      ) : (  
      <div className="bg-dashbg min-h-screen">
      <TopNav />
      <TestScroll />
      {/* Header/Breadcrumbs */}
      <div className="flex justify-end text-sm text-gray-500 mb-2">
        <span className="text-neutral-100">Support</span>
      </div>
      <div className="p-6  rounded-lg shadow-md ">
        <form action="" className="p-4 bg-dashcont rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-white mb-6">Support Ticket</h2>

      <div className="mb-4">
        <label htmlFor="subject"  className="block text-gray-300 text-sm font-bold mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject"
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-300 text-sm font-bold mb-2">
          Select Category
        </label>
        <select
          id="category"
          value={category }
          onChange={(e) => setCategory(e.target.value)}
             className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
        >
          <option>Select Category</option>
          <option>Technical Issue</option>
          <option>Billing Question</option>
          <option>Feature Request</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white resize-y"
          placeholder=""
        ></textarea>
      </div>

      <div className="flex items-center justify-start">
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {formLoading ? "Submitting..." : "Submit Ticket"}
        </button>
      </div>  
        </form>
      
    </div>
    </div>   
      )}
     
    </div>
    
    
  )
}

export default Support

// src/pages/UserPg/Support/Support.tsx