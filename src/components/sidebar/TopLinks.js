import React from "react";
import { topLinks } from "../../utils";
import SidebarLink from "./SidebarLink";
import styles from "./TopLinks.module.css";
const TopLinks = () => {
  return (
    <div className={styles.topLinks_container}>
      {topLinks.map((element) => (
        <SidebarLink name={element.name} key={element.id} icon={element.icon} />
      ))}
    </div>
  );
};

export default TopLinks;
