import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import CreateBlog from "./components/CreateBlog";
import { ToastContainer } from "react-toastify";
import Post from "./components/Post";
import "react-toastify/dist/ReactToastify.css";
import PostDetail from "./components/PostDetail";
import Authors from "./components/Authors";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/detail" element={<PostDetail />} />
          <Route path="/author" element={<Authors />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
