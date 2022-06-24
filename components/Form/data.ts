import { IRole } from "../../common/interfaces";

export const roles: IRole[] = [
  {
    id: 1,
    value: "Dev",
    name: "Student",
  },
  {
    id: 2,
    value: "Market",
    name: "Teacher",
  },
  {
    id: 3,
    value: "UI",
    name: "Student",
  },
];

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
