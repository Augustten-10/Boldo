import Groupz from "../../component/hero-graphics/Groupz";
import Grouppz from "../../component/hero-graphics/Grouppz";
import LogoWalll from "../../component/hero-graphics/Logowalll";
import HeroArt from "../../assets/Groupppz.svg";
// import Ellipse from "../../assets/ellipse.svg";


const Hero = () => {
  return (
    <div className="px-24 bg-white">
      <div className="py-40">
        <div className="flex justify-between">
          <div className="flex items-center w-1/2">
            <div className="text-black">
              <p className="text-5xl leading-normal">
                Save time by building fast with Boldo Template
              </p>
              <p className="text-base leading-7 my-8 text-greyish font-openSans">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <div className="flex gap-10">
                <button className="bg-darkBlue text-white border-none">Buy Template</button>
                <button className="border-darkBlue bg-transparent text-darkBlue">Explore</button>
              </div>
            </div>
          </div>
          <div className="max-w-5/12 grid gap-5">
            <Groupz />
            <div className="flex justify-between">
              <Grouppz />
              <img src={HeroArt} alt="art" />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <LogoWalll />
        </div>
      </div>
      {/* <img src={Ellipse} alt="Ellipse" className="absolute top-0 right-0 z-10"/> */}
    </div>
  );
};

export default Hero;
