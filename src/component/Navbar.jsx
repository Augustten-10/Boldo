import { Logo } from "../icons/icon";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center fixed px-24 py-10 bg-darkBlue max-sm:px-10 max-sm:py-6">
      <div>
        <a href="/">
          <Logo textColor="#fff" />
        </a>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-16 text-white">
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <button className="text-base outline-white py-2 px-4">Log in</button>
        </ul>
      </nav>
      <div className="flex flex-col gap-[4px] cursor-pointer lg:hidden">
        <span className="flex w-[20px] h-[4px] bg-white"></span>
        <span className="flex w-[20px] h-[4px] bg-white"></span>
        <span className="flex w-[20px] h-[4px] bg-white"></span>

      </div>
    </header>
  );
};

export default Navbar;
