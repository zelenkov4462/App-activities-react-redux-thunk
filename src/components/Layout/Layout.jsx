import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../UI/CustomLink/CustomLink";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <header className={styles.navbar}>
        <h1>Добро пожаловать за вашей активностью</h1>
        <div className={styles.navbarContent}>
          <CustomLink to="/random">Random</CustomLink>
          <CustomLink to="/relaxation">Relaxation</CustomLink>
          <CustomLink to="/education">Education</CustomLink>
          <CustomLink to="/social">Social</CustomLink>
          <CustomLink to="/charity">Charity</CustomLink>
          <CustomLink to="/favorite">Favorite</CustomLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
