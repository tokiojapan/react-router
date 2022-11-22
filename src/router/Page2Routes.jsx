import { Page2 } from "../Page2";
import { Page2DetailA } from "../Page2DetailA";
import { Page2DetailB } from "../Page2DetailB";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page2DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page2DetailB />
  }
];
