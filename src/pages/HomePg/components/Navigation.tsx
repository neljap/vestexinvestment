import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi"
import { Link } from "react-router-dom";
import { logolight } from "../../../assets";


const Navigation = () => {
      const [showMenu, setShowMenu] = useState(false);
  const [changebg, setChangebg] = useState(false);

  const [activeLink, setActiveLink] = useState("home");
  const [
    // @ts-ignore
    isScrolled,
    setIsScrolled] = useState(true);


 const sectionIds = ["home", "about", "trading", "partners", "packages", "testimonials", "faq", "contact"]

// Function to smoothly scroll to a section by its ID
    const scrollToSection = (sectionId : any) => {
        const element = document.getElementById(sectionId);
        if (element){
            // Adjust the margin Top value as needed
            const marginTop = 0;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;

            window.scrollTo({top: scrollToY, behavior: "smooth"})
        }
    }

    // Function to determine the active section while scrolling
    const determineActiveSection = () => {
        for (let i = sectionIds.length - 1; i>=0; i--){
            const section = document.getElementById(sectionIds[i] as any)
            if(section) {
                const rect = section.getBoundingClientRect();
                if(rect.top <= 120 && rect.bottom >=120){
                    // Set the active link based on the section ID
                    setActiveLink(sectionIds[i] as any)
                    break;
                }
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.screenY > 300){
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
            // Call the function to determine the active section while scrolling
            determineActiveSection();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

//   const { data } = useContext(AuthContext);
  const { setTheme, systemTheme, theme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun color="#0052FF" size={18} />;
    } else {
      return <FaMoon color="#0052FF" size={18} />;
    }
  };

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setChangebg(true);
    } else {
      setChangebg(false);
    }
  };
  window.addEventListener("scroll", changeBackground);




  return (
    <div className={`${changebg ? "fixed bg-white dark:bg-[#222736] dark:text-white w-full z-30 text-black shadow-xl" : "bg-transparent text-white dark:text-white"}""`}>
        <div className="container">
          <div className="flex flex-row items-center justify-between py-4">
            <Link to="/" className="flex flex-row items-center gap-0.5 md:gap-2">
            <img src={logolight} alt="" className="w-4 md:w-16" />
              {/* <p
                className="custom-class"
              >
                OASIS TRADE HUB
              </p> */}
            </Link>
            <nav className="hidden md:flex flex-row gap-4 font-[600]">
              {sectionIds.map((sectionId: any, index) => (
                <Link
                key={index}
                // className={activeLink === sectionId  ? "active" : ""}
                to="/"
                onClick={() => scrollToSection(sectionId)}
                className={`${activeLink === sectionId  ? "active" : ""} text-md hover:text-primary capitalize transition-all ease-in-out duration-[1s] dark:text-white py-3`}
              >
                <p className={`${activeLink === sectionId ? "text-primary border-b-2 pb-1 border-primary" : ""}`}>{sectionId}</p>
              </Link>
              ))}
            </nav>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <div
                  className="p-2 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {themeBox()}
                </div>
              </div>
              <button className="hidden md:block px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300">
                Get Started
              </button>
              {/* Mobile Toggle */}
              <div className="block md:hidden">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className={`cursor-pointer transition-all text-primary`}
                    size={30}
                  /> 
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className={`cursor-pointer transition-all text-primary`}
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navigation