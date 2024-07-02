const Numbers = () => {
  const info = [
    {
      id: "1",
      head: "120m",
      title: "Cool feature title",
    },
    {
      id: "2",
      head: "10.000",
      title: "Cool feature title",
    },
    {
      id: "3",
      head: "240",
      title: "Cool feature title",
    },
  ];
  return (
    <div className="px-10 bg-darkBlue">
      <div className="py-40 text-offWhite text-center px-40 leading-normal">
        <p className="text-base">Our numbers</p>
        <p className="text-6xl text-white my-10">
          Handshake infographic mass market crowdfunding iteration.
        </p>
        <div className="flex justify-between mt-20">
          {info.map((prop) => (
            <div key={prop.id} className="text-left">
              <p className="text-greenish text-8xl">{prop.head}</p>
              <p className="text-base text-offWhite mt-6">{prop.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
