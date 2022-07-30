import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductsService from "../../api/Products.service";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    // try {
    //   let allProducts:any = await ProductsService.getAllProducts();
    //   console.log("allProducts", allProducts.data);
    //   setProducts(allProducts.data);
    //   console.log("Products", products);
    // } catch (err:any) {
    //  setError(err)
    // }
    ProductsService.getAllProducts()
      .then((res: any) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };
  const truncate = (str: string) => {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  };

  useEffect(() => {
    getAllProducts();
    console.log("Products", products);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(products.length / recordsPerPage);

  return (
    <div className="d-flex col-12">
      <div className="col-3"></div>
      <div className="col-9">
        <div className="col-12 d-flex flex-wrap">
          {currentRecords.map((product: any) => {
            return (
              <div
                id={product.id}
                key={product.id + product.name}
                className="col-12 col-md-6 col-lg-4"
              >
                <div className="p-2">
                  <Card id={product.id}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name.toUpperCase()}</Card.Title>
                      <Card.Text>{truncate(product.description)}</Card.Text>
                      <Button
                        variant="primary"
                        className="me-2"
                        onClick={() => navigate("/products/" + product.id)}
                      >
                        Go Details ...
                      </Button>
                      <Button variant="success">Add To Cart ...</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Products;
