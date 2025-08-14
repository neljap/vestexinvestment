import axios from "axios"
import { useContext, useRef, useState } from "react"
import toast from "react-hot-toast"
import { BiSolidCloudUpload } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import { baseUrl } from "../../../../utils"
import { AuthContext } from "../../../../app/AuthContext"

interface ChangePictureTypes {
    setShowChangePPModal: any
    showChangePPModal: any
}
export const ChangePicture = ({setShowChangePPModal, showChangePPModal}: ChangePictureTypes) => {
      const [profileFile, setProfileFile] = useState<any | string>("");
      const [formLoading, setFormLoading] = useState(false);

      const {data} = useContext(AuthContext);

      let inputRef = useRef<any | null>(null) 
    const uploadRef = () => {
    inputRef.current.click()
  }

  const preFile = async (type : any) => {
    const data = new FormData();
    data.append("file", profileFile);
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

    const UploadChangePicture = async(e: any) => {
        e.preventDefault();
    if (!profileFile) {
      toast.error("Please Upload a file", {
        position: "bottom-left",
        className: "font-[Jost]"
      });
      return;
    }

    try {
      setFormLoading(true)
      const profilePics = await preFile('image');

      let response = await axios.patch(`${baseUrl}/update/${data?._id}`, {
        profilePics,
      });
      if(response){
      toast.success("Kyc Data Uploaded Successfully", {position: "bottom-left", className: "font-[Jost]"})
      }
      // window.location.reload()

    } catch (error : any) {
      toast.error(error.code, { position: "bottom-left", className: "font-[Jost]" });
    } finally{
      setFormLoading(false)
      setProfileFile("")
    }
    }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                        <div className="max-w-[500px] relative rounded-xl h-fit p-6 text-neutral-100 bg-dashbg flex flex-col justify-center items-center gap-8">
                          <div
                            className="absolute  top-3 right-6 cursor-pointer"
                            onClick={() => setShowChangePPModal(!showChangePPModal)}
                          >
                            <FaTimes size={18} />
                          </div>
                          <div>
                              <div >
                                <p className="pb-4 font-[Jost] font-[700] text-center">
                                  Upload Deposit Proof (Screenshot)
                                </p>
                                <div
                                  className="border-dashed border-2  border-green-400 p-8 w-full  flex flex-col items-center justify-center min-h-40 rounded-2xl bg-dashcont"
                                  onClick={uploadRef}
                                  style={{
                                    backgroundImage: profileFile
                                      ? `url(${URL.createObjectURL(profileFile as any)})`
                                      : "",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <input
                                    type="file"
                                    name=""
                                    style={{ display: "none" }}
                                    accept="/image/*"
                                    id=""
                                    onChange={(e: any) => setProfileFile(e.target.files[0])}
                                    ref={inputRef}
                                  />
                                  {!profileFile && (
                                    <div className="flex flex-col justify-center items-center">
                                      <BiSolidCloudUpload size={60} />
                                      <p className="font-[Jost] font-[600]">
                                        Click Here To Upload Profile Picture
                                      </p>
                                    </div>
                                  )}
                                </div>
                                  {profileFile && (
                                    <>
                                    <button
                                  className="bg-primary px-4 py-2 rounded-xl"
                                  onClick={UploadChangePicture}
                                >
                                  Upload
                                </button>
                                {formLoading && <p>Loading...</p>}
                                    </>
                                  )}
                              </div>

                          </div>
                          <div></div>
                        </div>
                      </div>
    )
}


interface RemovePictureTypes {
    showRemovePPModal: any 
    setShowRemovePPModal: any
}
export const RemovePicture = ({ setShowRemovePPModal}: RemovePictureTypes) => {
    const {data} = useContext(AuthContext);
    const RemovePPFunc = async() => {
        try {
        let response = await axios.patch(`${baseUrl}/update/${data?._id}`, {
        profilePics: "",
      });
      if(response){
        toast.success("Profile Picture Removed", {position: "bottom-left"})
      }
        } catch (error) {
            toast.error(`An Error Occurred: ${error}`, {position: "bottom-left"})
        }finally {
            setShowRemovePPModal(false)
        }
    }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-80 rounded-xl h-40 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8">
            <p>Are you sure you want to Log Out?</p>
            <div className="flex justify-between items-center px-8 gap-4">
              <button
                className="bg-primary px-4 py-2 rounded-xl"
                onClick={RemovePPFunc}
              >
                Yes
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded-xl"
                onClick={() => setShowRemovePPModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
    )
}
