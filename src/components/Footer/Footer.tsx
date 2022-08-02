import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(0);

    function getCurrentYear() {
        let year = new Date().getFullYear();
        console.log(year);

        setCurrentYear(year)
    };

    useEffect(() => {
        getCurrentYear()
    }, []);

    return (
        <div className="footer bg-dark text-white">
            <div className="container-xl">
                <div className="d-flex justify-content-center pt-2 ">
                    <div className="mx-1 btn p-1  text-white" >
                        <i className="fab fa-facebook"></i>
                    </div>
                    <div className="mx-1 btn p-1  text-white" >
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="mx-1 btn p-1  text-white" >
                        <i className="fab fa-snapchat"></i>
                    </div>
                    <div className="mx-1 btn p-1  text-white" >
                        <i className="fab fa-pinterest-p"></i>
                    </div>
                    <div className="mx-1 btn p-1  text-white" >
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="mx-1 btn p-1  text-white" >
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>

                <div className="text-center pb-2 mb-0">
                    &copy; {currentYear} CMH. All Right Reserved.
                </div>

            </div>
        </div>
    )
}

export default Footer