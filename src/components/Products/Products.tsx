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
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import CartService from "../../api/Cart.service";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords: any = products.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
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
        setListProducts(res.data);
        console.log(res.data);
        let listCompanies: any = res.data.map((item: any) => item.company);
        listCompanies = unique(listCompanies);
        setCompanies(listCompanies);
        let listCategories: any = res.data.map((item: any) => item.category);
        listCategories = unique(listCategories);
        listCategories.unshift("all");
        setCategories(listCategories);
        setMaxPrice(findMax(res.data));
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
    let copy = [...listProducts];
    if (textInput !== "") {
      let text = textInput.trim().toLowerCase();
      let filter = copy.filter((p: any) => p.name.toLowerCase().includes(text));
      setProducts(filter);
    } else {
      setProducts(copy);
    }
  };
  const Refresh = () => {
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

  // filter
  const filterByCompany = (e: any) => {
    let copy = [...listProducts];
    if (e.currentTarget.value !== "all") {
      let filterProducts: any = copy.filter(
        (p: any) => p.company === e.currentTarget.value
      );
      setProducts(filterProducts);
    }
    if (e.currentTarget.value === "all") {
      setProducts(copy);
    }
  };
  const filterByCategory = (e: any) => {
    console.log(e.currentTarget.id);
    let copy = [...listProducts];
    if (e.currentTarget.id !== "all") {
      let filterProducts: any = copy.filter(
        (p: any) => p.category === e.currentTarget.id
      );
      setProducts(filterProducts);
    } else setProducts(copy);
  };
  const filterByPrice = (e: any) => {
    console.log(e.currentTarget.value);
    setCurrentPrice(e.currentTarget.value);
    let copy = [...listProducts];
    let filterProducts: any = copy.filter(
      (p: any) => p.price <= e.currentTarget.value
    );
    setProducts(filterProducts);
  };

  const truncate = (str: string) => {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  };
  const unique = (arr: any) => {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (newArr.findIndex((item) => arr[i] == item) === -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };
  const findMax = (arr: any) => {
    let i;
    // Initialize maximum element
    let max = arr[0].price;
    // Traverse array elements
    // from second and compare
    // every element with current max
    for (i = 1; i < arr.length; i++) {
      if (arr[i].price > max) max = arr[i].price;
    }
    return max;
  };

  function addToCart(product: any) {
    // console.log(product);
    CartService.addToCart(product);
    // product.ItemQuantity = CartService.getItemQuantity(product);
    // console.log(product.name,':', product.ItemQuantity);
    CartService.getProductStore().subscribe((res:any)=>{
      console.log(res);
      let index = res.findIndex((p:any)=>p.id === product.id);
      console.log(index);
      product.ItemQuantity = res[index].quantity;
      console.log(product.name,':', product.ItemQuantity);
      setProducts([...products])
    })
  }
  function removeFromCart(product: any) {
    console.log(product);
    CartService.removeItem(product);
    product.ItemQuantity = CartService.getItemQuantity(product);
    console.log(product.name,':', product.ItemQuantity);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  // render
  return (
    <div>
      <div className="d-block d-lg-none p-2">
        <Search searchItem={SearchProduct} refresh={Refresh} />
      </div>

      <div className="d-flex col-12">
        <div className="col-3 p-2">
          <div className="d-none d-lg-block">
            <Search searchItem={SearchProduct} refresh={Refresh} />
          </div>
          <hr />
          <div className="mb-3">
            <div className="h6">Company:</div>
            <Form.Select
              aria-label="Default select example"
              onChange={filterByCompany}
            >
              <option>Choose company ...</option>
              <option value="all">All</option>
              {companies.map((company: any) => {
                return (
                  <option id={company} key={company + company} value={company}>
                    {company}
                  </option>
                );
              })}
            </Form.Select>
          </div>

          <div className="mb-3">
            <div className="h6">Category:</div>
            <ListGroup>
              {categories.map((category: any) => {
                return (
                  <ListGroup.Item
                    className="category border-0"
                    id={category}
                    key={category + category}
                    onClick={filterByCategory}
                  >
                    {category}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>

          <div className="d-flex flex-wrap align-items-center w-100">
            <div className="col-12 col-sm-2">
              <label className="me-2 h6">Price:</label>
            </div>

            <div className="col-12 col-sm-8">
              <input
                type="range"
                className="w-100 custom-range me-1"
                min="0"
                max={maxPrice}
                onChange={filterByPrice}
                id="priceInputId"
              />
              <span>{currentPrice / 100} $</span>
            </div>
          </div>
        </div>

        <div className="col-9 p-2 right">
          <div className="px-2 d-flex justify-content-between align-items-center">
            <div className="fw-bold">{products?.length} Products</div>
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
                        <Card.Text>Price: {product.price / 100} $</Card.Text>
                        <Card.Text>Company: {product.company}</Card.Text>
                        <Card.Text>Category: {product.category}</Card.Text>
                        <Card.Text>{truncate(product.description)}</Card.Text>
                        <Button
                          variant="primary"
                          className="m-1"
                          onClick={() => navigate("/products/" + product.id)}
                        >
                          Go Details ...
                        </Button>
                        <Button
                          className="m-1"
                          variant="success"
                          onClick={() => addToCart(product)}
                        >
                          Add To Cart ...
                        </Button>

                        {product.ItemQuantity>0? <Button
                          className="m-1"
                          variant="danger"
                          onClick={() => removeFromCart(product)}
                        >
                          Remove
                        </Button>:null}
                       
                        <br />
                        {product.ItemQuantity>0?<span>{ product.ItemQuantity} product(s) in cart</span>:null}
                        
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
