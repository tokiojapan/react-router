import { Page3 } from "../Page3";
import { UrlParameter } from "../UrlParameter";

export const page3Routes = [
  {
    path: "/",
    exact: true,
    children: <Page3 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
