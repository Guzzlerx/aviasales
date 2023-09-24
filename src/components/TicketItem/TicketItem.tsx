import { FC } from "react";
import FlightInfoBlock from "../FlightInfoBlock/FlightInfoBlock";
import styles from "./TicketItem.module.scss";
import { CARRIERS_ICONS } from "../../constants/carriers/carriers";
import ButtonSubmit from "../UI/ButtonSubmit/ButtonSubmit";
import { AVAILABLE_CURRENCY } from "../../constants/currency";
import { ITicketItemProps } from "./type";
import { exchangePriceCurrency } from "../../utils/exchangePriceCurrency";

const TicketItem: FC<ITicketItemProps> = ({
  carrier,
  price,
  currency,
  ...restProps
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sideContainer}>
        {CARRIERS_ICONS[carrier]}
        <ButtonSubmit
          title={`Купить за \n${exchangePriceCurrency(
            price,
            currency
          ).toLocaleString("RU-ru")} ${AVAILABLE_CURRENCY[currency]}`}
          onSubmitHandler={() => {
            /* any logic */
          }}
        />
      </div>
      <FlightInfoBlock {...restProps} />
    </div>
  );
};

export default TicketItem;
