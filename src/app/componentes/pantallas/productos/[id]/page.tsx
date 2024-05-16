"use client";
import Link from "next/link";

import React from "react";

const DetalleProducto = () => {
  return (
    <div className="container mt-8">
      <h4 className="font-semibold text-gray-700 mb-10">ABRIGO VAXI</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <img
              className="bg-gray-200 w-280 h-80 m-auto"
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1702458113-800_800_F5C3D514CF31D1386743BC5AB8319D35mp.png?crop=1xw:1xh;center,top&resize=980:*"
              alt="Mi Producto"
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <h5 className="text-sm font-semibold text-gray-700">Precio</h5>
              <p className="text-sm font-semibold text-gray-700">$25.99</p>
            </div>
            <div className="p-4">
              <h5 className="text-sm font-semibold text-gray-700">Cantidad</h5>
              <select className="py-1 px-2 border border-gray-300 rounded-md text-sm">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="p-4">
              <Link href={"../carritocompra"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                  Agregar a Carrito
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Precio: $25.99</p>
              <p className="font-semibold">Unidades Disponibles: 15</p>
              <p className="font-semibold">Marca: VAXI</p>
              <p className="font-semibold">Temporada: Invierno</p>
            </div>
            <div>
              <p className="font-semibold">Descripción:</p>
              <p className="font-semibold">
                Abrigo vaxi talla M, de algodon puro, de color Negro con botones
                y cierre, ideal para el invierno, con bolsillos al exterior e
                interior suave al tacto con la piel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
