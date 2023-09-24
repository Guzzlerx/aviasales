import { FC } from "react";
import { ITcketsListProps } from "./type";
import TicketItem from "../TicketItem/TicketItem";
import styles from "./TicketsList.module.scss";

const TicketsList: FC<ITcketsListProps> = ({ data, currency }) => {
  return (
    <div className={styles.container}>
      {data.map((el, id) => (
        <TicketItem {...el} currency={currency} key={id} />
      ))}
    </div>
  );
};

export default TicketsList;
