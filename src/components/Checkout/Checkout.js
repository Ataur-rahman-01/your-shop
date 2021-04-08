import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { productContext } from "../../App";

const Checkout = () => {
  const { id } = useParams();

  const [checkout, setCheckout] = useState([]);
  const [product, setproduct] = useContext(productContext);

  useEffect(() => {
    fetch(`https://desolate-river-98696.herokuapp.com/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCheckout(data);
      });
  }, [id]);
  setproduct(checkout);

  return (
    <div>
      <h3 className="text-center m-3">Product details</h3>
      <div className="text-center p-5">
        <p style={{ marginTop: "50px" }} className="text-start">
          Discription
        </p>
        <p style={{ marginTop: "-30px" }} className="text-center">
          Quantity
        </p>
        <p style={{ marginTop: "-30px" }} className="text-end">
          Price
        </p>
      </div>
      <hr style={{ marginTop: "-45px" }} />
      <div className="text-center p-5">
        <p className="text-start">{checkout[0]?.productName}</p>
        <p style={{ marginTop: "-30px" }} className="text-center">
          1
        </p>
        <p style={{ marginTop: "-30px" }} className="text-end">
          Taka:
          {checkout[0]?.price}
        </p>
      </div>
      <hr style={{ marginTop: "-45px" }} />
      <p style={{ marginRight: "50px" }} className="text-end">
        Toatal:{checkout[0]?.price} taka
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/order">
          <button className="btn btn-primary m-5">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
