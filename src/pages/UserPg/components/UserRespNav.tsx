import { FaPowerOff } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

interface navMenuTypes {
    showNavMenu: any,
    setShowNavMenu: any
    setLogoutModal: any
}

const UserRespNav = ({showNavMenu, setShowNavMenu, setLogoutModal}: navMenuTypes) => {

    let activeLink =
    "flex flex-row gap-3 w-full py-3 ps-4 justify-start items-center bg-blue-200 text-[#0052FF] rounded-tl-xl  rounded-bl-xl border-r-4 border-primary mt-2";

  let normalLink =
    "flex flex-row gap-3 w-full py-3 ps-4 justify-start items-center hover:bg-blue-50 rounded-tl-xl rounded-bl-xl text-neutral-500 mt-2";

    let menuItem = [    
        {
            name: "Dashboard",
            path: "/user/dashboard",
            icon: "🏠"
        },
        {
            name: "Transactions", 
            path: "/user/transactions",
            icon: "💰"
        },
        {
          name: "Deposit",
          path: "/user/deposit",
          icon:  "💳"
        },
        {
          name: "Withdraw",
          path: "/user/withdraw",
          icon: "💵"
        },
        {
            name: "KYC Verification",
            path: "/user/kyc-verification",
            icon: "📝"
        },
        
        {
            name: "Settings",
            path: "/user/settings",
            icon: "⚙️"
        },
        {
            name: "Support",
            path: "/user/support",
            icon: "❓"
        }
    ]

  return (
    <div>
        <div className={`${showNavMenu ? 'left-0' : '-left-[100%]'} fixed bottom-0  top-0 z-50 ps-6 flex h-screen w-[75%] flex-col justify-between bg-dashcont  pb-4 pt-4 text-neutral-100 transition-all duration-200 md:hidden rounded-r-xl shadow-md`} onClick={() => setShowNavMenu(!showNavMenu)}>
            <nav className="flex flex-col items-center justify-between">
            {menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} className={({isActive}) => isActive ? activeLink : normalLink} onClick={() => window.scrollTo(0, 0)}>
                    <div className="icon">{item.icon}</div>
              <span className="font-[600] font-[Jost]  text-gray-600">
                {item.name}
              </span>
                </NavLink>
            ))}
            </nav>
            <div className="flex gap-3 ps-3 cursor-pointer" onClick={() => setLogoutModal(true)}>
                        <FaPowerOff size={24} color="black"/>
                        <p className=" font-[600] font-[Jost] text-neutral-500">Logout</p>
                      </div>
        </div>
    </div>
  )
}

export default UserRespNav