import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItem } from "../../store/storeSlice";
import { emptycart } from "../../utils/images";
import { Link } from "react-router-dom";

const CartPage = ({ isLoggedIn, openModal }) => {
  const itemsDetails = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [grandtotal, setGrandTotal] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  // const [quantity,setQuantity]=useState(1);


  const handleQuantityChange = (itemId, newCount) => {
    newCount = Math.max(newCount, 1);
    dispatch(addToCart({ id: itemId, count: newCount }));
  };

  

  useEffect(() => {
    const total = itemsDetails.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotalPrice(total);
    if (itemsDetails.length === 0) {
      setGrandTotal(0);
      setDeliveryCost(0);
    } else {
      if (totalPrice > 1000) {
        setDeliveryCost(0);
        setGrandTotal(totalPrice);
      } else {
        setDeliveryCost(10);
        setGrandTotal(totalPrice + deliveryCost);
      }
    }

  }, [itemsDetails, totalPrice, deliveryCost]);

  return (
    <div className="cartPage">
      <i class="fa-solid fa-bag-shopping fa-bounce" id="bag"></i>
      <h3>MY CART</h3>
      <div className="innerCartPage">
        <div className="ProductsPage">
          {itemsDetails.length === 0 ? (
            <div className="emptyCartImageContainer">
              <img
                src={emptycart}
                alt="Empty Cart"
                className="emptyCartImage"
              />
              <p>Your cart is empty!</p>
              <p>Add items to it now.</p>
              <Link to="/">
                <button>Shop now</button>
              </Link>
            </div>
          ) : (
            itemsDetails.map((item) => (
              <>
                <div key={item.id} className="ProductContainer">
                  <div className="cartImage">
                    <img src={item.img} alt={item.brand}></img>
                  </div>
                  <div className="cartDesc">
                    <p>{item.brand}</p>
                    <p>{item.model}</p>

                  </div>
                  <div className="quantity">
                    <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, item.count - 1)} >
                      -
                    </button>
                    <input type="text" class="quantity-input" value={item.count} />
                    <button className="quantity-btn"  onClick={() => handleQuantityChange(item.id, item.count + 1)} >
                      +
                    </button>
                  </div>
                  <div className="cartprice">
                    <p>₹ {item.price}</p>
                  </div>
                  <div className="ProductDelButton">
                    <button
                      className="button"
                      onClick={() => dispatch(deleteItem(item.id))}
                    >
                      <i class="fa-solid fa-trash fa-shake"></i>
                    </button>
                  </div>
                </div>
                {/* <br></br> */}
                <hr></hr>
              </>
            ))
          )}
        </div>
        <div className="OrderSummary">
          <h3>Order Summary</h3>
          <hr></hr>
          <div className="SelectedItems">
            <p>Selected Items {itemsDetails.length}</p>
            <p>₹ {totalPrice}</p>
          </div>
          <div className="Discount">
            <p>Discount </p>
            <p>{0}</p>
          </div>
          <div className="DeliveryCost">
            <p>DeliveryCost</p>
            <p>{deliveryCost}</p>
          </div>
          <hr></hr>
          <div className="GrandTotal">
            <p>Grand Total</p>
            <p>{grandtotal}</p>
          </div>
          {console.log()}

          {isLoggedIn ? (
            <button className="ProceedToCheckout"> Checkout</button>
          ) : (
            <button className="ProceedToCheckout" onClick={openModal}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
