import React, { useContext, useEffect, useState } from "react";
import { productContext, userContext } from "../../App";

const Order = () => {
  const [user, setUser] = useContext(userContext);
  const [product, setProduct] = useContext(productContext);
  const [orders, setOrder] = useState();
  const productName = product[0]?.productName;
  const productPrice = product[0]?.price;
  const userEmail = user?.email;
  // const order = { productName, productPrice, userEmail };

  useEffect(() => {
    fetch(`https://desolate-river-98696.herokuapp.com/getorder/${userEmail}`)
      .then((response) => response.json())
      .then((data) => setOrder(data));
  }, [userEmail]);
  const handelorder = () => {
    const url = "https://desolate-river-98696.herokuapp.com/addorder";
    const order = { productName, productPrice, userEmail };
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    });
  };
  console.log(orders);

  return (
    <div>
      <div className="container text-center m-5">
        <h3>Coustomer Info:</h3>
        <hr />
        <h5 className="text-center"> Name:{user?.displayName}</h5>
        <h5 className="text-center">Email:{user?.email}</h5>
      </div>
      <div className="container text-center m-5">
        <h3>Order Info:</h3>
        <hr />
      </div>
      <div className="container text-end m-5">
        <p>Product: {product[0]?.productName}</p>
        <p>Price:{product[0]?.price}</p>

        <button onClick={handelorder} type="button" className="btn btn-info">
          Order Now
        </button>
      </div>
      <div className="container text-center m-5">
        <h3>Your order</h3>
        <hr />
        {orders.map((product) => (
          <h4>{product.productName}</h4>
        ))}
      </div>
    </div>
  );
};

export default Order;
