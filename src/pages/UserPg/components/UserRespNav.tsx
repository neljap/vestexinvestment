import toast from "react-hot-toast";
import { FaPowerOff } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

interface navMenuTypes {
    showNavMenu: any,
    setShowNavMenu: any
    setLogoutModal: any
    logoutModal: any
}


import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const UserRespNav = ({showNavMenu, setShowNavMenu}: navMenuTypes) => {
  const [logoutModal, setLogoutModal] = useState<any>(false);

  const navigate = useNavigate();

  const logOutFunc = () => {
    try {
      Cookies.remove("token");
      setLogoutModal(false);
      navigate("/");
      toast.success("Log Out Successfully", {
        position: "bottom-left",
        className: "font-[Jost]",
      });
    } catch (err: any) {
      toast.error(err.code, {
        position: "bottom-left",
        className: "font-[Jost]",
      });
    }
  };

    let activeLink =
    "flex flex-row gap-3 w-full py-3 ps-4 justify-start items-center bg-blue-200 text-[#0052FF] rounded-tl-xl  rounded-bl-xl border-r-4 border-primary mt-2";

  let normalLink =
    "flex flex-row gap-3 w-full py-3 ps-4 justify-start items-center hover:bg-blue-50 rounded-tl-xl rounded-bl-xl text-neutral-100 mt-2";

    let menuItem = [    
        {
            name: "Dashboard",
            path: "/user/dashboard",
            icon: "🏠"
        },
        {
            name: "Wallet", 
            path: "/user/wallet",
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
              <span className="font-[600] font-[Jost]">
                {item.name}
              </span>
                </NavLink>
            ))}
            </nav>
            <div className="flex gap-3 ps-3 cursor-pointer" onClick={() => setLogoutModal(true)}>
                        <FaPowerOff size={24} color="red"/>
                        <p className=" font-[600] font-[Jost] text-neutral-200">Logout</p>
                      </div>
        </div>
        {logoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-80 rounded-xl h-40 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8">
              <p>Are you sure you want to Log Out?</p>
              <div className="flex justify-between items-center px-8 gap-4">
                <button
                  className="bg-green-400 px-4 py-2 rounded-xl"
                  onClick={logOutFunc}
                >
                  Yes
                </button>
                <button
                  className="bg-red-500 px-4 py-2 rounded-xl"
                  onClick={() => setLogoutModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default UserRespNav