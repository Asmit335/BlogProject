import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import BlogList from "./components/BlogList";
import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import CreateBlog from "./components/CreateBlog";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
