import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact us",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <div className="container py-10 flex justify-between items-center">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">HANTA Elearning</h1>
        </div>

        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            {/* Cart button */}
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FiShoppingCart className="text-xl" />
            </button>
            <button className="primary-btn">Sign in</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </div>

      {/* <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>
          <ul className="flex space-x-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path ? menu.path : menu.link}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <button className="btn">Get Started</button>
          </div>
          <div className="md:hidden block">
            <button className="btn">
              <IoMdMenu />
            </button>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
