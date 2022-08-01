import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <div className="jumbotron-container d-flex justify-content-center align-items-center mb-2">
        <div className="jumbotron p-3">
          <div>
            <h1 className="display-4">Hello ...!</h1>
            <p className="lead">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </p>
            <hr className="my-4" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Mauris quam enim, ultricies faucibus ante nec, ullamcorper commodo
              mi. <br />
              Quisque facilisis luctus volutpat. Proin malesuada convallis
              vehicula. <br />
              Nullam eget lacus feugiat, pulvinar odio sit amet, interdum
              sapien. Sed pellentesque ac odio eu pretium.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="#"
              role="button"
              onClick={() => navigate("/products")}
            >
              Shop now ...
            </a>
          </div>
        </div>
      </div>

      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
