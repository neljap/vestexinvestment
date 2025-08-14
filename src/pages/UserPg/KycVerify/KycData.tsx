import { BiCloudUpload } from "react-icons/bi"
import { TopNav } from "../components"
import TestScroll from "../components/TestScroll"
import { useContext, useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { baseUrl } from "../../../utils"
import { AuthContext } from "../../../app/AuthContext"

const KycData = () => {
  const [kycFile, setKycFile] = useState<any | string>("");
  const [formLoading, setFormLoading] = useState(false);

  const {data} = useContext(AuthContext);

  let inputRef = useRef<any | null>(null) 

    useEffect(() => {
    document.title = "Vestex Investment | KYC Verify"
  }, [])

  const uploadRef = () => {
    inputRef.current.click()
  }

  const preFile = async (type : any) => {
    const data = new FormData();
    data.append("file", kycFile);
    data.append("upload_preset", "kyc_preset");

    try {
      let cloudName = "dpqswhzt3";
      let resourceType = type === "image" ? "image" : "";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error :any) {
      toast.error(error.code, { position: "bottom-left", className: "font-[Jost]" });
    }
  };

  const uploadFile = async(e : any) => {
    e.preventDefault();
    if (!kycFile) {
      toast.error("Please Upload a file", {
        position: "bottom-left",
        className: "font-[Jost]"
      });
      return;
    }

    try {
      setFormLoading(true)
      const kycinfo = await preFile('image');

      await axios.patch(`${baseUrl}/update/${data?._id}`, {
        kycinfo,
      });

      toast.success("Kyc Data Uploaded Successfully", {position: "bottom-left", className: "font-[Jost]"})
      // window.location.reload()

    } catch (error : any) {
      toast.error(error.code, { position: "bottom-left", className: "font-[Jost]" });
    } finally{
      setFormLoading(false)
      setKycFile("")
    }
  };
  return (
    <div className="bg-[#222736] min-h-screen">
        <TopNav />
        <TestScroll />
        <div className="container">
          {/* Header/Breadcrumbs */}
          <div className="flex justify-end text-sm text-gray-500 mb-2">
            <span className="text-neutral-100">KYC Verification</span>
          </div>
            <div className="shadow rounded mx-auto bg-dashcont text-neutral-100 p-6 w-[600px]">
                <h3 className="text-center font-[600] font-[Jost] text-lg md:text-2xl">Tier Two Verification</h3>
                <p className="text-center">Please kindly upload a government approved identification document. (International Passport, ID Card, Driver licenses and any other document.)</p>
                <p className="text-center">Note: This can be rejected upon submission due to unclear format or wrong input</p>
                <div onClick={uploadRef} style={{backgroundImage: kycFile ? `url(${URL.createObjectURL(kycFile)})` : "", backgroundSize: "cover",  backgroundPosition: "center"}} className="shadow w-full mx-auto h-56 rounded-xl flex items-center justify-center mt-8">
              {!kycFile && (
              <div className="w-[450px] mx-auto rounded border-dashed border-2 border-gray-300 p-4 mt-4 flex flex-col items-center justify-center">
                <BiCloudUpload size={80}/>
                <p className="font-[600] font-[Jost] text-xl">Upload Your Document Here</p>
              </div>   
              )}
               
              <input
                  type="file"
                  style={{ display: "none" }}
                  accept="/image/*"
                  onChange={(e:any) => setKycFile(e.target.files[0])}
                  ref={inputRef}
                  // onChange={(e: any) => setFrontFile(e.target.files[0])}
                  // ref={frontIdRef}
                />
              </div> 
                <div className="mx-auto flex items-center justify-center pt-10 pb-4">
                    
                  <button onClick={uploadFile} className="py-2 px-4 bg-green-400 text-dashbg rounded-full">{formLoading ? "Submitting..." : "Submit"}</button>  
                </div>
                
            </div>
            </div>
    </div>
  )
}

export default KycData