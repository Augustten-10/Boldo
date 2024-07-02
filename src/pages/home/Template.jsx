const Template = () => {
  return (
    <div className="px-24 pb-20 max-sm:px-10">
      <div className="bg-darkBlue py-28 px-24 rounded-xl max-sm:px-10 max-sm:py-12">
        <p className="text-5xl leading-normal text-white text-center max-sm:text-3xl">An enterprise template to ramp up your company website</p>
        <div className="flex justify-center gap-7 mt-20 max-sm:mt-10">
            <input type="email" name="email" id="" placeholder="Your Email Address"/>
            <button type="submit">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Template;
