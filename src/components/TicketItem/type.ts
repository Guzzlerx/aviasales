import { CurrencyType, ITicketInfo } from "../../routes/TicketsListPage/type";

export interface ITicketItemProps extends ITicketInfo {
  currency: CurrencyType;
}
