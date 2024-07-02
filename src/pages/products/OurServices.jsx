import Arrow from "../../assets/arrow-right.svg";
import Demo1 from "../../assets/demo.svg";
import Demo2 from "../../assets/demo2.svg";
import Demo3 from "../../assets/demo3.svg";

const OurServices = () => {
  const ribbons = [
    {
      id: "1",
      image: Demo1,
      title: "Cool feature title",
    },
    {
      id: "2",
      image: Demo2,
      title: "Even cooler feature",
    },
    {
      id: "3",
      image: Demo3,
      title: "Cool feature title",
    },
  ];
  return (
    <div className="px-36 bg-darkBlue">
      <div className="text-white py-24">
        <div className="text-center">
          <p className="text-2xl">Our Services</p>
          <p className="text-5xl leading-normal">
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>
        <div className="flex justify-between">
          {ribbons.map((ribbon) => (
            <div key={ribbon.id} className="mt-16 max-w-[30%] font-openSans">
              <img src={ribbon.image} alt="" />
              <p className="text-2xl my-5">{ribbon.title}</p>
              <button
                type="button"
                className="flex gap-5 border-2 pb-3 text-xl"
              >
                Explore Page
                <img src={Arrow} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
