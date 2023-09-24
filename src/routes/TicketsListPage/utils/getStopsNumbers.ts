import { ITicketInfo } from "../type";

export const getStopsNumbers = (tickets: ITicketInfo[] | undefined): number[] =>
  [...new Set(tickets?.map((el) => el.stops).sort())] || [];
