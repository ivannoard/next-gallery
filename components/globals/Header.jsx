"use client";
import React from "react";
import { Logo } from "../atoms";
import { navMenu } from "@/models/navmenu";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isToggleMenu, setIsToggleMenu] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`${
          scrollPosition > 50
            ? "opacity-100 bg-primary shadow-primary shadow-sm "
            : "opacity-0"
        } fixed w-full top-0 transition-all z-10`}
      >
        <div className="container primary mx-auto py-5 px-3 lg:px-10 flex justify-between items-center">
          <Logo />
          <div className="lg:hidden">
            <CgMenuRight
              className="text-white cursor-pointer"
              size={24}
              onClick={() => setIsToggleMenu(!isToggleMenu)}
            />
            <div
              className={`bg-[#2c2c2c] w-full py-5 fixed top-[63px] right-0 left-0 mx-auto transition-all duration-1000 text-center flex flex-col items-center justify-center gap-3  ${
                isToggleMenu ? "animate-swoosh_from_top_to_bottom" : "hidden"
              }`}
            >
              {navMenu.map((item) => (
                <div key={item.id} className="swipe-effect-item pb-2">
                  <Link
                    href={item.path}
                    onClick={() => setIsToggleMenu(false)}
                    className="text-white w-full block"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex gap-5 items-center">
            {navMenu.map((item) => (
              <div key={item.id} className="swipe-effect-item">
                <Link href={item.path} className="text-white">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
