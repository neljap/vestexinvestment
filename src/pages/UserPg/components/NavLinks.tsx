import { Link, NavLink } from "react-router-dom";
import { logolight } from "../../../assets";
import { FaPowerOff } from "react-icons/fa6";

const NavLinks = ({ children }: any) => {
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

    const activeLink = "flex items-start w-full gap-2 px-4 py-2 text-[#C6F4D6] border-l-4 border-bluewhite bg-dashbg";
    const normalLink = "flex items-start w-full gap-2 px-4 py-2 text-gray-600 hover:bg-dashbg hover:text-[#C6F4D6] transition-colors duration-300";

  return (
    <div className="flex flex-row">
      <div className="w-60 h-screen fixed bg-black text-white shadow-lg py-4 hidden md:block">
        <div className="">
          <Link to="/">
          <img src={logolight} alt="" />
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
            <div className="p-6 font-[Jost] flex items-center gap-4 rounded-md cursor-pointer">
              <FaPowerOff color="red" />
              <p>Log Out</p>
            </div>
            </nav>

        </div>
        
        </div>
      <div className="w-full ">{children}</div>
    </div>
  );
};

export default NavLinks;
