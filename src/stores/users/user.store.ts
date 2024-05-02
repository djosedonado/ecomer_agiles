import { create } from "zustand";
import { User } from "../../interfaces/index";
import { AuthService } from "../../services/auth.service";
import Swal from 'sweetalert2';

interface UserState {
  users: User[];
  addData: (data: User) => void;
}

const useUserStore = create<UserState>((set, get) => ({
  users: [],
  addData: (data: User) => {
    try {
      const response = AuthService.Register(
        data.lastName,
        data.firstName,
        data.email,
        data.password
      );
      console.log(response);
      set({
        users: [...get().users, data],
      });
      Swal.fire({
        title: "Registro",
        text: "Registro Exitoso",
        icon: "success"
      });
    } catch (error) {}
  },
}));


export const useUsers = useUserStore; 
