import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePages from "./pages/HomePages/HomePages";
import CartPage from "./pages/CartPage/CartPage";
import Navbar2 from "./components/Navbar/Navbar2";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchProduct,setSearchProduct]=useState("");


  const updateLoginState = (isLoggedIn, firstname) => {
    setIsLoggedIn(isLoggedIn);
    setFirstname(firstname);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} firstname={firstname} setIsLoggedIn={setIsLoggedIn} updateLoginState={updateLoginState} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} openModal={openModal} closeModal={closeModal} searchProduct={searchProduct} setSearchProduct={setSearchProduct} ></Navbar>
      <Navbar2 setSelectedCategory={setSelectedCategory}/>
      {console.log("inside the app",isLoggedIn)}
      <Routes>
        <Route path="/"element={<HomePages selectedCategory={selectedCategory} searchProduct={searchProduct}  />}/>
        <Route path="/cart"  element={<CartPage isLoggedIn={isLoggedIn} openModal={openModal}/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
