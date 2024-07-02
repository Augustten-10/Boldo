import Blog from "./Blog";
import Connect from "./Connect";
import Customers from "./Customers";
import Enterprise from "./Enterprise";
import Footer from "./Footer";
import Hero from "./Hero";
import OurServices from "./OurServices";
import Template from "./Template";

export const Products = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <Connect />
      <Enterprise />
      <Customers />
      <Blog />
      <Template />
      <Footer />
    </div>
  );
};

export default Products;
