"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProcesoCompra = () => {
  const [activeStep, setActiveStep] = useState(1);
  const router = useRouter();

  const continuarProceso = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const retrocederProceso = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const realizarPedido = () => {
    const idCompra = "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed";
    router.push("/ordenCompra/" + idCompra);
  };

  return (
    <div className="container mt-8">
      <div className="flex justify-center">
        <div className="flex">
          <div className="flex-grow mr-2">
            <h4 className="text-lg font-semibold">CARRITO DE COMPRAS</h4>
            <div className="flex justify-between mt-4 mb-2">
              <div className="w-1/3">
                <button
                  className={`py-2 px-4 rounded-full w-full ${activeStep === 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}
                  onClick={() => setActiveStep(1)}
                >
                  Registrarse
                </button>
              </div>
              <div className="w-1/3">
                <button
                  className={`py-2 px-4 rounded-full w-full ${activeStep === 2 ? "bg-blue-500 text-white" : activeStep > 2 ? "bg-blue-500 text-white cursor-not-allowed" : "bg-gray-300 text-gray-500"}`}
                  onClick={() => setActiveStep(2)}
                  disabled={activeStep < 2}
                >
                  Envío
                </button>
              </div>
              <div className="w-1/3">
                <button
                  className={`py-2 px-4 rounded-full w-full ${activeStep === 3 ? "bg-blue-500 text-white" : activeStep > 3 ? "bg-blue-500 text-white cursor-not-allowed" : "bg-gray-300 text-gray-500"}`}
                  onClick={() => setActiveStep(3)}
                  disabled={activeStep < 3}
                >
                  Método de Pago
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeStep === 1 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <h6 className="font-semibold">ENVIO DEL PRODUCTO</h6>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-md py-2 px-4"
                  placeholder="Dirección"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-md py-2 px-4"
                  placeholder="Ciudad"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-md py-2 px-4"
                  placeholder="País"
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                onClick={continuarProceso}
              >
                CONTINUAR
              </button>
            </form>
          </div>
        </div>
      )}

      {activeStep === 2 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <h6 className="font-semibold">METODO DE PAGO</h6>
            <div className="mt-4">
              <div className="mb-4">
                <label className="block mb-2">Seleccione Método</label>
                <div>
                  <input type="radio" className="mr-2" /> PayPal o Tarjeta
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={retrocederProceso}
                >
                  ANTERIOR
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={continuarProceso}
                >
                  CONTINUAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeStep === 3 && (
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="mb-4">
                <h6 className="font-semibold">ENVÍO</h6>
                <p>Dirección: Calle 2, Cali, Colombia</p>
              </div>
              <div className="mb-4">
                <h6 className="font-semibold">MÉTODO DE PAGO</h6>
                <p>Método: PayPal</p>
              </div>
              <div className="mb-4">
                <h6 className="font-semibold">PRODUCTOS</h6>
                <div className="flex items-center mt-2">
                  <img
                    className="w-12 h-12 object-cover rounded-full mr-4"
                    src="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
                    alt="Imagen en Carrito"
                  />
                  <div>
                    <p className="font-semibold">Abrigo Vaxi Moda 2020</p>
                    <p>2 x $25.00 = $50.00</p>
                  </div>
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={retrocederProceso}
              >
                ANTERIOR
              </button>
            </div>
            <div>
              <div className="border border-gray-300 rounded-md p-4">
                <h6 className="font-semibold mb-4">RESUMEN DEL PEDIDO</h6>
                <div className="flex justify-between mb-2">
                  <p>Productos</p>
                  <p>$50.00</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Envío</p>
                  <p>$2.00</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Impuesto</p>
                  <p>$8.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>$60.00</p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                  onClick={realizarPedido}
                >
                  REALIZAR PEDIDO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcesoCompra;
