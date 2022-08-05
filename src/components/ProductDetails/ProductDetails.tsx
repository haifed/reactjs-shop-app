import React, { useEffect, useState } from "react";
import ProductsService from "../../api/Products.service";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { Rating } from "primereact/rating";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const getProduct = () => {
    console.log(window.location.pathname.split("/")[2]);
    let id: string = window.location.pathname.split("/")[2];
    ProductsService.getProduct(id).then((res: any) => {
      setProduct(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getProduct();
    console.log(product);
  }, []);

  return (
    <div>
      <div className="d-flex col-12 flex-wrap">
        <div className="col-sm-6 p-3">
          <Carousel>
            {(product as any)?.images?.map((image: any) => {
              return (
                <Carousel.Item id={image.id} key={image.id + image.filename}>
                  <img
                    className="d-block w-100"
                    src={image.url}
                    alt="image slide"
                  />
                  <Carousel.Caption>
                    {/* <h3>{(product as any).name.toUpperCase()}</h3>
                  <p>
                  {(product as any).description}
                  </p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>

        <div className="col-sm-6 p-3">
          <div className="mb-5">
            <h3 className="mb-3">{(product as any).name?.toUpperCase()}</h3>
            <div className="d-flex align-items-center p-0 m-0">
              <div className="me-2">Star:</div>
              <div className="me-2">
                <Rating
                  value={(product as any).stars}
                  readOnly
                  stars={5}
                  cancel={false}
                />
              </div>
              <div>({(product as any).stars})</div>
            </div>
            <p className="p-0 mt-0 mb-3">Reviews: {(product as any).reviews}</p>
            <p><i className="fas fa-info-circle"></i> {(product as any).description}</p>
            <p>Price: $ {(product as any).price / 100}</p>
            <p>Stock: {(product as any).stock} </p>
            <p>Shipping: {(product as any).shipping ? 'yes' : 'no'} </p>
          </div>

          <div>
            <button className="btn btn-success mb-2">
              <i className="fas fa-shopping-cart"></i> Add To Cart
            </button>
            <br />
            <button
              className="btn btn-primary"
              onClick={() => navigate("/products")}
            >
              <i className="fas fa-arrow-alt-circle-left"></i> Go To Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
