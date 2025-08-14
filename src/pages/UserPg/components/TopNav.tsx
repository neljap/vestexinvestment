import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { avatarImg } from "../../../assets";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import UserRespNav from "./UserRespNav";
import { AuthContext } from "../../../app/AuthContext";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const togNavMenu = () => {  
  setShowNavMenu(!showNavMenu);
  }

  const { data } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const UserDropDown = () => {
    return (
      <div
        className={`absolute right-0 mt-2 w-48 bg-dashcont text-neutral-100 z-30 rounded-md shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="py-2">
          <a
            href="/profile"
            className="block px-4 py-2 
            "
          >
            Profile
          </a>
          <a
            href="/settings"
            className="block px-4 py-2 
            "
          >
            Settings
          </a>
          <a
            href="/logout"
            className="block px-4 py-2 
            "
          >
            Logout
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-between items-center w-full bg-dashcont p-4 shadow">
        <div></div>
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="rounded-full shadow">
              <img
                src={avatarImg}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <p className="text-sm text-neutral-100 mt-1 capitalize font-[600]">{data?.fullname}</p>
            <FaAngleDown color="white" />
          </div>
        </div>
        {/* Mobile Toggle */}
                        <div className="block md:hidden">
                          {showNavMenu ? (
                            <HiMenuAlt1
                              onClick={togNavMenu}
                              className={`cursor-pointer transition-all text-primary`}
                              size={30}
                            /> 
                          ) : (
                            <HiMenuAlt3
                              onClick={togNavMenu}
                              className={`cursor-pointer transition-all text-primary`}
                              size={30}
                            />
                          )}
                        </div>
      </div>
      {        showNavMenu && <UserRespNav setLogoutModal="" setShowNavMenu={setShowNavMenu} showNavMenu={showNavMenu}/>}
      {isOpen && <UserDropDown />}
    </>
  );
};

export default TopNav;
