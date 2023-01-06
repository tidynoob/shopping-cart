import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Shopping from "../../pages/Shopping";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopping" element={<Shopping />} />
    </Routes>
  );
}

export default Main;
