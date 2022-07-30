import React, { useEffect, useState } from "react";
import ProductsService from "../../api/Products.service";
import Carousel from "react-bootstrap/Carousel";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const getProduct = () => {
    console.log(window.location.pathname.split("/")[2]);
    let id: string = window.location.pathname.split("/")[2];
    ProductsService.getProduct(id).then((res: any) => {
      setProduct(res.data);
      console.log(res.data.images);
    });
  };

  useEffect(() => {
    getProduct();
    console.log(product);
  }, []);

  return (
    <div>
      <div className="d-flex col-12">
        <div className="col-6 p-3">
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

        <div className="col-6 p-3">
          <h3>{(product as any).name?.toUpperCase()}</h3>
          <p>{(product as any).description}</p>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
