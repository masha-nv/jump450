import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import styles from "./Header.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>jump</h1>
      <ul>
        <li>Our Approach</li>
        <li>Success Stories</li>
        <li>Blog</li>
        <li>Careers</li>
        <PrimaryButton>GROW WITH US</PrimaryButton>
      </ul>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Header;
