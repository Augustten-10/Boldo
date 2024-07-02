import Value1 from "../../assets/Values1.png";
import Value2 from "../../assets/Values2.png";
import Value3 from "../../assets/Values3.png";

const Values = () => {
  const ribbon = [
    {
      id: "1",
      img: Value1,
      head: "We are commited.",
      info: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    },
    {
      id: "2",
      img: Value2,
      head: "We are responsible.",
      info: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    },
    {
      id: "3",
      img: Value3,
      head: "We aim for progress.",
      info: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    },
  ];
  return (
    <div className="px-40 bg-darkBlue">
      <div className="py-40 text-offWhite px-40 leading-normal">
        <p className="text-base">Our values</p>
        <p className="text-6xl text-white my-10">Things in we believe</p>
        <p className="text-base">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
        {ribbon.map((item) => (
          <div key={item.id} className="flex gap-10 mt-10">
            <img src={item.img} alt="demo" />
            <div className="leading-tight">
              <p className="text-2xl ">{item.head}</p>
              <p className="mt-4 font-openSans ">{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
