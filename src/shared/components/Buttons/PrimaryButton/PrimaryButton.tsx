import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./PrimaryButton.module.scss";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
