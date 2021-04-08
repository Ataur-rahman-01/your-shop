import React, { useEffect, useState } from "react";
import Shop from "../Shop/Shop";

const Home = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://desolate-river-98696.herokuapp.com/getproduct")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <div
        style={{ marginTop: "-6px" }}
        className="row container text-center ms-5"
      >
        {products.map((product) => (
          <Shop key={product._id} product={product}></Shop>
        ))}
      </div>
    </>
  );
};

export default Home;
