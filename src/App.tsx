import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";

function App() {
  return (
    // <div className="">
    //   <Router>
    //     <NavBar />
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/to-do-list" element={<ToDoContainer />} />
    //         <Route path="/users" element={<Users />} />
    //         <Route path="/users/:id" element={<UserDetail />} />
    //         <Route path="/posts" element={<Posts />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/primereact" element={<PrimeReact />} />
    //       </Routes>
    //     </Suspense>
    //   </Router>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/to-do-list" element={<ToDoContainer />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/primereact" element={<PrimeReact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
