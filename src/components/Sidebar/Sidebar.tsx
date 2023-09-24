import { FC } from "react";
import CustomTitle from "../UI/CustomTitle/CustomTitle";
import styles from "./Sidebar.module.scss";
import { AVAILABLE_CURRENCY } from "../../constants/currency";
import { ISidebarProps } from "./type";
import FilterButtonsList from "../FilterButtonsList/FilterButtonsList";
import CustomCheckbox from "../UI/CustomCheckbox/CustomCheckbox";

const Sidebar: FC<ISidebarProps> = ({
  onCurrencyChangeHandler,
  onStopsChangeHandler,
  onOnlyOneStopChangeHandler,
  stopsNumbers,
  currency,
  selectedStops,
}) => {
  const isSelectedAllStops = stopsNumbers.length === selectedStops.length;

  return (
    <div className={styles.container}>
      <CustomTitle title="ВАЛЮТА" />
      <FilterButtonsList
        activeFilter={currency}
        onClickHandler={onCurrencyChangeHandler}
        values={Object.keys(AVAILABLE_CURRENCY)}
      />
      <CustomTitle title="КОЛИЧЕСТВО ПЕРЕСАДОК" marginTop={30} marginBot={10} />
      <div className={styles.stopsContainer}>
        <CustomCheckbox
          value="all"
          isSelected={isSelectedAllStops}
          onSelectHandler={onStopsChangeHandler}
          onOnlyOneStopChangeHandler={onOnlyOneStopChangeHandler}
        />
        {stopsNumbers.map((el, id) => (
          <CustomCheckbox
            isSelected={selectedStops.includes(el)}
            key={id}
            value={el}
            onSelectHandler={onStopsChangeHandler}
            onOnlyOneStopChangeHandler={onOnlyOneStopChangeHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
