import { FC } from "react";
import { IStopsAmountInfoProps } from "./type";
import styles from "./StopsAmountInfo.module.scss";
import { formatStops } from "../../utils/formatStops";
import stopsLogo from "../../assets/icons/stops_logo.svg";

const StopsAmountInfo: FC<IStopsAmountInfoProps> = ({ stops }) => {
  return (
    <div className={styles.container}>
      <p className={styles.stopsText}>{formatStops(stops).toUpperCase()}</p>
      <img className={styles.stopsLogo} src={stopsLogo} alt="Stops logo" />
    </div>
  );
};

export default StopsAmountInfo;
