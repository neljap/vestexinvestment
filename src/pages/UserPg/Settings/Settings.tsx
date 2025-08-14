import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../app/AuthContext"
import { profilebar } from "../../../assets"
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../../../utils";
import { TopNav } from "../components";
import UserFooter from "../components/UserFooter";
import TestScroll from "../components/TestScroll";
import { ChangePicture, RemovePicture } from "./components";


const AccountPg = () => {
    const {data} = useContext(AuthContext);
    const [resetLoading, setResetLoading] = useState(false);
    const [showRemovePPModal, setShowRemovePPModal] = useState(false);
    const [showChangePPModal, setShowChangePPModal] = useState(false);

    useEffect(() => {
        document.title = "Vestex Investment | Account"
    }, [])
    const sendResetLink = async() => {
        // Logic to send password reset link
        setResetLoading(true)
        try {
            const response = await axios.post(`${baseUrl}/forgot-password`, {email: data?.email})
            if(response){
                toast.success("Reset Password Link Sent", {position: "bottom-left", className: "font-[Jost]"})
            }
        } catch (error) {
            toast.error("An Error Occured", {position: "bottom-left", className: "font-[Jost]"})
        }finally{
            setResetLoading(false)
        }
    }
  return (
    <div className="min-h-screen bg-dashbg">
      <TopNav />
      <TestScroll />
     <div className="container">
       {/* Header/Breadcrumbs */}
          <div className="flex justify-end text-sm text-gray-500 mb-2">
            <span className="text-neutral-100">Account</span>
          </div>
        <div className="rounded-xl flex flex-col gap-3 items-start border border-neutral-200 dark:border-neutral-700 bg-dashcont text-neutral-100  px-4 py-6 my-4 md:mt-2 md:mb-4 mb-2">
            <h3>Account Information</h3>
            <div className="flex items-center justify-center gap-4">
                <img src={data?.profilePics == "" ?  profilebar : data?.profilePics} alt="" className="size-20" />
                <div className="flex md:flex-row flex-col items-center gap-3">
                    <button className="md:py-1 py-0.5 px-1.5 md:px-3 text-sm md:text-md border shadow border-neutral-700 dark:border-neutral-100 text-neutral-700 dark:text-neutral-100 font-[500] font-[Jost] rounded" onClick={() => setShowChangePPModal(true)}>Change Picture</button>
                    <button className="md:py-1 py-0.5 px-1.5 md:px-3 text-sm md:text-md border shadow border-red-500 text-red-800 font-[500] font-[Jost] rounded" onClick={() => setShowRemovePPModal(true)}>Remove Picture</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Full Name</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data ? data?.fullname : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1">Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Email Address</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data ? data?.email : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" >Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Password</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">******</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={sendResetLink}>
                        {resetLoading ? (
                            <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                      viewBox="0 0 24 24"
                    ></svg>
                    Sending Reset Link...
                  </div>
                        ): "Send Password Reset Link"}
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Date of Birth</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.dob ? new Date(data?.dob).toLocaleDateString() : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" >Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Phone Number</h3>   
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.number == "" ? "Not set" : data?.number}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" >Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Country</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.country == "" ? "Not set" : data?.country}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1">Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>State/Province/Area</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.state == "" ? "Not set" : data?.state}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1">Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full pb-3">
                <div>
                    <h3>City</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.city == "" ? "Not set" : data?.city}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1">Edit</button>
                </div>
            </div>          
        </div>
    </div>  
    <UserFooter />
    {showChangePPModal && <ChangePicture showChangePPModal={showChangePPModal} setShowChangePPModal={setShowChangePPModal}/>}
    {showRemovePPModal && <RemovePicture showRemovePPModal={showRemovePPModal} setShowRemovePPModal={setShowRemovePPModal} />}
    </div>
    
  )
}

export default AccountPg;