import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { remove, edit } from "../redux/productslice.ts";

import { useDispatch, useSelector } from "react-redux";

const DisplayProducts = ({ data, setShowform, showform }: any) => {
  const [dataofproduct, setDataofproduct] = useState([]);

  const dispatch = useDispatch();

  const productdata = useSelector((state: any) => {
    console.log("sta", state.item);
    return state.item;
  });

  const obj = localStorage.getItem("obj");
  const userparsedata = JSON.parse(obj);

  // const dataproduct = localStorage.getItem("productdata");
  console.log("jhdso", productdata);

  // useEffect(() => {
  //   setDataofproduct((prev: any) => [...prev, productdata]);
  // }, []);
  console.log("dddd", dataofproduct);
  // const convertProductdata = JSON.stringify(productdata);
  // localStorage.setItem("productdata", convertProductdata);
  // const convert = JSON.stringify(dataofproduct);
  // localStorage.setItem("productdata", convert);
  console.log("per", productdata);
  const getdata = localStorage.getItem("productdata");
  const parse = JSON.parse(getdata);
  console.log("parse", parse);

  return (
    <div>
      {" "}
      <h1>Table</h1>
      <Button onClick={() => setShowform(!showform)}>Add Product</Button>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parse?.map((item: any, id: any) => (
              <TableRow key={id}>
                <TableCell>{item?.name}</TableCell>
                <TableCell>{item?.description}</TableCell>
                <TableCell>{item?.price}</TableCell>
                <TableCell>{item?.quantity}</TableCell>
                <Button
                  onClick={() => {
                    dispatch(edit(userparsedata));
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    dispatch(
                      remove({
                        name: "",
                        description: "",
                        price: "",
                        quantity: "",
                      })
                    );
                  }}
                >
                  Delete
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DisplayProducts;
