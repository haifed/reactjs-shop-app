import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductsService from "../../api/Products.service";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import Pagination from "../../shared/Pagination/Pagination";
import Search from "../../shared/Search/Search";
import Sort from "../../shared/Sort/Sort";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(products.length / recordsPerPage);

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

  // search
  const SearchProduct = (textInput: any) => {
    let copy = [...products];
    if (textInput !== "") {
      let text = textInput.trim().toLowerCase();
      let filter = copy.filter((p: any) => p.name.toLowerCase().includes(text));
      setProducts(filter);
    } else {
      setProducts(copy);
    }
  };
  const Refresh = (textInput: any) => {
    getAllProducts();
  };

  // sort
  const SortBy = (option: any) => {
    console.log(option);
    let copy = [...products];
    if (option == "all") {
      option = "name-a-z";
    }
    if (option == "name-a-z") {
      let sortProducts = copy.sort(function (s1: any, s2: any) {
        let a = s1.name.toLowerCase();
        let b = s2.name.toLowerCase();
        return a === b ? 0 : a < b ? -1 : 1;
      });
      setProducts(sortProducts);
    }
    if (option == "name-z-a") {
      let sortProducts = copy.sort(function (s1: any, s2: any) {
        let a = s1.name.toLowerCase();
        let b = s2.name.toLowerCase();
        return a === b ? 0 : a > b ? -1 : 1;
      });
      setProducts(sortProducts);
    }
    if (option == "price-lowest") {
      let sortProducts = copy.sort(function (s1: any, s2: any) {
        let a = s1.price;
        let b = s2.price;
        return a === b ? 0 : a < b ? -1 : 1;
      });
      setProducts(sortProducts);
    }
    if (option == "price-highest") {
      let sortProducts = copy.sort(function (s1: any, s2: any) {
        let a = s1.price;
        let b = s2.price;
        return a === b ? 0 : a > b ? -1 : 1;
      });
      setProducts(sortProducts);
    }
  };

  const truncate = (str: string) => {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  };

  useEffect(() => {
    getAllProducts();
    console.log("Products", products);
  }, []);

  // render
  return (
    <div>
      <div className="d-block d-lg-none px-4 pt-3">
        <Search searchItem={SearchProduct} refresh={Refresh} />
      </div>

      <div className="d-flex col-12">
        <div className="col-3 p-3">
          <div className="d-none d-lg-block">
            <Search searchItem={SearchProduct} refresh={Refresh} />
          </div>
        </div>

        <div className="col-9 p-3">
          <div className="px-2 d-flex justify-content-between align-items-center">
            <div>{products?.length} Products</div>
            <div className="col-6 col-md-3">
              <Sort sort={SortBy} />
            </div>
          </div>

          <div className="col-12 d-flex flex-wrap">
            {currentRecords.map((product: any) => {
              return (
                <div
                  id={product.id}
                  key={product.id + product.name}
                  className="col-12 col-md-6 col-lg-4"
                >
                  <div className="p-2">
                    <Card id={product.id} className="card-product">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name.toUpperCase()}</Card.Title>
                        <Card.Text>{product.price / 100} $</Card.Text>
                        <Card.Text>{truncate(product.description)}</Card.Text>
                        <Button
                          variant="primary"
                          className="m-1"
                          onClick={() => navigate("/products/" + product.id)}
                        >
                          Go Details ...
                        </Button>
                        <Button className="m-1" variant="success">Add To Cart ...</Button>
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
    </div>
  );
};

export default Products;
