import { useContext, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaAngleDown, FaClipboard } from "react-icons/fa6";
import {
  ADACoin,
  BTCoin,
  cashappImg,
  // curplanImg,
  ETHCoin,
  paypalImg,
  USDTCoin,
  venmoImg,
  zelleImg,
} from "../../../assets";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { PiCoinsFill } from "react-icons/pi";
import { toast } from "react-hot-toast";
import { BiSolidCloudUpload } from "react-icons/bi";
import axios from "axios";
import { AuthContext } from "../../../app/AuthContext";
import { baseUrl } from "../../../utils";
import { TopNav } from "../components";
import TestScroll from "../components/TestScroll";
import UserFooter from "../components/UserFooter";


const DepositPg = () => {
  const [bwValue, setBwValue] = useState<any>(null);
  const [bwModal, setBwModal] = useState(false);
  // Crypto Option
  const [crypOption, setCrypOption] = useState(false);
  const [cryptValue, setCryptValue] = useState(0);
  const [cyptInput, setCyptInput] = useState<any>(null);
  const [cryptModal, setCryptModal] = useState(false);
  const [cyptCDeposit, setCyptCDeposit] = useState(false);

  // Mobile Money Option
  const [mmValue, setMmValue] = useState(0);
  const [mmInput, setMmInput] = useState<any>(null);
  const [mmModal, setMmModal] = useState(false);
  const [mpOptions, setMpOptions] = useState(false);
  // const handleW

  // const [copyCB, setCopyCB] = useState<string | void>(null)
  const [isCopied, setIsCopied] = useState(false);
  const [depRef, setDepRef] = useState("");

  const [loading, setLoading] = useState(false);

  // input Ref
  const cyptInputRef = useRef<any>(null);

  const { data } = useContext(AuthContext);

  const modalopt = mmValue == 1 ? "PayPal": mmValue == 2 ? "Zelle" : mmValue == 3 ? "Cashapp" : "Venmo"

  useEffect(() => {
            document.title = "Vestex Investment | Deposit"
          }, [])
    

  // This is the function we wrote earlier
  async function copyTextToClipboard() {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(
        cryptValue == 1
          ? "bc1qhjqmuht400vpcz0wrdnj76mrfetnms4n0r3s3m"
          : cryptValue == 2
          ? "0x31c29387a851b68A85F24a6A7d1df0DB4494FD91"
          : cryptValue == 3
          ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
          : cryptValue == 4
          ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
          : ""
      );
    } else {
      return document.execCommand(
        "copy",
        true,
        cryptValue == 1
          ? "bc1qhjqmuht400vpcz0wrdnj76mrfetnms4n0r3s3m"
          : cryptValue == 2
          ? "0x31c29387a851b68A85F24a6A7d1df0DB4494FD91"
          : cryptValue == 3
          ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
          : cryptValue == 4
          ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
          : ""
      );
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard()
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        toast.error(err, { position: "bottom-left", className: "font-[Jost]" });
      });
  };

  const preFile = async (type: any) => {
    const data = new FormData();
    data.append("file", depRef);
    data.append("upload_preset", "kyc_preset");

    try {
      let cloudName = "dpqswhzt3";
      let resourceType = type === "image" ? "image" : "";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      // console.log("secure_url", secure_url)
      return secure_url;
    } catch (error: any) {
      toast.error(error.code, { position: "bottom-left", className: "font-[Jost]" });
    }
  };

  const uploadFile = async (e: any) => {
    e.preventDefault();
    if (!depRef) {
      toast.success("Kindly Upload your Payment Receipt", {
        position: "bottom-left",
        className: "font-[Jost]"
      });
      return;
    }

    try {
      setLoading(true);
      const kycinfo = await preFile("image");

      if (!kycinfo || !data?._id) {
        toast.success("Payment Receipt not uploaded, Kindly Upload", {
          position: "bottom-left",
          className: "font-[Jost]"
        });
        return;
      } else {
        await axios.post(`${baseUrl}/receipts`, {
          userid: data?._id,
          receipt: kycinfo,
        });
        toast.success("Receipt Uploaded Successfully", {
          position: "bottom-left",
          className: "font-[Jost]"
        });
      }
    } catch (error: any) {
      toast.error(error.code, { position: "bottom-left", className: "font-[Jost]" });
    } finally {
      setLoading(false);
      setDepRef("");
    }
  };

  const uploadRef = () => {
    cyptInputRef.current.click();
  };

  return (
    <div className="bg-[#222736] min-h-screen">
      <TopNav />
      <TestScroll />
      <div className="container">
        {/* Header/Breadcrumbs */}
          <div className="flex justify-end text-sm text-gray-500 mb-2">
            <span className="text-neutral-100">Deposit</span>
          </div>
        <div className="flex flex-col gap-4 py-8">
          {/* Crypto */}
          <>
            <div className="rounded-lg shadow-lg bg-dashcont text-neutral-100">
              <div className="flex flex-col gap-4 pb-16 text-center p-8">
                <div className="mx-auto">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <PiCoinsFill size={24} />
                    <p className="text-lg font-[500]">Crypto</p>
                  </div>
                  <p className="font-[400]">Deposits Using Crypto</p>
                </div>
                <div className="relative ">
                  <div
                    className="w-full border border-neutral-600 hover:border-primary cursor-pointer px-2 py-2 rounded-lg"
                    onClick={() => setCrypOption(!crypOption)}
                  >
                    <div className="flex flex-row items-center w-full justify-between">
                      <p>
                        {cryptValue == 1 ? (
                          <div className="flex flex-row gap-1">
                            <img src={BTCoin} alt="" />{" "}
                            <p className="font-[500]">Bitcoin</p>{" "}
                          </div>
                        ) : cryptValue == 2 ? (
                          <div className="flex flex-row gap-1">
                            <img src={ETHCoin} alt="" />{" "}
                            <p className="font-[500]">Ethereum</p>{" "}
                          </div>
                        ) : cryptValue == 3 ? (
                          <div className="flex flex-row gap-1">
                            <img src={ADACoin} alt="" />{" "}
                            <p className="font-[500]">USDC TRC-20</p>{" "}
                          </div>
                        ) : cryptValue == 4 ? (
                          <div className="flex flex-row gap-1">
                            <img src={USDTCoin} alt="" />{" "}
                            <p className="font-[500]">Tether USDT TRC-20</p>{" "}
                          </div>
                        ) : (
                          "Select a Deposit Asset"
                        )}
                      </p>
                      <FaAngleDown />
                    </div>
                  </div>
                  {crypOption && (
                    <div
                      className="absolute bg-[#2a3042] w-full top-14 left-0  rounded-lg shadow-lg flex flex-col items-start justify-start p-2 z-10"
                      onClick={() => setCrypOption(!crypOption)}
                    >
                      <div className="pl-3 text-start">
                        <p className="font-[500]">Recommendation</p>
                      </div>
                      <div
                        className="py-2 pl-3  hover:bg-neutral-700  w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setCryptValue(1)}
                      >
                        {" "}
                        <img src={BTCoin} alt="" />{" "}
                        <p className="font-[500]">Bitcoin</p>
                      </div>
                      <div
                        className="py-2 pl-3  hover:bg-neutral-700  w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setCryptValue(2)}
                      >
                        {" "}
                        <img src={ETHCoin} alt="" />{" "}
                        <p className="font-[500]">Ethereum</p>
                      </div>
                      <div
                        className="py-1 pl-3  hover:bg-neutral-700  w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setCryptValue(3)}
                      >
                        {" "}
                        <img src={ADACoin} alt="" />{" "}
                        <p className="font-[500]">USDC TRC-20</p>
                      </div>
                      <div
                        className="py-1 pl-3  hover:bg-neutral-700  w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setCryptValue(4)}
                      >
                        {" "}
                        <img src={USDTCoin} alt="" />{" "}
                        <p className="font-[500]">USDT TRC-20</p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {cryptValue > 0 && (
                    <div className="relative">
                      <input
                        type="text"
                        value={
                          cryptValue == 1
                            ? "bc1qhjqmuht400vpcz0wrdnj76mrfetnms4n0r3s3m"
                            : cryptValue == 2
                            ? "0x31c29387a851b68A85F24a6A7d1df0DB4494FD91"
                            : cryptValue == 3
                            ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
                            : cryptValue == 4
                            ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
                            : ""
                        }
                        className=" w-full border border-neutral-200 hover:border-green-400 bg-dashbg rounded shadow px-4 py-2"
                      />
                      <div
                        className="absolute right-2 top-2 cursor-pointer flex flex-row justify-center items-center"
                        onClick={handleCopyClick}
                      >
                        <FaClipboard />{" "}
                        <p className="text-sm">
                          {isCopied ? "Copied" : "Copy"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  value={cyptInput}
                  onChange={(e) => setCyptInput(e.target.value)}
                  className="w-full p-2 rounded-lg border bg-dashbg border-neutral-100"
                  placeholder="Enter Amount in USD"
                />
                <div>
                  {cryptValue > 0 && cyptInput ? (
                    <div>
                      <button
                        className="w-full hover:bg-opacity-20 border hover:border-primary transition-all ease-in-out duration-[1s] hover:text-primary font-[600] rounded-lg py-3 text-white bg-primary"
                        onClick={() => setCryptModal(true)}
                      >
                        Confirm{" "}
                        {cryptValue == 1
                          ? "Bitcoin"
                          : cryptValue == 2
                          ? "Ethereum"
                          : cryptValue == 3
                          ? "USDC TRC-20"
                          : "Tether"}{" "}
                        Deposit
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {cryptModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="max-w-[500px] relative rounded-xl h-fit p-6 text-neutral-100 bg-[#1f2937] flex flex-col justify-center items-center gap-8">
                  <div
                    className="absolute  top-3 right-6 cursor-pointer"
                    onClick={() => setCryptModal(false)}
                  >
                    <FaTimes size={18} />
                  </div>
                  <p className="font-[500] text-lg">
                    Confirm ${Number(cyptInput).toLocaleString()} Deposit of{" "}
                    {cryptValue == 1
                      ? "Bitcoin"
                      : cryptValue == 2
                      ? "Ethereum"
                      : cryptValue == 3
                      ? "USDC TRC-20"
                      : "USDT TRC-20"}{" "}
                  </p>
                  <div className="w-full">
                    <p className="font-[500] py-2">
                      {cryptValue == 1
                        ? "Bitcoin"
                        : cryptValue == 2
                        ? "Ethereum"
                        : cryptValue == 3
                        ? "USDC TRC-20"
                        : "USDT TRC-20"}{" "}
                      Deposit Address
                    </p>
                    {cryptValue > 0 && (
                      <div className="relative">
                        <input
                          type="text"
                          value={
                            cryptValue == 1
                              ? "bc1qhjqmuht400vpcz0wrdnj76mrfetnms4n0r3s3m"
                              : cryptValue == 2
                              ? "0x31c29387a851b68A85F24a6A7d1df0DB4494FD91"
                              : cryptValue == 3
                              ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
                              : cryptValue == 4
                              ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
                              : ""
                          }
                          className="text-black w-full border border-neutral-200 hover:border-primary rounded shadow px-4 py-2"
                        />
                        <div
                          className="absolute right-2 top-2 cursor-pointer flex flex-row justify-center items-center text-neutral-800"
                          onClick={handleCopyClick}
                        >
                          <FaClipboard />{" "}
                          <p className="text-sm ">
                            {isCopied ? "Copied" : "Copy"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    {cyptCDeposit ? (
                      <div >
                        <p className="pb-4 font-[Jost] font-[700]">
                          Upload Deposit Proof (Screenshot)
                        </p>
                        <div
                          className="border-dashed border-2  border-primary p-8 w-full md:w-1/2 flex flex-col items-center justify-center min-h-40 rounded-2xl bg-[#f1f1f1] bg-[#1f2937]"
                          onClick={uploadRef}
                          style={{
                            backgroundImage: depRef
                              ? `url(${URL.createObjectURL(depRef as any)})`
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
                            onChange={(e: any) => setDepRef(e.target.files[0])}
                            ref={cyptInputRef}
                          />
                          {!depRef && (
                            <div>
                              <BiSolidCloudUpload size={40} />
                              <p>
                                Click Here To Upload Screenshot Of Transaction
                              </p>
                            </div>
                          )}
                        </div>
                          {depRef && (
                            <>
                            <button
                          className="bg-primary px-4 py-2 rounded-xl"
                          onClick={uploadFile}
                        >
                          Upload
                        </button>
                        {loading && <p>Loading...</p>}
                            </>
                          )}
                        

                        <p className="text-sm">
                          <span className="font-[500]">Note:</span> The above
                          address is a temporal trading address that becomes
                          invalid after 10 mins of visibility to avoid fraud and
                          phishing and to avoid server overloading, please be
                          sure you're in a secure area for quick and safe
                          deposits.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="py-4">
                          <p className="text-sm">
                            <span className="font-[500]">Note:</span> The above
                            address is a temporal trading address that becomes
                            invalid after 10 mins of visibility to avoid fraud
                            and phishing and to avoid server overloading, please
                            be sure you're in a secure area for quick and safe
                            deposits.
                          </p>
                        </div>
                        <button
                          className="w-full transition-all ease-in-out duration-[1s] hover:bg-white hover:text-primary hover:border-primary border rounded-lg py-2 shadow bg-primary text-white"
                          onClick={() => setCyptCDeposit(true)}
                        >
                          Confirm Deposit
                        </button>
                      </div>
                    )}
                  </div>
                  <div></div>
                </div>
              </div>
            )}
          </>

          {/* Mobile Transfer */}
          <>
            <div className="rounded-lg shadow-lg bg-[#2a3042] text-neutral-100">
              <div className="flex flex-col gap-4 pb-16 text-center p-8">
                <div className="mx-auto">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <RiSecurePaymentFill size={24} />
                    <p className="font-[500]">Mobile Payments</p>
                  </div>
                  <p>Deposits Using Mobile Payments</p>
                </div>
                <div className="relative">
                  <div
                    className="w-full border border-neutral-600 px-2 py-2 rounded-lg cursor-pointer"
                    onClick={() => setMpOptions(!mpOptions)}
                  >
                    <div className="flex flex-row items-center w-full justify-between">
                      <p>
                        {mmValue == 1 ? (
                          <div className="flex flex-row gap-1">
                            <img
                              src={paypalImg}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />{" "}
                            <p className="font-[500]">Paypal</p>{" "}
                          </div>
                        ) : mmValue == 2 ? (
                          <div className="flex flex-row gap-1">
                            <img
                              src={zelleImg}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />{" "}
                            <p className="font-[500]">Zelle</p>{" "}
                          </div>
                        ) : mmValue == 3 ? (
                          <div className="flex flex-row gap-1">
                            <img
                              src={cashappImg}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />{" "}
                            <p className="font-[500]">Cashapp</p>{" "}
                          </div>
                        ) : mmValue == 4 ? (
                          <div className="flex flex-row gap-1">
                            <img
                              src={venmoImg}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />{" "}
                            <p className="font-[500]">Venmo</p>{" "}
                          </div>
                        ) : (
                          "Select a Deposit Asset"
                        )}
                      </p>
                      <FaAngleDown />
                    </div>
                  </div>
                  {mpOptions && (
                    <div
                      className="absolute bg-[#2a3042] w-full top-14 left-0  rounded-lg shadow-lg flex flex-col items-start justify-start p-2"
                      onClick={() => setMpOptions(!mpOptions)}
                    >
                      <div className="pl-3 text-start">
                        <p className="font-[500]">Recommendation</p>
                      </div>
                      <div
                        className="py-2 pl-3  hover:bg-neutral-700 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setMmValue(1)}
                      >
                        {" "}
                        <img
                          src={paypalImg}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />{" "}
                        <p className="font-[500]">Paypal</p>
                      </div>
                      <div
                        className="py-2 pl-3  hover:bg-neutral-700 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setMmValue(2)}
                      >
                        {" "}
                        <img
                          src={zelleImg}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />{" "}
                        <p className="font-[500]">Zelle</p>
                      </div>
                      <div
                        className="py-1 pl-3  hover:bg-neutral-700 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setMmValue(3)}
                      >
                        {" "}
                        <img
                          src={cashappImg}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />{" "}
                        <p className="font-[500]">Cashapp</p>
                      </div>
                      <div
                        className="py-1 pl-3  hover:bg-neutral-700 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setMmValue(4)}
                      >
                        {" "}
                        <img
                          src={venmoImg}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />{" "}
                        <p className="font-[500]">Venmo</p>
                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="number"
                  value={mmInput}
                  onChange={(e) => setMmInput(e.target.value)}
                  className="w-full p-2 rounded-lg border border-neutral-600 bg-dashbg"
                  placeholder="Enter Amount in USD"
                />
                <div>
                  {mmValue > 0 && mmInput ? (
                    <div>
                      <button
                        className="w-full transition-all ease-in-out duration-[1s] hover:text-primary hover:bg-opacity-20 border font-[600] hover:border-primary rounded-lg py-3 text-white bg-primary"
                        onClick={() => setMmModal(true)}
                      >
                        Deposit with{" "}
                        {mmValue == 1
                          ? "Paypal"
                          : mmValue == 2
                          ? "Zelle"
                          : mmValue == 3
                          ? "Cashapp"
                          : "Venmo"}
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {mmModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="max-w-[500px] relative rounded-xl h-fit p-6 bg-dashcont text-neutral-100 flex flex-col justify-center items-center gap-8">
                  <div
                    className="absolute top-3 right-6 cursor-pointer"
                    onClick={() => setMmModal(false)}
                  >
                    <FaTimes size={18} />
                  </div>
                  <p className="font-[600] text-lg">Deposit Using Paypal</p>
                  <div>
                    <p className="font-[500]">
                      To deposit using ({modalopt}), please follow these detailed
                      steps:
                    </p>
                    <div className="flex flex-col gap-2 pl-4 pt-2">
                      <p className="text-sm">
                        1.{" "}
                        <span className="font-[500]">
                          Contact Live Support:
                        </span>{" "}
                        Reach out to our live support team to obtain the
                        specific details required for ({modalopt}). You can contact
                        them via the Live Chat help center. They will provide
                        you with the necessary information to proceed with the
                        payment.
                      </p>
                      <p className="text-sm">
                        2. <span className="font-[500]">Make the Payment:</span>{" "}
                        Using the details provided by our support team, complete
                        the {modalopt} payment. Ensure you follow all the
                        instructions carefully to avoid any errors.
                      </p>
                      <p className="text-sm">
                        3.{" "}
                        <span className="font-[500]">
                          Obtain Proof of Payment:
                        </span>{" "}
                        After making the payment, take a screenshot or obtain a
                        receipt as proof of the transaction. This proof should
                        clearly show the payment details, such as the amount,
                        date, and transaction ID.
                      </p>
                      <p className="text-sm">
                        4.{" "}
                        <span className="font-[500]">Send Payment Proof:</span>{" "}
                        Send the screenshot or receipt of your payment proof to
                        our support team for verification. You can send this via
                        the Live Chat help center. Our team will review and
                        verify your payment to complete the deposit process.
                      </p>
                    </div>
                  </div>
                  <button
                    className="w-full transition-all ease-in-out duration-[1s] hover:bg-opacity-20 hover:text-primary rounded-lg py-2 shadow bg-primary text-white border border-green-400"
                    onClick={() => setMmModal(false)}
                  >
                    Got it!!
                  </button>
                </div>
              </div>
            )}
          </>

          {/* Bank Wire */}
          <>
            <div className="rounded-lg shadow-lg bg-dashcont text-neutral-100 p-8 flex flex-col gap-3">
              <div className="">
                <div className="flex flex-row items-center justify-center gap-2">
                  <GiBanknote size={24} />
                  <p className="font-[500]">Bank Transfer</p>
                </div>
                <p className="text-center">Deposits Using Bank Wire</p>
              </div>
              <input
                type="number"
                value={bwValue}
                onChange={(e) => setBwValue(e.target.value)}
                className="border border-neutral-500 bg-dashbg rounded-lg shadow w-full py-2 px-4 font-[500]"
                placeholder="Enter Amount in USD"
              />
              {bwValue && (
                <button
                  className="w-full transition-all ease-in-out duration-[1s] hover:bg-opacity-20 border hover:border-primary hover:text-primary font-[600] rounded-lg py-3 text-white bg-primary"
                  onClick={() => setBwModal(true)}
                >
                  Deposit with Bank Wire
                </button>
              )}
            </div>
            {bwModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="max-w-[500px] relative rounded-xl h-fit p-6 bg-dashcont text-neutral-100 flex flex-col justify-center items-center gap-8">
                  <div
                    className="absolute top-3 right-6 cursor-pointer"
                    onClick={() => setBwModal(false)}
                  >
                    <FaTimes size={18} />
                  </div>
                  <p className="font-[500] text-lg">Deposit Using Bank Wire</p>
                  <div className="flex flex-row justify-center items-center border border-primary py-2 px-4 rounded-lg gap-2">
                    <FaTimes />
                    <p>
                      Bank wire details are withheld due to security reasons,
                      please contact live support using the live chat system
                      below for more info
                    </p>
                  </div>
                  <button className="w-full hover:bg-opacity-20 hover:text-primary transition-all ease-in-out duration-[1s] font-[600] hover:border-green-400 border rounded-lg py-2 shadow bg-primary text-white">
                    Continue
                  </button>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
      <UserFooter />
    </div>
  );
};

export default DepositPg;
