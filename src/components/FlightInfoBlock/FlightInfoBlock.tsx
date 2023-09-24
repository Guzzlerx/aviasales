import { FC } from "react";
import { IFlightInfo } from "./type";
import ArrivalDetails from "../ArrivalDetails/ArrivalDetails";
import styles from "./FlightInfoBlock.module.scss";
import StopsAmountInfo from "../StopsAmountInfo/StopsAmountInfo";

const FlightInfoBlock: FC<IFlightInfo> = ({
  arrival_date,
  arrival_time,
  departure_date,
  departure_time,
  destination,
  destination_name,
  origin,
  origin_name,
  stops,
}) => {
  return (
    <div className={styles.container}>
      <ArrivalDetails
        arrival_date={departure_date}
        arrival_time={departure_time}
        destination={origin}
        destination_name={origin_name}
      />
      <StopsAmountInfo stops={stops} />
      <ArrivalDetails
        textAlignRight
        arrival_date={arrival_date}
        arrival_time={arrival_time}
        destination={destination}
        destination_name={destination_name}
      />
    </div>
  );
};

export default FlightInfoBlock;
