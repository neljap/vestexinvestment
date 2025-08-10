import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { avatarImg } from "../../../assets";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const UserDropDown = () => {
    return (
      <div
        className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="py-2">
          <a
            href="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Profile
          </a>
          <a
            href="/settings"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Settings
          </a>
          <a
            href="/logout"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Logout
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-between items-center w-full bg-white p-4 shadow">
        <div></div>
        <div className="flex items-center space-x-4">
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
            <p className="text-sm text-gray-600 mt-1">User Name</p>
            <FaAngleDown />
          </div>
        </div>
      </div>
      {isOpen && <UserDropDown />}
    </>
  );
};

export default TopNav;
