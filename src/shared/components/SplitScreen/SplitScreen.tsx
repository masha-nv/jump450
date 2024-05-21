import styles from "./SplitScreen.module.scss";

type Props = {
  left: JSX.Element;
  right: JSX.Element;
};

const SplitScreen = ({ left, right }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

export default SplitScreen;
