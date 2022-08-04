import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import CartService from "../../api/Cart.service";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Cart.css";

const Cart = () => {

    const [productStore, setProductStore] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

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

    const getQuantityCart = () => {
        CartService.getCartQuantity().subscribe((res: any) => {
            // console.log(res);
            setQuantity(res);
        });
    };
    const getTotalPrice = () => {
        CartService.getTotalPrice().subscribe((res: any) => {
            // console.log(res);
            setTotalPrice(res);
        });
    };

    useEffect(() => {
        getProductStore();
        getQuantityCart();
        getTotalPrice();
    }, []);

    return (

        <div>
            {
                productStore.length > 0 ? <div className="cart-container">
                    <div>
                        <div className="d-flex justify-content-end align-items-center pe-3">
                            <div className="py-2 px-3">
                                <div> <span className="h6"><i className="fas fa-shopping-cart"></i> Total Products:</span>  {quantity}</div>
                                <div> <span className="h6"><i className="fas fa-dollar-sign"></i> Total Price:</span>  {totalPrice / 100} $</div>
                            </div>
                            <div>
                                <a
                                    className="btn btn-primary btn-sm"
                                    href="#"
                                    role="button"
                                    onClick={() => navigate("/products")}
                                >
                                    <i className="fas fa-shopping-bag"></i> Continue shopping
                                </a>
                            </div>
                        </div>

                        <ListGroup>
                            {
                                productStore.map((product: any) => {
                                    return (
                                        <ListGroup.Item id={product.id} key={product.id}>
                                            <div className="d-flex align-items-center justify-content-center col-12">
                                                <div className="d-flex flex-wrap col-5">
                                                    <div className=" col-12 col-sm-6">
                                                        <img className="image-cart" src={product.image} alt="" />
                                                    </div>

                                                    <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center text-center">
                                                        <div>
                                                            <div>{product.name.toUpperCase()}</div>
                                                            <div>{product.price / 1000} $</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center col-7">

                                                    <div className="col-6 p-2">
                                                        <p className="text-center">{product.quantity} product(s) in cart</p>
                                                        <div className="text-center">
                                                            <button className="btn btn-success me-2 mb-1" onClick={() => incQuantity(product)}><i className="fas fa-arrow-up"></i></button>
                                                            <button className="btn btn-warning mb-1" onClick={() => decQuantity(product)}><i className="fas fa-arrow-down"></i></button>
                                                        </div>
                                                    </div>

                                                    <div className="col-6 text-center">
                                                        <button className="btn btn-danger" onClick={() => removeFromCart(product)}><i className="fas fa-trash-alt"></i> Remove</button>
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