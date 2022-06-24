import { IRole } from "../../common/interfaces";
import { ToastPosition } from "react-toastify";
import { toast } from "react-toastify";
import Router from "next/router";
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
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const showToast = (
  id: "success" | "error",
  msg: string,
  navigate?: boolean,
  path?: string
) => {
  toast[`${id}`](msg, toastOptions);
  // if navigate is supplied, move to path supplied
  if (navigate) {
    return setTimeout(() => {
      console.log("setTimeout");
      Router.push(`/${path}`);
    }, 3000);
  }
  // else just show toast and do nothing.
  return null;
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
