import { Link } from "react-router-dom"
import { TopNav } from "../components"


const KycVerify = () => {
  return (
    <div className="">
      <TopNav />
      <div className="">
        <div className="p-6 bg-gray-100 min-h-screen">
          {/* Header/Breadcrumbs */}
          <div className="flex justify-end text-sm text-gray-500 mb-2">
            <span>KYC Verification</span>
          </div>

          {/* Main Content */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">KYC Verification</h1>
          
          {/* KYC Form or Instructions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Please complete your KYC verification to continue using our services.</p>
            {/* Add form or instructions here */}
            <img src="" alt="" />
            <p>With tier verification you stand a chance to increase your daily withdrawal limit.</p>
            <p>To complete your KYC verification, please provide a valid government-issued ID document such as a passport, driver's license, or national ID card.</p>
            <p>Ensure that the document is clear and legible, with all details visible.</ p>
            <p>Accepted formats include JPEG, PNG, and PDF. The maximum file size is 5MB.</p>
            <p>Once you submit your document, our team will review it and notify you of the verification status within 24-48 hours.</p>
            <p>For any issues or questions, please contact our support team.</p>
            <Link to="/user/kyc-data" className="text-blue-600 hover:underline">
            <button className="bg-neutral-900 rounded-lg px-4 py-2">Click here for Verification</button>
            </Link>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default KycVerify