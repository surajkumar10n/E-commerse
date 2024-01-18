{itemsDetails.map((item) => (
  <>
    <div key={item.id} className="ProductContainer">
      <div className="ProductImage">
        <img src={item.img} alt={item.brand}></img>
        <br></br>
        <button
          className="button"
          onClick={() => dispatch(deleteItem(item.id))}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="ProductDetails">
        <p>{item.brand}</p>
        <p>{item.model}</p>
        <p>₹ {item.price}</p>
      </div>
    </div>
    <hr></hr>
  </>
))}