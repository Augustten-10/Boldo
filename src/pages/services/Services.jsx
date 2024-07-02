import Footer from "./Footer";
import Gallery from "./Gallery";
import Handshake from "./Handshake";
import Hero from "./Hero";
import Leadership from "./Leadership";
import Numbers from "./Numbers";
import Template from "./Template";
import Values from "./Values";

export const Services = () => {
  return <div>
    <Hero />
    <div className="-mt-40">
      <Gallery />
    </div>
    <Handshake />
    <Numbers />
    <Leadership />
    <Values />
    <Template />
    <Footer />
  </div>;
};
