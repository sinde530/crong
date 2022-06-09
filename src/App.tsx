import { Route, Routes } from "react-router-dom";

import SignUp from "./components/SignUp";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crong" element={<Home />} />
      <Route path="/login" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
