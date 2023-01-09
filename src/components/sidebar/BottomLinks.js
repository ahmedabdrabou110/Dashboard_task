import React from "react";
import styles from "./TopLinks.module.css";
import { bottomLinks } from "../../utils/index";
import SidebarLink from "./SidebarLink";
const BottomLinks = () => {
  return (
    <div className={styles.sidebarLink_container}>
      {bottomLinks.map((element) => (
        <SidebarLink key={element.id} name={element.name} icon={element.icon} />
      ))}
    </div>
  );
};

export default BottomLinks;
