import { Outlet, Link } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <div><NavBar /></div>

      <Outlet />

      <div><Footer /></div>

      <Loader />
    </>
  )
};

export default Layout;