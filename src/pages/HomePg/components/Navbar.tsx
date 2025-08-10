import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Cookies from "js-cookie";
import { useTheme } from "next-themes";
// import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [changebg, setChangebg] = useState(false);
  const { setTheme, systemTheme, theme } = useTheme();

  //   const {data} = useContext(AuthContext);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setChangebg(true);
    } else {
      setChangebg(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  //   const checkNav = () => {
  //     return(
  //       <div>
  //         {data ? (
  //             <Link to="/user/home">
  //               <Button btntext={data?.fullname} />
  //             </Link>
  //           ): (
  //             <Link to="/login">
  //              <Button btntext="login" />
  //             </Link>
  //           )}
  //       </div>
  //     )
  //   }

   Cookies.get("token");
  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun color="#0052FF" size={18} />;
    } else {
      return <FaMoon color="#0052FF" size={18} />;
    }
  };

  //   useEffect(() => {
  //     checkNav()
  //   }, [data, cookietoken])

  return (
    // dark:bg-[#1f2937]
    <nav
      className={`${
        changebg ? "bg-[#f1f1f1]  fixed w-full z-50" : "bg-transparent"
      }`}
    >
      <div className="flex items-center font-medium justify-around">
        <div className="z-20 p-5 md:w-auto w-full flex justify-between">
          <div className="flex items-center justify-center gap-1">
            <svg
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
              <Link
                to="/"
                className="text-lg text-center leading-4 font-bold text-black "
              >
                <h1 className="text-black font-[Jost]">VESTEX</h1>
                <p className="text-black font-[Jost]">INVESTMENT</p>
              </Link>
            </svg>
          </div>

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/about" className="py-7 px-3 inline-block font-[500]">
              About
            </Link>
          </li>
          <li>
            <Link to="/packages" className="py-7 px-3 inline-block font-[500]">
              Packages
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-7 px-3 inline-block font-[500]">
              Planning Service
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block font-[500]">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:flex hidden items-center gap-4">
          <div
            className="cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {themeBox()}
          </div>
          <Link to="/register" className="md:block hidden">
            <button className="px-4 py-2 bg-neutral-900 border border-gray-100 text-white rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300">
              Register
            </button>
          </Link>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#f1f1f1] dark:bg-[#1f2937] fixed z-10 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-1 px-3 inline-block text-xl font-[500]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-1 px-3 inline-block font-[500]">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-1 px-3 inline-block font-[500]">
              Contact
            </Link>
          </li>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-1 flex justify-between items-center md:pr-0 pr-5 group font-[500]">
              Financial
              <span className="text-xl md:hidden inline"></span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FaAngleDown />
              </span>
            </h1>
            <div>
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div
                    className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                  ></div>
                </div>
                <div className="bg-white p-2 flex flex-col gap-10">
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link to="/" className="hover:text-primary font-[500]">
                      Stock
                    </Link>
                  </li>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link to="/" className="hover:text-primary font-[500]">
                      Stock
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300">
              Get Started
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
