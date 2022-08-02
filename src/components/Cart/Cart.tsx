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
        // console.log(product);
        let index = productStore.findIndex((i: any) => i.id === product.id);

    };
    function decQuantity(product: any) {
        // console.log(product);
        let index = productStore.findIndex((i: any) => i.id === product.id);

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