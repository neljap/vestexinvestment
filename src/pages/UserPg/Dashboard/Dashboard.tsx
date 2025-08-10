import { avatarImg } from "../../../assets"
import { TopNav } from "../components"

const Dashboard = () => {

  return (
    <div>
      {/* Topnav */}
      <TopNav />
     <div className="p-6 bg-gray-100 min-h-screen">
      
      {/* Header/Breadcrumbs */}
      <div className="flex justify-end text-sm text-gray-500 mb-2">
        <span>Dashboard</span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Welcome Back! Card - Placeholder */}
          <div className="bg-white rounded-lg shadow p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-48 h-48 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <img src={avatarImg} alt="User Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Welcome Back!</h2>
                  <p className="text-gray-600">Skote Dashboard</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-500">Henry Price</p>
                  <p className="text-gray-700 font-medium">UI/UX Designer</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                  View Profile
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
              <div className="flex justify-around text-center">
                <div>
                  <p className="text-2xl font-bold">125</p>
                  <p className="text-gray-500">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">$1245</p>
                  <p className="text-gray-500">Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Earning Card - Placeholder */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Earning</h2>
            <p className="text-gray-500 mb-2">This month</p>
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
            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-500">Orders</p>
                <p className="text-2xl font-bold">1,235</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 15h.01"></path></svg>
              </div>
            </div>

            {/* Revenue Card - Placeholder */}
            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-500">Revenue</p>
                <p className="text-2xl font-bold">$35,723</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0zm-4 4h.01"></path></svg>
              </div>
            </div>

            {/* Average Price Card - Placeholder */}
            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
              <div>
                <p className="text-gray-500">Average Price</p>
                <p className="text-2xl font-bold">$16.2</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </div>
            </div>
          </div>

          {/* Email Sent Chart - Placeholder */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Email Sent</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-gray-100">Week</button>
                <button className="px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-gray-100">Month</button>
                <button className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white">Year</button>
              </div>
            </div>
            {/* Chart Placeholder */}
            <div className="h-64 flex items-end justify-around border-b border-l border-gray-300 pt-4 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 bottom-0 h-full flex flex-col justify-between text-xs text-gray-500 -ml-8 pb-4">
                <span>100</span>
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>
              {/* Bars */}
              <div className="flex-1 flex justify-center items-end h-full">
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-2/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-3/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-2/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-3/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-1/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-2/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-2/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-3/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-1/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-1/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-2/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
                <div className="w-4 mx-1 flex flex-col justify-end">
                  <div className="bg-blue-500 h-3/5"></div>
                  <div className="bg-yellow-500 h-1/5"></div>
                  <div className="bg-green-500 h-1/5"></div>
                </div>
              </div>
            </div>
            {/* X-axis labels */}
            <div className="flex justify-around text-xs text-gray-500 mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
            {/* Legend */}
            <div className="flex justify-center space-x-4 text-sm mt-4">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                <span>Series A</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span>Series B</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span>Series C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div>
    
  )
}

export default Dashboard

// src/pages/UserPg/Dashboard/Dashboard.tsx