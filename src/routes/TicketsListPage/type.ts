import { AVAILABLE_CARRIERS } from "../../constants/carriers/type";
import { AVAILABLE_CURRENCY } from "../../constants/currency";

export interface ITicketInfo {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: keyof typeof AVAILABLE_CARRIERS;
  stops: number;
  price: number;
}

export interface ITicketsData {
  tickets: ITicketInfo[];
}

export type CurrencyType = keyof typeof AVAILABLE_CURRENCY;

export type StopValueType = string | number;
