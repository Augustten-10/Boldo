import Demo1 from "../../assets/demo.svg";
import Demo2 from "../../assets/demo2.svg";
import Demo3 from "../../assets/demo3.svg";
import Bing from "../../assets/bing.svg";
import Rachel from "../../assets/rachel.svg";
import Monica from "../../assets/monica.svg";

const Blog = () => {
  const ribbons = [
    {
      id: "1",
      image: Demo1,
      Category: "Category",
      Date: "November 22, 2021",
      info: "Pitch termsheet backing validation focus release.",
      pfp: Bing,
      name: "Chandler Bing",
    },
    {
      id: "2",
      image: Demo2,
      Category: "Category",
      Date: "November 22, 2021",
      info: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      pfp: Rachel,
      name: "Rachel Green",
    },
    {
      id: "3",
      image: Demo3,
      Category: "Category",
      Date: "November 22, 2021",
      info: "Beta prototype sales iPad gen-z marketing network effects value proposition",
      pfp: Monica,
      name: "Monica Geller",
    },
  ];
  return (
    <div className="px-36">
      <div className="py-24">
        <div className="text-center">
          <p className="text-2xl">Our Blog</p>
          <p className="text-5xl leading-normal">
            Value proposition accelerator product management venture
          </p>
        </div>
        <div className="flex justify-between">
          {ribbons.map((ribbon) => (
            <div key={ribbon.id} className="mt-16 max-w-[30%] font-openSans">
              <img src={ribbon.image} alt="" />
              <div className="flex gap-5 mt-7">
                <p className="font-bold text-darkBlue text-base">
                  {ribbon.Category}
                </p>
                <p className="text-greyish">{ribbon.Date}</p>
              </div>
              <p className="text-xl leading-normal mt-7">{ribbon.info}</p>
              <div className="mt-16 flex gap-7 text-base items-center">
                <img src={ribbon.pfp} alt="Profile Image" />
                <p>{ribbon.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <button>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
