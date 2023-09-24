export interface IFilterButtonsListProps {
  values: string[];
  activeFilter: string;
  onClickHandler: (value: string) => void;
}
