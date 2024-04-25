"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({ email: "", password: "" });

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="grid place-items-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto my-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-center text-xl text-blue-500 mb-4">
              Ingrese sus usuario
            </h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={user.email ?? ""}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={user.password ?? ""}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={async () => {
                    const cambio = await axios.post(
                      "https://backend-ecomer.onrender.com/login",
                      {
                        ...user,
                      }
                    );

                    if (cambio.status === 200) {
                      localStorage.setItem("Token", cambio.data.token);
                      router.push("/");
                    }
                  }}
                >
                  INGRESAR
                </button>
              </div>
            </form>
            <p className="text-center text-sm mt-4">
              ¿No tienes cuenta?{" "}
              <a href="/register" className="text-blue-500">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
