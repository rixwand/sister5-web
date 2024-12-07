import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Navbar from "./Component/Navbar.tsx";

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App