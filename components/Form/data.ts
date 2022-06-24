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
  delay: number;
}
export const roles: IRole[] = [
  {
    id: 1,
    value: "Front-End Developer Student",
    name: "student",
  },

  {
    id: 2,
    value: "Front-End Developer (Teacher)",
    name: "teacher",
  },
  // {
  //   id: 3,
  //   value: "Front-End developer (Student)",
  //   name: "student",
  // },
  // {
  //   id: 4,
  //   value: "Product Designer (Teacher)",
  //   name: "teacher",
  // },
  // {
  //   id: 5,
  //   value: "Backend developer (Teacher)",
  //   name: "teacher",
  // },
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
  delay: 2000,
};

export const showToast = (
  id: "success" | "error" | "info",
  msg: string,
  navigate?: boolean,
  path?: string
) => {
  toast[`${id}`](msg, toastOptions);
  // if navigate is supplied, move to path supplied
  if (navigate) {
    return setTimeout(() => {
      Router.push(`/${path}`);
    }, 2000);
  }
  // else just show toast and do nothing.
  return null;
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
