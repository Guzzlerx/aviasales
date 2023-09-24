import { ITicketInfo } from "../../routes/TicketsListPage/type";

export interface IFlightInfo extends Omit<ITicketInfo, "carrier" | "price"> {}
