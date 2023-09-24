import { FC } from "react";
import { IArrivalDetailsProps } from "./type";
import styles from "./ArrivalDetails.module.scss";
import { getDayOfWeek } from "../../utils/getDayOfWeek";
import { formatMonth } from "../../utils/formatMonth";

const ArrivalDetails: FC<IArrivalDetailsProps> = ({
  arrival_date,
  arrival_time,
  destination,
  destination_name,
  textAlignRight,
}) => {
  return (
    <div
      className={`${styles.container} ${textAlignRight && styles.isRightAlign}`}
    >
      <h3 className={styles.time}>{arrival_time}</h3>
      <p className={styles.destination}>
        {destination}, {destination_name}
      </p>
      <p className={styles.date}>
        {formatMonth(arrival_date)}, {getDayOfWeek(arrival_date)}
      </p>
    </div>
  );
};

export default ArrivalDetails;
