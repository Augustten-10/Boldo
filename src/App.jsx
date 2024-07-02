import { RouterProvider } from "react-router-dom";
import { router } from "./route/route";
import { Fragment } from "react";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <RouterProvider router={router} />
    </Fragment>
  );
}
