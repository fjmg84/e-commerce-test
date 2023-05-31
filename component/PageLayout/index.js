import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./styles.module.scss";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

export default PageLayout;
