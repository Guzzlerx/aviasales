import { FC } from "react";
import { IFilterButtonProps } from "./type";
import styles from "./FilterButton.module.scss";

const FilterButton: FC<IFilterButtonProps> = ({
  onClickHandler,
  value,
  activeFilter,
}) => {
  return (
    <button
      className={`${styles.button} ${activeFilter === value && styles.active}`}
      onClick={() => onClickHandler(value)}
    >
      {value}
    </button>
  );
};

export default FilterButton;
