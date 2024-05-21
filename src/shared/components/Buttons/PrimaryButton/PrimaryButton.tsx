import { PropsWithChildren } from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ children }: PropsWithChildren) => {
  return <button className={styles.button}>{children}</button>;
};

export default PrimaryButton;
