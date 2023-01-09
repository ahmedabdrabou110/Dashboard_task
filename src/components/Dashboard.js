import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./sidebar/Sidebar";
const Dashboard = () => {
  return (
    <div className={styles.dashboard_container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className="home_container"></div>
    </div>
  );
};

export default Dashboard;
