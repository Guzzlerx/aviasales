import { FC, useMemo, useState } from "react";
import styles from "./TicketsListPage.module.scss";
import { CurrencyType, ITicketsData, StopValueType } from "./type";
import { useFetch } from "../../hooks/useFetch/useFetch";
import TicketsListPageContent from "./TicketsListPageContent/TicketsListPageContent";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getStopsNumbers } from "./utils/getStopsNumbers";
import mainLogo from "../../assets/icons/aviasales-logo.svg";

const TicketsListPage: FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("rub");
  const [selectedStops, setSelectedStops] = useState<StopValueType[]>([]);

  const {
    data: availableTickets,
    error,
    isLoading,
  } = useFetch<ITicketsData>("tickets.json");

  const sortedTickets = useMemo(() => {
    if (availableTickets) {
      return [...availableTickets.tickets]?.sort((a, b) => a.price - b.price);
    } else {
      return [];
    }
  }, [availableTickets]);

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
    setSelectedStops([...getStopsNumbers(availableTickets?.tickets)]);

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
      selectedStops.length === getStopsNumbers(availableTickets?.tickets).length
        ? clearAllStops()
        : selectAllStops();
    } else {
      toggleSelectedStop(value);
    }
  };

  const onOnlyOneStopSelectHandler = (value: StopValueType) => {
    setSelectedStops((state) => state.filter((el) => el === value));
  };

  return (
    <div className={styles.pageContainer}>
      <img src={mainLogo} alt="aviasales logo" />
      <div className={styles.content}>
        <Sidebar
          stopsNumbers={getStopsNumbers(availableTickets?.tickets)}
          selectedStops={selectedStops}
          currency={selectedCurrency}
          onCurrencyChangeHandler={onCurrencyChangeHandler}
          onStopsChangeHandler={onStopsSelectHandler}
          onOnlyOneStopChangeHandler={onOnlyOneStopSelectHandler}
        />
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
