import { adTypeMap } from "./adTypeMap";
import { AdType } from "./types";
import styles from "./Ad.module.scss";

const Ad = () => {
  return (
    <div className={styles.content}>
      {adTypeMap[AdType.View!]?.heading}
      <div className={styles.helptext}>{adTypeMap[AdType.View!]?.helpText}</div>

      <div className={styles.img}>{adTypeMap[AdType.View!]?.image}</div>
    </div>
  );
};

export default Ad;
