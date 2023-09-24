import { FC } from "react";
import { ICustomTitleProps } from "./type";
import styles from "./CustomTitle.module.scss";

const CustomTitle: FC<ICustomTitleProps> = ({
  title,
  marginBot,
  marginTop,
}) => {
  return (
    <h3
      style={{ marginBottom: marginBot, marginTop: marginTop }}
      className={`${styles.title} ${marginBot} ${marginTop}`}
    >
      {title.toUpperCase()}
    </h3>
  );
};

export default CustomTitle;
