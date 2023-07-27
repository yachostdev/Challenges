import burguerMenu from '../assets/images/icon-menu.svg'

export const Navbar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-lg w-[438px] sm:place-content-around sm:text-base sm:items-center">
      <li className="">
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">New</a>
      </li>
      <li>
        <a href="#">Popular</a>
      </li>
      <li>
        <a href="#">Trending</a>
      </li>
      <li>
        <a href="#">Categories</a>
      </li>
    </ul>
    <img src={burguerMenu} alt="Menu" className='w-10 h-4 cursor-pointer sm:hidden'/>
    </>
  );
};
