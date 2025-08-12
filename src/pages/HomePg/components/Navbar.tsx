import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

interface NavRefTypes {
  AboutRef: any;
  ServicesRef: any;
  PackagesRef: any;
  TestimonialsRef: any;
  ContactRef: any;
}

const Navbar = ({
  AboutRef,
  ServicesRef,
  PackagesRef,
  TestimonialsRef,
  ContactRef,
}: NavRefTypes) => {
  // const [open, setOpen] = useState(false);
  const [changebg, setChangebg] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  //   const {data} = useContext(AuthContext);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setChangebg(true);
    } else {
      setChangebg(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const [activeLink, setActiveLink] = useState("home");
  const [
    // @ts-ignore
    isScrolled,
    setIsScrolled,
  ] = useState(true);

  const sectionIds = [
    "about",
    "services",
    "packages",
    "testimonials",
    "contact",
  ];

  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust the margin Top value as needed
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;

      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  // Function to determine the active section while scrolling
  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i] as any);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          // Set the active link based on the section ID
          setActiveLink(sectionIds[i] as any);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // Call the function to determine the active section while scrolling
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
            </svg>
            <Link
              to="/"
              className="text-lg text-center leading-4 font-bold text-black "
            >
              <h1 className="text-black font-[Jost]">VESTEX</h1>
              <p className="text-black font-[Jost]">INVESTMENT</p>
            </Link>
          </div>

          <div className="text-3xl md:hidden" onClick={toggleMenu}>
            {showMenu ? <HiMenuAlt1 className="cursor-pointer"/> : <HiMenuAlt3 className="cursor-pointer"/>}
          </div>
        </div>
        <nav className="hidden md:flex flex-row gap-4 font-[600]">
          {sectionIds.map((sectionId: any, index) => (
            <Link
              key={index}
              // className={activeLink === sectionId  ? "active" : ""}
              to="/"
              onClick={() => scrollToSection(sectionId)}
              className={`${
                activeLink === sectionId ? "active" : ""
              } text-md hover:text-primary capitalize transition-all ease-in-out duration-[1s] dark:text-white py-3`}
            >
              <p
                className={`${
                  activeLink === sectionId
                    ? "text-gray-700 border-b-2 pb-1 border-gray-700"
                    : "text-black"
                }`}
              >
                {sectionId}
              </p>
            </Link>
          ))}
        </nav>
        <div className="md:flex hidden items-center gap-4">
          <Link to="/register" className="md:block hidden">
            <button className="px-4 py-2 bg-neutral-900 border border-gray-100 text-white rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300">
              Register
            </button>
          </Link>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        fixed bottom-0 top-0 z-50 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md ${showMenu ? "left-0" : "left-[-100%]"}
        `}
        >
          <div className="flex flex-col items-center justify-between gap-8 pt-8">
            <a onClick={AboutRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s]  font-[600]">About</a>
            <a onClick={ServicesRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s]  font-[600]">Services</a>
            <a onClick={PackagesRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s]  font-[600]">Packages</a>
            <a onClick={TestimonialsRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s]  font-[600]">Testimonials</a>
            <a onClick={ContactRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s]  font-[600]">Contact</a>
<Link to="/login" className="py-5">
            <button className="px-4 py-2 bg-neutral-900 text-white  rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300">
              Get Started
            </button>
          </Link>

          </div>
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
