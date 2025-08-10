import { BiCloudUpload } from "react-icons/bi"
import { TopNav } from "../components"
import Breadcrumbs from "../components/Breadcrumbs"

const KycData = () => {
  return (
    <div>
        <TopNav />
        <div className="p-6 bg-gray-100 min-h-screen">
            <Breadcrumbs>Tier Two Verification</Breadcrumbs>
            <div className="shadow rounded mx-auto bg-white p-6 w-[600px]">
                <h3 className="text-center">Tier Two Verification</h3>
                <p className="text-center">Please kindly upload a government approved identification document. (International Passport, ID Card, Driver licenses and any other document.)</p>
                <p className="text-center">Note: This can be rejected upon submission due to unclear format or wrong input</p>
                <div className="w-[450px] mx-auto rounded border-dashed border-2 border-gray-300 p-4 mt-4 flex flex-col items-center justify-center">
                        <BiCloudUpload size={80}/>
                        <p className="text-center">Click here to Upload</p>
                </div>
                <div className="mx-auto flex items-center justify-center pt-10 pb-4">
                    
                  <button className="py-2 px-4 bg-neutral-900 text-neutral-100 rounded-full">Submit</button>  
                </div>
                
            </div>
            </div>
    </div>
  )
}

export default KycData