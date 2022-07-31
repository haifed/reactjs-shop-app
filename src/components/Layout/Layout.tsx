import { Outlet, Link } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <div><NavBar/></div>

      <Outlet />

      <Loader/>
    </>
  )
};

export default Layout;