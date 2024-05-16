import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import CreateBlog from "./components/CreateBlog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/blogdetail/:id" element={<BlogDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
