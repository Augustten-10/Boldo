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
    <div className="px-36 max-sm:px-10">
      <div className="py-24 max-sm:py-10">
        <div className="text-center">
          <p className="text-2xl max-sm:text-xl">Our Blog</p>
          <p className="text-5xl leading-normal max-sm:text-3xl max-sm:mt-6">
            Value proposition accelerator product management venture
          </p>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          {ribbons.map((ribbon) => (
            <div key={ribbon.id} className="mt-16 max-w-[30%] font-openSans max-sm:max-w-full max-sm:flex max-sm:flex-col">
              <img src={ribbon.image} alt="" />
              <div className="flex gap-5 mt-7 max-sm:mt-5">
                <p className="font-bold text-darkBlue text-base">
                  {ribbon.Category}
                </p>
                <p className="text-greyish">{ribbon.Date}</p>
              </div>
              <p className="text-xl leading-normal mt-7 max-sm:text-lg max-sm:mt-5">{ribbon.info}</p>
              <div className="mt-16 flex gap-7 text-base items-center max-sm:mt-5">
                <img src={ribbon.pfp} alt="Profile Image" />
                <p>{ribbon.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20 max-sm:mt-10">
          <button>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;