"use client";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

interface Menu {
  id: number;
  src: string;
  text: string;
}

const menuItems: Menu[] = [
  { id: 1, src: "#", text: "Home" },
  { id: 2, src: "#", text: "About" },
  { id: 3, src: "#", text: "Services" },
  { id: 4, src: "#", text: "Blog" },
  { id: 5, src: "#", text: "Contact" },
];

const NavBar = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <nav>
      <Menu>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-8 py-2 max-w-md w-full">
              <Link href="#" className="py-[10px] font-semibold text-xl">
                Tech<span className="text-[#6C55F9]">Gram</span>
              </Link>
            </div>

            <div className="hidden lg:flex gap-5">
              <ul className="hidden lg:flex justify-between gap-4 py-2">
                {menuItems.map((menu) => (
                  <li
                    key={menu.id}
                    className={`font-medium ${
                      menu.id === 1 ? "text-[#6c55f9]" : "text-[#645f88bf]"
                    } hover:opacity-70`}
                  >
                    <Link href={menu.src} className="w-full">
                      {menu.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className="bg-[#6c55f9] text-[#fff] py-2 px-6 rounded focus:bg-[#645f88]"
              >
                Free Analytics
              </Link>
            </div>

            <Menu.Button
              onClick={() => setIsShowing((isShowing) => !isShowing)}
              className="border border-[#e5e5e5] border-solid rounded lg:hidden py-2 px-4"
            >
              <MenuIcon className="text-[#7f7f7f]" />
            </Menu.Button>
          </div>

          <Transition
            show={isShowing}
            enter="transition-all ease-in-out duration-500"
            enterFrom="max-h-0"
            enterTo="max-h-[500px]"
            leave="transition-all ease-in-out duration-500"
            leaveFrom="max-h-[500px]"
            leaveTo="max-h-0"
            className="relative -z-10 border-t border-[#e4e7ee] lg:hidden"
            //   className="fixed inset-x-0 flex justify-center"
          >
            <div className="py-3">
              <ul className="flex flex-col gap-4 py-2 max-w-md">
                {menuItems.map((menu) => (
                  <li
                    key={menu.id}
                    className={`font-medium ${
                      menu.id === 1 ? "text-[#6c55f9]" : "text-[#645f88bf]"
                    }`}
                  >
                    <Link href={menu.src} className="w-full">
                      {menu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#"
              className="bg-[#6c55f9] text-[#fff] py-2 px-6 rounded focus:bg-[#645f88]"
            >
              Free Analytics
            </Link>
          </Transition>
        </div>
      </Menu>
    </nav>
  );
};

export default NavBar;
