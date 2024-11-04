import { Outlet } from "react-router-dom";

import styles from "../styles/layout.module.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function SharedLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SharedLayout;
