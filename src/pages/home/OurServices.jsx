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
      info: "Learning curve network effects return on investment.",
    },
    {
      id: "2",
      image: Demo2,
      title: "Even cooler feature",
      info: "Learning curve network effects return on investment.",
    },
    {
      id: "3",
      image: Demo3,
      title: "Cool feature title",
      info: "Learning curve network effects return on investment.",
    },
  ];
  return (
    <div className="px-36 max-sm:px-10">
      <div className="py-24 max-sm:py-12">
        <div className="text-center">
          <p className="text-2xl max-sm:text-xl">Our Services</p>
          <p className="text-5xl mt-5 leading-normal max-sm:text-4xl">
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          {ribbons.map((ribbon) => (
            <div key={ribbon.id} className="mt-16 max-w-[30%] font-openSans max-sm:max-w-full max-sm:flex max-sm:flex-col max-sm:text-center">
              <img src={ribbon.image} alt="" />
              <p className="text-2xl my-5 max-sm:text-xl">{ribbon.title}</p>
              <p className="text-xl leading-normal mb-10 max-sm:text-lg">{ribbon.info}</p>
              <button
                type="button"
                className="flex gap-5 border-2 pb-3 text-xl max-sm:text-base max-sm:w-fit"
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
