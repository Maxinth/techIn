import { IRole } from "../../common/interfaces";
import { ToastPosition } from "react-toastify";
export interface ToastOptns {
  position: ToastPosition;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  theme: "colored";
}
export const roles: IRole[] = [
  {
    id: 1,
    value: "Dev",
    name: "student",
  },

  {
    id: 2,
    value: "UI",
    name: "Teacher",
  },
];

export const toastOptions: ToastOptns = {
  position: "top-right",
  autoClose: 300000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
