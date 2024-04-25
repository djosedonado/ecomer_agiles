"use client";
import MenuCliente from "./cliente/page";
import MenuAdmin from "./menuAdmin/page";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navegacion() {
  const [open, setOpen] = useState(false);

  const openToggle = () => {
    setOpen(true);
  };

  const closeToggle = () => {
    setOpen(false);
  };

  return (
    <header className="bg-blue-800 ">
      <nav>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex-grow flex md:hidden">
              <button className="text-white" onClick={openToggle}>
                <Image
                  src="/menu.svg"
                  alt="Menu"
                  width={34}
                  height={24}
                  className="mr-3"
                />
              </button>
              <div className="w-250">
                {open && (
                  <div className="absolute top-0 right-0 mt-8">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <ul>
                        <li className="cursor-pointer" onClick={closeToggle}>
                          <Link
                            href="/login"
                            className="flex items-center space-x-2 p-0"
                          >
                            <Image
                              src="/login.svg"
                              alt="Login Icon"
                              width={24}
                              height={24}
                              className="mr-3"
                            />
                            <span className="text-gray-800 font-semibold p-0">
                              Login
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <Link
                href="/"
                className="flex items-center text-white no-underline"
              >
                <Image
                  src="/tienda.svg"
                  alt="Tienda Icon"
                  width={34}
                  height={24}
                  className="mr-3"
                />
                <h5 className="text-white text-xl font-bold inline">
                  TIENDA DE COMPRA
                </h5>
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              {/*<button>
                <Link
                  href="/login"
                  className="inline-flex items-center px-4 py-2 text-inherit no-underline"
                >
                  <Image
                    src="/login.svg"
                    alt="Login Icon"
                    width={24}
                    height={24}
                    className="mr-3"
                  />
                  <span className="text-white">LOGIN</span>
                </Link>
              </button>*/}
              <MenuCliente />
              <MenuAdmin />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
