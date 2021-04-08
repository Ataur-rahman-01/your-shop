import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import AddBoxIcon from "@material-ui/icons/AddBox";
import axios from "axios";

const Admin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imgUrl, setImgUrl] = useState(null);
  const onSubmit = (data) => {
    const infoData = {
      productName: data.productName,
      wigth: data.wigth,
      price: data.price,
      imgUrl: imgUrl,
    };
    const url = "http://localhost:8000/addproduct";
    console.log(infoData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(infoData),
    });
  };
  const handelimgupload = (event) => {
    console.log(event.target.files[0]);
    const imgdata = new FormData();
    imgdata.set("key", "594b80f572e0adfd421384e388f57db2");
    imgdata.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgdata)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Grid container>
      <Grid
        style={{ height: "90vh", margin: 0, padding: 0 }}
        className="bg-info"
        item
        xs={4}
        sm={2}
      >
        <Button
          className="m-3"
          variant="contained"
          startIcon={<TransferWithinAStationIcon />}
        >
          Manage Product
        </Button>
        <Button className="m-3" variant="contained" startIcon={<AddBoxIcon />}>
          Add Product
        </Button>
      </Grid>
      <Grid item xs={8} sm={10}>
        <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-label">Product Name:</label>
          <input className="form-control" name="productName" ref={register} />
          <label className="form-label">Wigth:</label>
          <input
            className="form-control"
            name="wigth"
            ref={register({ required: true })}
          />
          <label className="form-label">Add Price:</label>
          <input className="form-control" name="price" ref={register} />
          <label className="form-label">Add Photo:</label>
          <input
            className="form-control"
            type="file"
            onChange={handelimgupload}
          />

          <input className="btn btn-success mt-3" type="submit" />
        </form>
      </Grid>
    </Grid>
  );
};

export default Admin;
