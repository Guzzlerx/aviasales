import { FC } from "react";
import { ITicketsListPageContent } from "./type";
import TicketsList from "../../../components/TicketsList/TicketsList";

const TicketsListPageContent: FC<ITicketsListPageContent> = ({
  currency,
  data,
  isLoading,
  error,
}) => {
  switch (true) {
    case !!error:
      return <h3>Ошибка загрузки данных</h3>;
    case isLoading:
      return <h3>Загрузка...</h3>;
    case data.length > 0:
      return <TicketsList data={data} currency={currency} />;
    default:
      return null;
  }
};

export default TicketsListPageContent;
