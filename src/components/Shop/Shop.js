import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Shop = (props) => {
  console.log(props.product);
  const { productName, wigth, price, imgUrl, _id } = props.product;
  console.log(props);
  return (
    <div className="col-sm-4 text-center">
      <div className="card m-2" style={{ width: "100%" }}>
        <div className=" text-center">
          <img
            style={{ height: "140px", width: "140px" }}
            src={imgUrl}
            className="card-img-top"
            alt=""
          ></img>
        </div>

        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text"> Wigth:{wigth}</p>
          <p> Price: {price} Taka</p>
          <Link to={"/product/" + _id}>
            <button className="btn btn-warning text-end">
              <ShoppingCartIcon />
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
