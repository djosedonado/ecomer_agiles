import { AxiosError } from "axios";
import { api } from "../api/axios";

export interface LoginResponse {
  id: string;
  email: string;
  lastName: string;
  firstName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

export class AuthService {
  static login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const { data } = await api.post<LoginResponse>("/login", {
        email,
        password,
      });
      console.log(data);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }

      console.log(error);
      throw new Error("Unable to login");
    }
  };

  static Register = async (
    lastName: string,
    firstName: string,
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const { data } = await api.post<LoginResponse>("/users", {
        lastName,
        firstName,
        email,
        password,
      });
      console.log(data);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }

      console.log(error);
      throw new Error("Unable to login");
    }
  };

  static checkStatus = async (): Promise<LoginResponse> => {
    try {
      const { data } = await api.get<LoginResponse>("/verify/status");
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("UnAuthorized");
    }
  };
}
