import { Route, Routes } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";

const Main = () => {
    return (
        <div id="main-section">
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
          </Routes>
        </div>
      </div>
    )
}

export default Main