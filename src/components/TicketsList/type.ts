import { CurrencyType, ITicketInfo } from "../../routes/TicketsListPage/type";

export interface ITcketsListProps {
  data: ITicketInfo[];
  currency: CurrencyType;
}
