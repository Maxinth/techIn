import { IRole } from "../../common/interfaces";

export const roles: IRole[] = [
  {
    id: 1,
    value: "Dev",
    name: "Developer",
  },
  {
    id: 2,
    value: "Market",
    name: "Senior Marketer",
  },
  {
    id: 3,
    value: "UI",
    name: "Product Designer",
  },
];

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
