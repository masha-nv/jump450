import { PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
