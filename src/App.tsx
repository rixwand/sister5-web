import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Navbar from "./Component/Navbar.tsx";
import Footer from "./Component/Footer.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App