import { Outlet, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <div><NavBar/></div>

      <Outlet />
    </>
  )
};

export default Layout;