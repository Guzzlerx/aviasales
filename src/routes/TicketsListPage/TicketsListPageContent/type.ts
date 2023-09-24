import { ITcketsListProps } from "../../../components/TicketsList/type";

export interface ITicketsListPageContent extends ITcketsListProps {
  isLoading: boolean;
  error: unknown;
}
