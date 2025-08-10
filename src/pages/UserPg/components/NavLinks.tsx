import { Link, NavLink } from "react-router-dom";
import { logolight } from "../../../assets";

const NavLinks = ({ children }: any) => {
    let menuItems = [    
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
        },
        {            name: "Logout",  
          path: "/user/logout",
            icon: "🚪"
        }
    ]

    const activeLink = "flex items-start w-full gap-2 px-4 py-2 text-white border-l-4 border-bluewhite bg-[#2a2f42] rounded-md";
    const normalLink = "flex items-start w-full gap-2 px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md";

  return (
    <div className="flex flex-row">
      <div className="w-60 h-screen fixed bg-[#2a2f42] text-white shadow-lg py-4">
        <div className="">
          <Link to="/">
          <img src={logolight} alt="" />
          </Link>
          
          <nav className="flex flex-col items-start justify-between pt-6">
            {menuItems.map((item, index) => (
                <NavLink to={item.path} key={index} className={({isActive}) => isActive ? activeLink : normalLink} onClick={() => window.scrollTo(0, 0)}>
                    <div className="icon">{item.icon}</div>
              <span className="font-[600] font-[Jost] dark:text-white text-gray-600">
                {item.name}
              </span>
                </NavLink>
            ))}
            </nav>
        </div>
        
        </div>
      <div className="w-full ">{children}</div>
    </div>
  );
};

export default NavLinks;
