import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/productslice.ts";

const AddProducts = ({ setShowform }: any) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productdetails, setProductdetails] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("error", errors);

  const dispatch = useDispatch();

  // handleSubmit((data) => {
  //   console.log("data", data);
  // });
  const obj = {
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("data", data);
          localStorage.setItem("obj", JSON.stringify(obj));
          dispatch(add(data));
        })}
      >
        <div>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && <p>this is required field</p>}
        </div>
        <div>
          <InputLabel>Description</InputLabel>
          <Input
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            type="text"
            {...register("description", { required: true })}
          />
          {errors.description && <p>this is required field</p>}
        </div>
        <div>
          <InputLabel>Price</InputLabel>
          <Input
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            type="text"
            {...register("price", { required: true })}
          />
          {errors.price && <p>this is required field</p>}
        </div>
        <div>
          <InputLabel>Quantity</InputLabel>
          <Input
            onChange={(e) => setQuantity(e.target.value)}
            name="quantity"
            type="number"
            {...register("quantity", { required: true })}
          />
          {errors.quantity && <p>this is required field</p>}
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default AddProducts;
