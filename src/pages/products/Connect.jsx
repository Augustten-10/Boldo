import Connect1 from "../../assets/connect.svg";
import Connect2 from "../../assets/connect2.svg";
import Tick from "../../assets/tick.svg";
import Bullet1 from "../../assets/bullet1.svg";
import Bullet2 from "../../assets/bullet2.svg";
import Bullet3 from "../../assets/bullet3.svg";

const Connect = () => {
  const lists = [
    {
      id: "1egyusdivygu",
      image: Bullet1,
      info: "We connect our customers with the best.",
    },
    {
      id: "wuu9ywegfdyogusfyu1",
      image: Bullet2,
      info: "Advisor success customer launch party.",
    },
    {
      id: "bjgus8euabdhiosavyu1",
      image: Bullet3,
      info: "Business-to-consumer long tail.",
    },
  ];
  return (
    <div className="px-36 py-24">
      <div className="flex justify-between items-center">
        <div className="max-w-[50%]">
          <img src={Connect1} alt="" />
        </div>
        <div className="w-[45%] ">
          <p className="text-4xl leading-normal">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div className="mt-16 flex flex-col gap-5">
            {lists.map((list) => (
              <div key={list.id} className="flex gap-5 items-center">
                <img src={Tick} alt="tick" />
                <p className="text-xl font-openSans font-normal">{list.info}</p>
              </div>
            ))}
          </div>
          <button className="mt-16 text-white bg-darkBlue">Start Now</button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-16">
        <div className="w-[45%] ">
          <p className="text-4xl leading-normal">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div className="mt-10 flex flex-col gap-5">
            {lists.map((list) => (
              <div
                key={list.id}
                className="rounded py-4 pl-4 pr-10 flex gap-5 items-center first-of-type:bg-darkBlue first-of-type:text-white shadow-md"
              >
                <img src={list.image} alt="tick" />
                <p className="text-xl font-openSans font-normal">{list.info}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[50%]">
          <img src={Connect2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
