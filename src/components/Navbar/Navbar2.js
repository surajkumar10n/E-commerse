import React, { useEffect } from 'react'
import "./Navbar.css";
import { useSelector } from 'react-redux';
import {
    electronic,
    fashion,
    furniture,
    mobile,
  } from "../../utils/images";

 const Navbar2 = ({ setSelectedCategory }) => {

    useEffect(() => {
      const categories = document.querySelectorAll(".category");
      categories.forEach((category) => {
        category.addEventListener("click", handleCategoryClick);
      });
      return () => {
        categories.forEach((category) => {
          category.removeEventListener("click", handleCategoryClick);
        });
      };
    }, []);
  
    const handleCategoryClick = (event) => {
      const selectedCategory = event.currentTarget.dataset.category;
      setSelectedCategory(selectedCategory);
    };
  return (
    <div className="Nabbar2">
        <div className="category" data-category={null}>
          <img src={fashion} alt='category' />
          <p>All Items</p>
        </div>
        <div className="category" data-category="Mobile">
          <img src={electronic} alt='category'></img>
          <p>Mobile</p>
        </div>
        <div className="category" data-category="Electronic">
          <img src={mobile} alt='category'></img>
          <p>Electronic</p>
        </div>
        <div className="category" data-category="furniture">
          <img src={furniture} alt='category'></img>
          <p>Furniture</p>
        </div>
        <div className="category" data-category="Fashion">
          <img src={fashion} alt='category' />
          <p>Fashion</p>
        </div>
       
      </div>
  )
}
export default Navbar2
