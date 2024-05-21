import { PropsWithChildren } from "react";
import styles from "./GradientButton.module.scss";

const GradientButton = ({ children }: PropsWithChildren) => {
  return <button className={styles.button}>{children}</button>;
};

export default GradientButton;
