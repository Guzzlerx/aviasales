import { FC, useEffect, useMemo, useState } from "react";
import styles from "./TicketsListPage.module.scss";
import { CurrencyType, ITicketsData, StopValueType } from "./type";
import TicketsListPageContent from "./TicketsListPageContent/TicketsListPageContent";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getStopsNumbers } from "./utils/getStopsNumbers";
import mainLogo from "../../assets/icons/aviasales-logo.svg";
import getTicketsRequest from "../../api/tickets/getTicketsRequest";

const TicketsListPage: FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("rub");
  const [selectedStops, setSelectedStops] = useState<StopValueType[]>([]);
  const [tickets, setTickets] = useState<ITicketsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getTickets = (): void => {
    getTicketsRequest()
      .then((data) => {
        setTickets(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error.message);
          setIsLoading(false);
        }
      });
  };

  const sortedTickets = useMemo(() => {
    if (tickets) {
      return [...tickets.tickets]?.sort((a, b) => a.price - b.price);
    } else {
      return [];
    }
  }, [tickets]);

  const sortedAndFilteredTickets = useMemo(() => {
    if (selectedStops.length > 0) {
      return sortedTickets?.filter((ticket) =>
        selectedStops.includes(ticket.stops)
      );
    } else {
      return sortedTickets;
    }
  }, [sortedTickets, selectedStops]);

  const onCurrencyChangeHandler = (value: string) => {
    setSelectedCurrency(value as CurrencyType);
  };

  const selectAllStops = () =>
    setSelectedStops([...getStopsNumbers(tickets?.tickets)]);

  const clearAllStops = () => setSelectedStops([]);

  const toggleSelectedStop = (value: StopValueType) => {
    if (selectedStops.includes(value)) {
      setSelectedStops((state) => state.filter((el) => el !== value));
    } else {
      setSelectedStops((state) => [...state, value]);
    }
  };

  const onStopsSelectHandler = (value: StopValueType) => {
    if (value === "all") {
      selectedStops.length === getStopsNumbers(tickets?.tickets).length
        ? clearAllStops()
        : selectAllStops();
    } else {
      toggleSelectedStop(value);
    }
  };

  const onOnlyOneStopSelectHandler = (value: StopValueType) => {
    setSelectedStops((state) => state.filter((el) => el === value));
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <img src={mainLogo} alt="aviasales logo" />
      <div className={styles.content}>
        {!!sortedTickets.length && (
          <Sidebar
            stopsNumbers={getStopsNumbers(tickets?.tickets)}
            selectedStops={selectedStops}
            currency={selectedCurrency}
            onCurrencyChangeHandler={onCurrencyChangeHandler}
            onStopsChangeHandler={onStopsSelectHandler}
            onOnlyOneStopChangeHandler={onOnlyOneStopSelectHandler}
          />
        )}
        <TicketsListPageContent
          error={error}
          isLoading={isLoading}
          currency={selectedCurrency}
          data={sortedAndFilteredTickets}
        />
      </div>
    </div>
  );
};

export default TicketsListPage;
