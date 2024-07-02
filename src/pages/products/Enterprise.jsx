import Left from "../../assets/left.svg";
import Right from "../../assets/right.svg";
import Alfus from "../../assets/alfus.svg";
import Snape from "../../assets/snape.svg";
import Harry from "../../assets/harry.svg";

const Enterprise = () => {
  const cards = [
    {
      id: "hdjacbmwh",
      quote:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      pfp: Alfus,
      name: "Albus Dumbledore",
      role: "Manager @ Howarts",
    },
    {
      id: "hdjamwh",
      quote:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      pfp: Snape,
      name: "Severus Snape",
      role: "Manager @ Slytherin",
    },
    {
      id: "hdacbmwh",
      quote:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      pfp: Harry,
      name: "Harry Potter",
      role: "Team Leader @ Gryffindor",
    },
  ];
  return (
    <div className="px-36 py-24 bg-darkBlue">
      <div className="flex justify-between">
        <p className="text-white text-5xl leading-normal w-3/4">
          An enterprise template to ramp up your company website
        </p>
        <div className="flex gap-5">
          <img src={Left} alt="left" />
          <img src={Right} alt="Right" />
        </div>
      </div>
      <div className="flex gap-8 font-openSans leading-normal mt-16">
        {cards.map((card) => (
          <div key={card.id} className="bg-white max-w-[30%] p-10 rounded-3xl h-max">
            <p className=" text-xl">{card.quote}</p>
            <div className="flex mt-10 gap-5 items-center">
              <img src={card.pfp} alt="Profile Image" />
              <div>
                <p className="font-bold text-base">{card.name}</p>
                <p className=" text-sm">{card.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enterprise;
