"use client";
import React from "react";
import { Logo } from "../atoms";
import { navMenu } from "@/models/navmenu";
import Link from "next/link";

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
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
            ? "opacity-100 bg-[#100b0a] shadow-[#100b0a] shadow-sm "
            : "opacity-0"
        } fixed w-full top-0 transition-all z-[10]`}
      >
        <div className="container mx-auto py-5 px-10 flex justify-between items-center">
          <Logo />
          <div className="flex gap-5 items-center">
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
