import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import CartService from "../../api/Cart.service";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Cart.css";

const Cart = () => {

    const [productStore, setProductStore] = useState([]);

    const getProductStore = () => {
        CartService.getProductStore().subscribe((res: any) => {
            console.log(res);
            setProductStore(res);
        })
    };

    function removeFromCart(product: any) {
        // console.log(product);
        CartService.removeItem(product);
        let products = productStore.filter((p: any) => p.id !== product.id)
        setProductStore(products);
    };
    function incQuantity(product: any) {
        CartService.addToCart(product);
        setProductStore([...productStore]);
    };
    function decQuantity(product: any) {
        CartService.removeItem(product);
        setProductStore([...productStore]);
        if (product.quantity === 0) {
            removeFromCart(product)
        }
    };

    useEffect(() => {
        getProductStore();
    }, []);

    return (
        <div>
            <ListGroup>
                {
                    productStore.map((product: any) => {
                        return (
                            <ListGroup.Item id={product.id} key={product.id}>
                                <div className="d-flex align-items-center col-12">
                                    <div className="col-2">
                                        <img className="image-cart" src={product.image} alt="" />
                                    </div>

                                    <div className="d-flex align-items-center col-10">
                                        <div className="col-4">
                                            <p>{product.name}</p>
                                            <p>{product.price / 1000} $</p>
                                        </div>

                                        <div className="col-4">
                                            <p>{product.quantity} product(s) in cart</p>
                                        </div>

                                        <div>
                                            <button className="btn btn-success me-2" onClick={() => incQuantity(product)}>Increase</button>
                                            <button className="btn btn-light me-2" onClick={() => decQuantity(product)}>Decrease</button>
                                            <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove</button>
                                        </div>

                                    </div>


                                </div>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
};
export default Cart