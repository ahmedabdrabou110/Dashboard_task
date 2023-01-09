import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SidebarLink.module.css";
const SideLinkStyle = ({ isActive }) => {
  return {
    backgroundColor: isActive ? "#F3F5F8" : "#fff",
  };
};
const SidebarLink = (props) => {
  return (
    <div className={styles.sidebarLink_content}>
      <NavLink style={SideLinkStyle} to={`/${props.name}`}>
        <img src={props.icon} alt={props.name} />
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default SidebarLink;
