import { FC } from "react";
import { IFilterButtonsListProps } from "./type";
import FilterButton from "../UI/FilterButton/FilterButton";
import styles from "./FilterButtonsList.module.scss";

const FilterButtonsList: FC<IFilterButtonsListProps> = ({
  values,
  onClickHandler,
  activeFilter,
}) => {
  return (
    <div className={styles.container}>
      {values.map((el, id) => (
        <FilterButton
          key={id}
          activeFilter={activeFilter}
          value={el}
          onClickHandler={onClickHandler}
        />
      ))}
    </div>
  );
};

export default FilterButtonsList;
