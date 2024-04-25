"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MenuCliente = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className="text-white relative p-10">
        <div className="flex items-center text-white">
          <Link href="/componentes/pantallas/carritocompra" className="flex">
            <div className="pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            PEDIDOS
          </Link>
        </div>
      </button>
      <div className="relative">
        <button className="text-white" onClick={toggleMenu}>
          <div className="flex items-center text-white">
            <Image
              src="/login.svg"
              width={15}
              height={15}
              alt="menu"
              className="w-8 h-8 rounded-full mr-2"
            />
            John Peralta
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
            <ul>
              <li>
                <Link
                  href="/perfil"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                  onClick={toggleMenu}
                >
                  Mi Perfil
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                  onClick={toggleMenu}
                >
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuCliente;
