import { createBrowserRouter } from "react-router-dom";
import { Products } from "../pages/products/Products";
import { Services } from "../pages/services/Services";
import About from "../pages/About";
import { Login } from "../pages/Login";
import HomePage from "../pages/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
