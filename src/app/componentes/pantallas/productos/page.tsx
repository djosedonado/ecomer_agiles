"use client";
import React from "react";
import { ProductoArray } from "../../../data/dataPrueba";
import { useRouter } from "next/navigation";
import Link from "next/link";

const pantalla = () => {
  const miArray = ProductoArray;

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-gray-700 mb-10">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {miArray.map((data) => (
          <div key={data.id} className="h-64 bg-gray-200 m-4">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
              {/* Imagen */}
              <img
                className="w-full h-40 object-cover"
                src={data.image}
                alt="Producto"
              />
              {/* Precio */}
              <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-2 rounded-bl-lg">
                <span>${data.precio}</span>
              </div>
              <div className="p-4">
                {/* Nombre del producto */}
                <h3 className="font-bold text-gray-600 mb-8">{data.title}</h3>
                {/* Botón "Más detalles" */}
                <Link href={`/componentes/pantallas/productos/${data.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                    Más Detalles
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Agrega más cards aquí si es necesario */}
      </div>
    </div>
  );
};

export default pantalla;
