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
            {
                productStore.length > 0 ? <div>
                    <div>
                        <ListGroup>
                            {
                                productStore.map((product: any) => {
                                    return (
                                        <ListGroup.Item id={product.id} key={product.id}>
                                            <div className="d-flex align-items-center justify-content-center col-12">
                                                <div className="d-flex flex-wrap col-5">
                                                    <img className="image-cart col-12 col-sm-6" src={product.image} alt="" />

                                                    <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center text-center">
                                                        <div>
                                                            <div>{product.name}</div>
                                                            <div>{product.price / 1000} $</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center col-7">

                                                    <div className="col-6 p-2">
                                                        <p>{product.quantity} product(s) in cart</p>
                                                        <div className="text-center">
                                                            <button className="btn btn-success me-2 mb-1" onClick={() => incQuantity(product)}><i className="fas fa-arrow-up"></i></button>
                                                            <button className="btn btn-warning mb-1" onClick={() => decQuantity(product)}><i className="fas fa-arrow-down"></i></button>
                                                        </div>
                                                    </div>

                                                    <div className="col-6 text-center">
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
                </div> : <div className="noproduct d-flex justify-content-center align-items-center"><h3>There is no product in cart.</h3></div>
            }
        </div>
    )
};
export default Cart