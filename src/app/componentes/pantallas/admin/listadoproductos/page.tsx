"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { ProductoArray } from "@/app/data/dataPrueba";
import Link from "next/link";

const ListaProductos = () => {
  const miArray = ProductoArray;

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-4xl font-bold">PRODUCTOS</h1>
        </div>
        <div className="text-right">
          <Link href={"./agregarproducto"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <Icon icon="bi:plus-circle" className="mr-2" />
              AGREGAR PRODUCTO
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                NOMBRE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                PRECIO
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                MARCA
              </th>

              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Editar</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {miArray.map((data) => (
              <tr key={data.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{data.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{data.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{data.precio}</td>
                <td className="px-6 py-4 whitespace-nowrap">{data.marca}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Icon icon="bi:pencil" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Icon icon="bi:trash" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaProductos;
