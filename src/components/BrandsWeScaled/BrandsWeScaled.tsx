import styles from "./BrandsWeScaled.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

type Props = {
  brands: ReactNode[];
};

const BrandsWeScaled = ({ brands }: Props) => {
  return (
    <div className={styles.container}>
      <h3>Brands we've Hyper-Scaled:</h3>
      <div className={styles.brands}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.nav} />
        {brands.map((b, i) => (
          <span className={styles.icon} key={i}>
            {b}
          </span>
        ))}
        <FontAwesomeIcon icon={faChevronRight} className={styles.nav} />
      </div>
    </div>
  );
};

export default BrandsWeScaled;
