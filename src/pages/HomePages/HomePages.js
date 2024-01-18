import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import {
  slider_img_1,
  slider_img_2,
  slider_img_3,
  slider_img_4,
} from "../../utils/images";
import { useDispatch } from "react-redux";
import "./HomePages.css";
import { addToCart } from "../../store/storeSlice";
import CartPage from "../CartPage/CartPage";
import jsonData from "../../utils/db.json";
const HomePages = ({ selectedCategory, searchProduct }) => {
  const [datas, setDatas] = useState();

  const images = [slider_img_1, slider_img_2, slider_img_3, slider_img_4];
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.nykaafashion.com/rest/appapi/V2/categories/products?PageSize=48&filter_format=v2&apiVersion=5&currency=INR&country_code=IN&deviceType=WEBSITE&categoryId=9665&currentPage=1"
      );
      // console.log(response);
      const data = await response.json();
      setDatas(data.response.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    // fetchData();
    setDatas(jsonData);
  }, []);
  // console.log(datas);
  return (
    <>
      <Slider images={images} />

      <div className="wholecard">
        {datas ? (
          datas
            .filter(
              (item) =>
                (!selectedCategory || item.type === selectedCategory) &&
                (!searchProduct ||
                  item.brand
                    .toLowerCase()
                    .includes(searchProduct.toLowerCase()))
            )
            .map((item) => (
              <div key={item.id} className="singleCards">
                <img src={item.img} alt={item.brand} />
                <h3>{item.brand}</h3>
                <h4>₹ {item.price}</h4>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add to cart
                </button>
              </div>
            ))
        ) : (
          <div>loading</div>
        )}
      </div>
    </>
  );
};

export default HomePages;
