import {NavLink} from "react-router";

const Navbar = () => {
  return (
    <nav className="container flex-row flex justify-between items-center py-4 bg-primary">
      <h1 className={"text-2xl font-bold font-poppins text-light"}>Sister5</h1>
      <div className={"flex flex-row gap-x-10 justify-between items-center"}>
        <NavLink className={"relative active-nav font-poppins font-medium"} to={"/"}>Homes</NavLink>
        <NavLink className={"relative text-inactive font-poppins font-medium"} to={"/"}>About
          Us</NavLink>
        <NavLink className={"relative text-inactive font-poppins font-medium"} to={"/"}>Contact
          Us</NavLink>
      </div>
      <button className={"bg-accent px-5 py-2 font-poppins font-semibold rounded-full text-primary"}>Sign Up</button>
    </nav>
  )
}
export default Navbar;