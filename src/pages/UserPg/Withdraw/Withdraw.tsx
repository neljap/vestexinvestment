import toast from "react-hot-toast";
import { TopNav } from "../components"
import TestScroll from "../components/TestScroll"
import UserFooter from "../components/UserFooter"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../app/AuthContext";
import { baseUrl } from "../../../utils";


const Withdraw = () => {
  const [accnumber, setAccnumber] = useState("");
  const [bankname, setBankname] = useState("");
  const [amount, setAmount] = useState<any | null>(null);
  const [otp, setOtp] = useState<any | String>("");
  const [withLoading, setWithLoading] = useState(false);
  
  const [other, setOther] = useState("");

  const {data} = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    setWithLoading(true);
    try {
      if(data?.verified == false){
        toast.error("Account Not Verified, Kindly Verify your Account", {position: "bottom-left"})
        return;
      }
      if(amount  < 50000){
        toast.error("Amount is too Low", {position: "bottom-left", className: "font-[Jost]"})
        return;
      }else if(otp == 340845 || 230457 || 659265 || 973270 ){

      let address = ''
        // console.log({userid: data._id, accnumber, bankname, amount, otp, other})
      let response = await axios.post(`${baseUrl}/withdraw`, {userid: data._id,  accnumber, address, bankname, amount, otp, other});
      if(response) {
        toast.success("Withdraw Request Sent Successfully", {position: "bottom-left", className: "font-[Jost]"});
        navigate("/user/withdraw-processing")
      }
      }else{
        toast.error("Wrong OTP", {position: "bottom-left", className: "font-[Jost]"})
        return;
      }
    } catch (error) {
      toast.error(`Error: ${error}`, {position: "bottom-left", className: "font-[Jost]"})
    }finally{
      setWithLoading(false);
      setAccnumber("");
      setBankname("");
      setAmount(null);
      setOtp("");
      setOther("");
    }
  } 
  return (
    <div className="bg-[#222736] min-h-screen">
      <TopNav />
      <TestScroll />
      <div className="container">
        {/* Header/Breadcrumbs */}
      <div className="flex justify-end text-sm text-gray-500 mb-2">
        <span className="text-neutral-100">Withdraw</span>
      </div>
      <div>
        <div className="">
            <div className="max-w-md mx-auto my-8 font-[Jost] bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="text-xl py-4 px-6 bg-[#86b144] text-white text-center font-bold uppercase">
        Withdraw Through Bank Transfer
    </div>
    <form className="py-4 px-6 dark:bg-[#2a3042]" onSubmit={handleSubmit}>
      <div className="mb-4">
                  <label className="block text-neutral-700 dark:text-neutral-100 font-bold mb-2" >
                      Enter Amount to Withdraw ($)
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 dark:text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
                      id="name" type="number" required placeholder="Enter Amount" value={amount} onChange={(e: any) => setAmount(e.target.value)}/>
              </div>
              <div className="mb-4">
                  <div className="flex gap-4 items-center py-1">
                  <label className="block text-neutral-700 dark:text-neutral-100 font-bold mb-2" >
                      Enter OTP
                  </label>    
                  <div>
                      <button type="button" className="rounded py-1 font-[Jost] px-3 bg-neutral-700 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-700" onClick={() => toast.success("Contact Support for OTP", {position: "bottom-left", className: "font-[Jost]"})}>Request OTP</button>
                  </div>
                  </div>
                  
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 dark:text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
                      id="text" type="text" required placeholder="Enter OTP" value={otp} onChange={(e:any) => setOtp(e.target.value)}/>
              </div>
        <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-100 font-bold mb-2" >
              Bank Name
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 dark:text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text"  required placeholder="Enter your Bank Name" value={bankname} onChange={(e:any) => setBankname(e.target.value)} />
        </div>
        <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-100 font-bold mb-2" >
                Account Number
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 dark:text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
                id="text" type="text" placeholder="Enter your Account Number" required value={accnumber} onChange={(e:any) => setAccnumber(e.target.value)}/>
        </div>

        <div className="mb-4">
            <label className="block text-neutral-700 dark:text-neutral-100 font-bold mb-2"  >
              Bank Account Information
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 dark:text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
                id="message" value={other} onChange={(e:any) => setOther(e.target.value)}  rows={4} placeholder="Enter any additional information"></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
            <button
                className="bg-neutral-900 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-700 py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
                  {withLoading ? "Processing..." : "Submit Withdraw Request"}
            </button>
        </div>

    </form>
</div>
        </div>
    </div>
      </div>
      <UserFooter />
      </div>
  )
}

export default Withdraw