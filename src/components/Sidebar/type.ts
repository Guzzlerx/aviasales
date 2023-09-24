import { StopValueType } from "../../routes/TicketsListPage/type";

export interface ISidebarProps {
  currency: string;
  selectedStops: StopValueType[];
  stopsNumbers: number[];
  onCurrencyChangeHandler: (value: string) => void;
  onStopsChangeHandler: (value: StopValueType) => void;
  onOnlyOneStopChangeHandler: (value: StopValueType) => void;
}
