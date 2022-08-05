import { Outlet, Link } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <div><NavBar /></div>

      <Outlet />

      <div><Footer /></div>

      <Loader />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
};

export default Layout;