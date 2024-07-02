import Gallery1 from "../../assets/Rectangle 1270.png";
import Gallery2 from "../../assets/Rectangle 1271.png";
import Gallery3 from "../../assets/Rectangle 1272.png";
import Gallery4 from "../../assets/Rectangle 1273.png";
import Gallery5 from "../../assets/Rectangle 1274.png";

const Gallery = () => {
  return (
    <div className="flex justify-center px-36 py-24">
      <div className="grid grid-cols-3 gap-8 w-5/6 h-full">
        <img src={Gallery1} alt="Gallery" className="h-full w-full" />
        <img
          src={Gallery2}
          alt="Gallery"
          className="row-span-2 rounded-2xl h-full w-full object-cover"
        />
        <img src={Gallery3} alt="Gallery" className="w-full h-full" />
        <img src={Gallery4} alt="Gallery" className="w-full h-full" />
        <img src={Gallery5} alt="Gallery" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Gallery