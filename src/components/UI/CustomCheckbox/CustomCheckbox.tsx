import { FC, MouseEvent } from "react";
import { ICustomCheckboxProps } from "./type";
import styles from "./CustomCheckbox.module.scss";
import { formatStops } from "../../../utils/formatStops";

const CustomCheckbox: FC<ICustomCheckboxProps> = ({
  onSelectHandler,
  onOnlyOneStopChangeHandler,
  value,
  isSelected,
}) => {
  const isOnlyButtonShown = isSelected && value !== "all";

  const onOnlyClickHandler = (e: MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    onOnlyOneStopChangeHandler(value);
  };

  let stopsText = formatStops(value);

  if (value === "all") {
    stopsText = "Все";
  } else if (value == 0) {
    stopsText = stopsText[0].toUpperCase() + stopsText.slice(1);
  }

  return (
    <div onClick={() => onSelectHandler(value)} className={styles.container}>
      <input className={styles.checkbox} type="checkbox" checked={isSelected} />
      <label className={styles.label}>
        {isSelected && <span className={styles.activeLabel}>✓</span>}
      </label>
      <div className={styles.textContainer}>
        <p className={styles.title}>{stopsText}</p>
        {isOnlyButtonShown && <span onClick={onOnlyClickHandler}>ТОЛЬКО</span>}
      </div>
    </div>
  );
};

export default CustomCheckbox;
