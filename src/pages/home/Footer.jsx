import { Logo } from "../../icons/icon";

const Footer = () => {
  const tables = [
    {
      id: "ddws",
      head: "Landings",
      item1: "Home",
      item2: "Product",
      item3: "Services",
    },
    {
      id: "kgf",
      head: "Company",
      item1: "Home",
      item2: "Career",
      item3: "Services",
    },
    {
      id: "aksuij",
      head: "Resources",
      item1: "Blog",
      item2: "Product",
      item3: "Services",
    },
  ];
  return (
    <div className="px-24 py-10 max-sm:px-10">
      <div className="flex justify-between px-24 max-sm:flex-col max-sm:px-0">
        <div className="leading-normal w-1/4 max-sm:w-full">
          <div className="w-[163px] max-sm:w-[90px]">
            <Logo textColor="#0A2640" svgColor="#0A2640" />
          </div>
          <p className="font-openSans mt-16 max-sm:mt-8">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="font-openSans mt-10 max-sm:mt-5">
            All rights reserved.
          </p>
        </div>
        <div className="flex gap-24 max-sm:flex-col max-sm:mt-10 max-sm:gap-10">
          {tables.map((table) => (
            <div
              key={table.id}
              className="flex flex-col gap-7 text-xl leading-normal text-greyish max-sm:text-base max-sm:gap-3"
            >
              <p className="font-openSans font-bold text-black">{table.head}</p>
              <p className="font-openSans ">{table.item1}</p>
              <p className="font-openSans ">{table.item2}</p>
              <p className="font-openSans ">{table.item3}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
