import { Link, NavLink, useNavigate } from "react-router-dom";
import { homelogo} from "../../../assets";
import { FaPowerOff } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const NavLinks = ({ children }: any) => {
  const [logoutModal, setLogoutModal] = useState<any>(false);
  const navigate = useNavigate()
    let menuItems = [    
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

    const logOutFunc = () => {
    try{  
      Cookies.remove("token");
      setLogoutModal(false);
      navigate("/");
      toast.success("Log Out Successfully", {position: "bottom-left", className: "font-[Jost]"});
    }catch(err: any){
      toast.error(err.code, { position: "bottom-left", className: "font-[Jost]" });
    }
  }

    const activeLink = "flex items-start w-full gap-2 px-4 py-2 text-[#C6F4D6] border-l-4 border-bluewhite bg-dashbg";
    const normalLink = "flex items-start w-full gap-2 px-4 py-2 text-gray-600 hover:bg-dashbg hover:text-[#C6F4D6] transition-colors duration-300";

  return (
    <div className="flex flex-row">
      <div className="w-60 h-screen fixed bg-black text-white shadow-lg py-4 hidden md:block">
        <div className="">
          <Link to="/" className="flex items-center justify-start ps-4 gap-1">
          <img src={homelogo} className="w-12" alt="" />
          <div>
            <p className="font-[600] font-[Jost] text-lg leading-4">Vestex</p>
            <p className="font-[600] font-[Jost] text-lg leading-4">Investment</p>
          </div>
          </Link>
          
          <nav className="flex flex-col items-start justify-between pt-6">
            {menuItems.map((item, index) => (
                <NavLink to={item.path} key={index} className={({isActive}) => isActive ? activeLink : normalLink} onClick={() => window.scrollTo(0, 0)}>
                    <div className="icon">{item.icon}</div>
              <span className="font-[600] font-[Jost]  text-[#C6F4D6]">
                {item.name}
              </span>
                </NavLink>
            ))}
            <div className="p-6 font-[Jost] flex items-center gap-4 rounded-md cursor-pointer" onClick={() => logoutModal(true)}>
              <FaPowerOff color="red" />
              <p>Log Out</p>
            </div>
            </nav>

        </div>
        {logoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-80 rounded-xl h-40 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8">
            <p>Are you sure you want to Log Out?</p>
            <div className="flex justify-between items-center px-8 gap-4">
              <button
                className="bg-primary px-4 py-2 rounded-xl"
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
      <div className="w-full ">{children}</div>
    </div>
  );
};

export default NavLinks;
