import { useState } from "react";
import { Button } from "@material-tailwind/react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Member />} />
        <Route path="/member" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
