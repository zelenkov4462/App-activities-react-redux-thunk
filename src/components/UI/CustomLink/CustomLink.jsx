import React from "react";
import { Link, useMatch } from "react-router-dom";
import styles from "./CustomLink.module.scss";
const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={styles.link}
      style={{ color: match ? "red" : "white", cursor: "default" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
