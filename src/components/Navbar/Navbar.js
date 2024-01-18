import React, { useState } from "react";
import "./Navbar.css";
import { logo } from "../../utils/images";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { emptyCart } from "../../store/storeSlice";

const Navbar = ({ isLoggedIn, firstname,setIsLoggedIn, updateLoginState,openModal,closeModal,isModalOpen,searchProduct,setSearchProduct}) => {
  const select = useSelector((state) => state.cart.items);
  
  const dispatch=useDispatch()
  const handleLogout = () => {
    dispatch(emptyCart())
    setIsLoggedIn(false);
  };
  const handlesearch=()=>{
    setSearchProduct()
  }

  return (
    <div className="Navbar">
      <div className="Navbar1">
        <Link to="/" className="logo">
          <img src={logo} alt="suraj"></img>
        </Link>
        <form className="icon_input">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="inputNav"
            type="text"
            placeholder="Search for Products"
            value={searchProduct}
            onChange={(e)=>setSearchProduct(e.target.value)}
            

          ></input>
        </form>
        {isLoggedIn ? (
          <div className="profileImgLogin">
            <i className="fa-regular fa-user"></i>
            <div>
              <p>&nbsp; {firstname}</p>
              <div className="dropdown-content">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="profileImgLogin" onClick={openModal}>
            <i className="fa-regular fa-user"></i>
            <div>
              <p> &nbsp; Login</p>
            </div>
          </div>
        )}
        {isModalOpen && (
          <div className="backdrop" onClick={closeModal}>
            <Login
              closeModal={closeModal}
              updateLoginState={updateLoginState}
            />
          </div>
        )}

        <Link to="/cart" className="cart">
          <i class="fa-solid fa-cart-shopping fa-lg"></i>
          <b>
            <sup>{select.length}</sup>
          </b>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
