import { ReactNode } from "react";

export enum AVAILABLE_CARRIERS {
  TK = "TK",
  S7 = "S7",
  BA = "BA",
  SU = "SU",
}

export type ICarriersIcons = {
  [key in AVAILABLE_CARRIERS]: ReactNode;
};
