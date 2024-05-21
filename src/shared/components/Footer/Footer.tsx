import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thickBorder}></div>
      <div className={styles.thinBorder}></div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.footerItem}>
            <strong className={styles.logo}>JUMP</strong>
            <span>195 Broadway, 8th Floor</span>
            <span>New York, NY, 10007</span>
          </div>
          <div className={styles.footerItem}>
            <strong>Our Approach</strong>
            <strong>Blog</strong>
            <strong>About Us</strong>
          </div>
          <div className={styles.footerItem}>
            <strong>Success Stories</strong>
            <strong>Careers</strong>
            <strong>Contact Us</strong>
          </div>
          <div className={styles.footerItem}>
            <strong>Get in touch with us!</strong>
            <span>hellow@jump450.com</span>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
