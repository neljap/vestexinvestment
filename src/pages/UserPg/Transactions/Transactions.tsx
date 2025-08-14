import { useContext } from "react";
import { avatarImg } from "../../../assets"
import { TopNav } from "../components"
import TestScroll from "../components/TestScroll"
import { AuthContext } from "../../../app/AuthContext";
import UserFooter from "../components/UserFooter";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";



const Transactions = () => {
  const {data} = useContext(AuthContext);

  return (
   <div className="bg-[#222736] min-h-screen">
      {/* Topnav */}
      <TopNav />
      <TestScroll />
     <div className="p-6  min-h-screen">
      
      {/* Header/Breadcrumbs */}
      <div className="flex justify-end text-sm text-gray-500 mb-2">
        <span className="text-neutral-100">Wallet</span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Welcome Back! Card - Placeholder */}
          <div className="bg-dashcont rounded-lg shadow p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-48 h-48 bg-blue-100 rounded-full opacity-10"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-purple-100 rounded-full opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <img src={avatarImg} alt="User Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p className="text-neutral-100 leading-4 capitalize ">{data?.fullname}</p>
                  <p className="text-neutral-100 leading-4">{data?.email}</p>

                </div>
              </div>
              {/* <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-500">Henry Price</p>
                  <p className="text-gray-700 font-medium">UI/UX Designer</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                  View Profile
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div> */}
              <div className="flex justify-around items-center text-center">
                <div className="flex flex-col items-center justify-center gap-1 font-[Jost]">
                  <BiDollarCircle  color="#C6F4D6" size={30}/>
                  <p className="font-[600] text-lg text-neutral-100">Fund Wallet</p>
                  <Link to="/user/deposit">
            <button className="bg-[#C6F4D6] px-4 py-2 shadow rounded-lg text-dashcont font-[600] font-[Jost]">Deposit</button>
          </Link>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <BiDollarCircle color="#C6F4D6" size={30}/>
                  <p className="font-[600] text-lg text-neutral-100">Withdraw</p>
                  <Link to="/user/withdraw">
            <button className="bg-[#C6F4D6] px-4 py-2 shadow rounded-lg text-dashcont font-[600] font-[Jost]">Deposit</button>
          </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Earning Card - Placeholder */}
          <div className="bg-dashcont text-neutral-100 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Earning</h2>
            <p className="text-neutral-100 mb-2">This month</p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-3xl font-bold text-green-600">$34,252</p>
                <p className="text-sm text-green-500 flex items-center">
                  12%
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                  From previous period
                </p>
              </div>
              <div className="relative w-24 h-24">
                {/* Placeholder for circular progress bar */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-gray-200 stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent"></circle>
                  <circle className="text-blue-500 progress-ring__circle stroke-current" strokeWidth="10" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset="82.9"></circle>
                  <text x="50" y="50" fontFamily="Arial" fontSize="16" fill="#333" textAnchor="middle" alignmentBaseline="middle">67%</text>
                  <text x="50" y="70" fontFamily="Arial" fontSize="10" fill="#666" textAnchor="middle" alignmentBaseline="middle">Series A</text>
                </svg>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
              View More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
            <p className="text-gray-600 mt-4 text-sm">We craft digital, graphic and dimensional thinking.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Top Row Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Orders Card - Placeholder */}
            <div className="bg-dashcont text-neutral-100 rounded-lg shadow p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-500">Account Balance</p>
                <p className="text-2xl font-bold">$1,235</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 15h.01"></path></svg>
              </div>
            </div>

            {/* Revenue Card - Placeholder */}
            <div className="bg-dashcont text-neutral-100 rounded-lg shadow p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Deposit</p>
                <p className="text-2xl font-bold">$35,723</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0zm-4 4h.01"></path></svg>
              </div>
            </div>

            {/* Average Price Card - Placeholder */}
            <div className="bg-dashcont text-neutral-100 rounded-lg shadow p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Withdraw</p>
                <p className="text-2xl font-bold">$16.2</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </div>
            </div>
          </div>

          {/* Email Sent Chart - Placeholder */}
          <div className="bg-dashcont text-neutral-100 rounded-lg shadow p-6">
            <h2 className="font-[600] font-[Jost] text-lg md:text-xl">Personal Trading Chart</h2>
            <iframe className="w-full h-[400px]" src="https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSD%22%2C%22frameElementId%22%3A%22tradingview_c8f0d%22%2C%22interval%22%3A%221%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%229%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22BINANCE%3ABTCUSD%22%2C%22page-uri%22%3A%22account.deepmargins.com%2Foverview%22%7D"></iframe>
            
          </div>
        </div>
      </div>
    </div> 
    <UserFooter />
    </div>
  )
}

export default Transactions