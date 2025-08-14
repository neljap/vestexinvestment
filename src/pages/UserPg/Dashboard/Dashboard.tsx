import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../app/AuthContext";
import { TopNav } from "../components"
import TestScroll from "../components/TestScroll";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserFooter from "../components/UserFooter";
import SpinnerLoading from "../../HomePg/components/SpinnerLoading";

const Dashboard = () => {
  const {data} = useContext(AuthContext);
 const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
{
      loading ? <SpinnerLoading /> :(
<div className="flex justify-btween flex-col w-full bg-[#222736] min-h-screen">
      {/* Topnav */}
      <TopNav />
      <TestScroll />
     <div className="p-6  ">
      
      {/* Header/Breadcrumbs */}
      <div className="flex justify-end text-sm text-gray-500 mb-2">
        <span className="text-neutral-100">Dashboard</span>
      </div>

      {/* Welcome */}
      <div className="flex gap-4 items-center mb-6">
        <h1 className="text-2xl font-semibold text-neutral-100 mb-4 capitalize">Welcome, {data?.fullname || "User"}!</h1>
        <div>
          {data?.verified == true ? (<div className="flex items-center gap-2"> <p >Verified</p> <RiVerifiedBadgeFill /></div>) : (<div className="flex items-center gap-2 mb-2"> <p className="text-neutral-100">Not Verified</p> <FaTimes color="red"/> <Link className="text-green-400" to="/user/kyc-verification">Verify Now</Link> </div>)}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dashcont p-6 rounded-lg shadow-md">
        <h2 className="font-[600] text-neutral-100">Total Funds</h2>
        <p className="text-neutral-100">${data ? Number(data?.tAmount).toLocaleString() : 0}</p>
        <div className="flex justify-start items-center mt-4 gap-4">
          <Link to="/user/deposit">
            <button className="bg-[#C6F4D6] px-4 py-2 shadow rounded-lg text-dashcont font-[600] font-[Jost]">Deposit</button>
          </Link>
          <Link to="/user/withdraw">
            <button className="bg-[#C6F4D6] px-4 py-2 shadow rounded-lg text-dashcont font-[600] font-[Jost]">Withdraw</button>
          </Link>
        </div>
        {/* </div>
          <button className="bg-[#C6F4D6] px-4 py-2 shadow rounded-lg text-dashcont font-[600] font-[Jost]">Deposit</button>
          <button className="bg-[#C6F4D6] px-4 py-2 shadow rounded-lg text-dashcont font-[600] font-[Jost]">Withdraw</button>
        </div> */}
        </div>
        <div className="bg-referbg bg-cover p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 h-full">
            <div className="h-full flex flex-col justify-between">
              <p className="font-[600] text-neutral-100">Invite Friends & get extra income!</p>
              <Link to="https://vestexinvestment.com/register" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#C6F4D6] px-4 py-2 shadow rounded-lg text-dashcont font-[600] font-[Jost]">Earn More</button>
          </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Forex Trade */}
      <div className="bg-dashcont p-6 rounded-lg shadow-md mt-8">
        <h2 className="font-[600] text-neutral-100 mb-4">Forex Market Fundamental Data</h2>
        <iframe className="w-full h-[400px]" src="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22account.deepmargins.com%2Foverview%22%7D" ></iframe>
    </div>
    {/* Crypto Prices */}
      <div className="bg-dashcont p-6 rounded-lg shadow-md mt-8">
        <h2 className="font-[600] text-neutral-100 mb-4">Cryptocurrency Prices</h2>
        <iframe className="w-full h-[400px] bg-black" src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%2C%22page-uri%22%3A%22account.deepmargins.com%2Fmy-wallet%22%7D" ></iframe>
    </div> 
    </div>
    <UserFooter />
    </div>
      )
    }
    </div>
    
    
  )
}

export default Dashboard;

// src/pages/UserPg/Dashboard/Dashboard.tsx