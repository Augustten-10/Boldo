const Template = () => {
  return (
    <div className="px-24 pb-20">
      <div className="bg-darkBlue py-28 px-24">
        <p className="text-5xl leading-normal text-white text-center">An enterprise template to ramp up your company website</p>
        <div className="flex justify-center gap-7 mt-20">
            <input type="email" name="email" id="" placeholder="Your Email Address"/>
            <button type="submit">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Template;
