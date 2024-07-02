import Demo1 from "../../assets/Leader1.png"
import Demo2 from "../../assets/Leader2.png"
import Demo3 from "../../assets/Leader3.png"

const Leadership = () => {
    const ribbons = [
      {
        id: "1",
        image: Demo1,
        name: "Michael Scott",
        role: "General Manager",
      },
      {
        id: "2",
        image: Demo2,
        name: "Dwight Schrute",
        role: "General Manager",
      },
      {
        id: "3",
        image: Demo3,
        name: "Pam Beetsley",
        role: "General Manager",
      },
    ];
  return (
    <div className="px-40 py-40">
      <div className=" text-darkBlue px-40 leading-normal">
        <p className="text-base">Our team</p>
        <p className="text-6xl text-black my-10">The leadership team</p>
        <p className="text-base">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>
      <div className="flex justify-between">
        {ribbons.map((ribbon) => (
          <div key={ribbon.id} className="mt-16 max-w-[30%] font-openSans">
            <img src={ribbon.image} alt="" />
            <p className="text-2xl my-5">{ribbon.name}</p>
            <p className="text-xl leading-normal mb-10">{ribbon.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leadership