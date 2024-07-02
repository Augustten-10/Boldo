import Group from "../../component/hero-graphics/Group";
import Groupp from "../../component/hero-graphics/Groupp";
import LogoWall from "../../component/hero-graphics/LogoWall";
import HeroArt from "../../assets/Grouppp.svg";
// import Ellipse from "../../assets/ellipse.svg";


const Hero = () => {
  return (
    <div className="px-24 bg-darkBlue max-sm:px-10">
      <div className="py-40 max-sm:pb-0">
        <div className="flex justify-between max-sm:flex-col max-sm:gap-10">
          <div className="flex items-center w-1/2 max-sm:w-full">
            <div className="text-white">
              <p className="text-5xl leading-normal max-sm:text-3xl">
                Save time by building fast with Boldo Template
              </p>
              <p className="text-base leading-7 my-8 text-greyish font-openSans">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <div className="flex gap-10">
                <button className="bg-teal text-darkBlue border-none">Buy Template</button>
                <button className="border-white">Explore</button>
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <Group />
            <div className="flex justify-between">
              <Groupp />
              <img src={HeroArt} alt="art" className="w-full h-auto"/>
            </div>
          </div>
        </div>
        <div className="mt-20 max-sm:mt-0">
          <LogoWall />
        </div>
      </div>
      {/* <img src={Ellipse} alt="Ellipse" className="absolute top-0 right-0 z-10"/> */}
    </div>
  );
};

export default Hero;
