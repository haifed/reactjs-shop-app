import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosClient from "./AxiosClient";
import { history } from "../helpers/history";

const productsURL = "https://course-api.com/react-store-products";

const ProductsService = {
  getAllProducts() {
    return AxiosClient.get(productsURL);
  },

  getProduct(id: any) {
    return AxiosClient.get(
      "https://course-api.com/react-store-single-product?id=" + id
    );
  },
};
export default ProductsService;
