import { FC } from "react";
import styles from "./ButtonSubmit.module.scss";
import { IButtonSubmitProps } from "./type";

const ButtonSubmit: FC<IButtonSubmitProps> = ({ title, onSubmitHandler }) => {
  return (
    <div onClick={onSubmitHandler} className={styles.container}>
      {title}
    </div>
  );
};

export default ButtonSubmit;
