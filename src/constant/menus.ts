import { IMenus } from "@/helpers/interface/IMenus";

const sidebarMenus: IMenus[] = [
  {
    path: "/home",
    icons: require("../assets/menus/Home.svg"),
    name: "Home",
  },
  {
    path: "/",
    icons: require("../assets/menus/Card.svg"),
    name: "Card",
  },
  {
    path: "/payments",
    icons: require("../assets/menus/Payments.svg"),
    name: "Payments",
  },
  {
    path: "/credit",
    icons: require("../assets/menus/Credit.svg"),
    name: "Credit",
  },
  {
    path: "/settings",
    icons: require("../assets/menus/Account.svg"),
    name: "Settings",
  },
];
export default sidebarMenus;
