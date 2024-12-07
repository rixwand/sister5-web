import {NavLink, useLocation} from "react-router";
import {MutableRefObject, useEffect, useRef, useState} from "react";

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const navlinks = [
    {name: "Home", link: "/", active: true},
    {name: "About Us", link: "/about", active: false},
    {name: "Contact Us", link: "/contact", active: false},
  ];
  const [navItem, setNavItem] = useState(navlinks);
  const checkbox: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const url = useLocation()

  useEffect(() => {
    const newNavItem = navItem.map((item) => {
      if (item.link == url.pathname) return {...item, active: true};
      return {...item, active: false};
    });
    setNavItem(newNavItem);
  }, [url.pathname]);

  const showNavbar = () => {
    if (checkbox.current) {
      checkbox.current.click();
      setChecked(checkbox.current.checked)
    }
  }
  return (
    <nav
      className="container z-50 flex-row flex lg:justify-between items-center py-4 bg-primary fixed top-0 left-0 right-0">
      <div
        className="lg:hidden cursor-pointer overflow-hidden -mt-[0.6rem] mr-3"
        onClick={showNavbar}>
        <input
          type={"checkbox"}
          id="navcheckbox"
          ref={checkbox}
          className="hidden peer/navcheckbox"
        />
        <span
          className={`border-b-[3px] rounded-md w-5 mt-2 transition-all duration-300 border-on block ${
            checked ? "translate-y-[6px] -rotate-45" : ""
          }`}></span>
        <span
          className={`border-b-[3px] rounded-md w-5 mt-1 transition-all duration-300 border-on block ${
            checked ? "-translate-x-10 opacity-0" : ""
          }`}></span>
        <span
          className={`border-b-[3px] rounded-md w-5 mt-1 transition-all duration-300 border-on block ${
            checked ? "-translate-y-[7px] rotate-45" : ""
          }`}></span>
      </div>

      <h1 className={"text-2xl font-bold font-poppins text-light"}>Sister5</h1>
      <div className={`flex lg:static lg:flex-row lg:gap-x-10 lg:justify-between lg:items-center lg:translate-x-0 fixed flex-col bg-primary top-[4.2rem] bottom-0 left-0 gap-y-6 pl-4 pr-12 transition-all duration-300
        ${!checked ? "-translate-x-44" : "translate-x-0"}
      `}>
        {navItem.map(item => (
          <NavLink className={`${item.active ? "active-nav" : "text-inactive"} relative font-poppins font-medium`}
                   to={item.link}>{item.name}</NavLink>
        ))}
      </div>
      <button
        className={"bg-accent lg:text-base text-sm lg:ml-0 ml-auto px-5 py-2 font-poppins font-semibold rounded-full text-primary"}>Sign
        Up
      </button>
    </nav>
  )
}
export default Navbar;