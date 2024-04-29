"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useAuthStore } from "../../stores/index";

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const loginUser = useAuthStore((state) => state.loginUser);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(user);
      loginUser(user.email, user.password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="grid place-items-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-200 h-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-center text-xl text-blue-500 mb-4">
              Ingrese sus usuario
            </h1>
            <form onSubmit={onSubmit}>
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
                  type="submit"
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
