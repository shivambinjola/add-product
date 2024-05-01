import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [
    {
      name: "Shivam binjola",
      description: "jhlhd",
      price: "21",
      quantity: "34",
    },
  ],
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, product) => {
      // const productdata = [];
      // console.log("pro", product.payload);
      // productdata.push(product.payload);
      // console.log("pd", productdata);
      // console.log("jsldpi", state);
      state.item.push(product.payload);
      // const convertProductdata = JSON.stringify(data);
      localStorage.setItem("productdata", JSON.stringify(state.item));
      // return productdata;
    },
    edit: (state, product) => {
      const { index, newdata } = product.payload;
      state.item[index] = newdata;
      console.log("", state.item, product.payload);
      localStorage.setItem("productdata", JSON.stringify(state.item));
    },
    remove: (state, product) => {
      // delete state.item[product.payload];
      console.log("dep", state.item, product.payload);

      state.item.splice(product.payload, 1);
      localStorage.setItem("productdata", JSON.stringify(state.item));
    },
  },
});

export const { add, edit, remove } = productReducer.actions;
export default productReducer.reducer;
