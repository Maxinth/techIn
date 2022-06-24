import { IRole } from "../../common/interfaces";

export const roles: IRole[] = [
  {
    id: 1,
    value: "Dev",
    name: "student",
  },
  {
    id: 2,
    value: "Market",
    name: "teacher",
  },
  {
    id: 3,
    value: "UI",
    name: "student",
  },
];

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
