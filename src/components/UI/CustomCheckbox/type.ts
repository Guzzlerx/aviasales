import { StopValueType } from "../../../routes/TicketsListPage/type";

export interface ICustomCheckboxProps {
  value: number | string;
  isSelected: boolean;
  onSelectHandler: (value: StopValueType) => void;
  onOnlyOneStopChangeHandler: (value: StopValueType) => void;
}
