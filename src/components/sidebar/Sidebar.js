import React from "react";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import TopLinks from "./TopLinks";
import BottomLinks from "./BottomLinks";
const Sidebar = () => {
  return (
    <div className={styles.content_container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.sidebar_links}>
          <TopLinks />
        </div>
        <div className={styles.bottomContent}>
          <BottomLinks />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
