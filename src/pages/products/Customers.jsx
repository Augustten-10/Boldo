import Workspace from "../../assets/workspace.svg";
import Dropdown from "../../assets/dropdown.svg";


const Customers = () => {
  const lists = [
    {
      id: "hejbhbha",
      info: "We connect our customers with the best?",
    },
    {
      id: "hejbha",
      info: "Android research & development rockstar?",
    },
  ];
  return (
    <div className="px-36">
      <div className="py-24">
        <img src={Workspace} alt="Workspace" />
        <div className="flex justify-between mt-16">
          <p className="text-4xl leading-normal w-[45%]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div className="w-[45%] font-openSans leading-normal flex flex-col gap-10">
            {lists.map((list) => (
              <div key={list.id} className="border-b-4 flex justify-between pb-5">
                <p className="text-xl">{list.info}</p>
                <img src={Dropdown} alt="Dropdown menu" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
