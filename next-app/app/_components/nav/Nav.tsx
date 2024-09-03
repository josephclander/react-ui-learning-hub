"use client";

import Link from "next/link";
import Logo from "../../_assets/Logo";
import styles from "./Nav.module.css";
import Modal from "../modal/Modal";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useState } from "react";

const Nav = () => {
  const [showMenu, toggleShowMenu] = useState(false);

  const toggleMenu = () => {
    toggleShowMenu((prevState) => !prevState);
  };

  return (
    <nav className={styles.nav}>
      <Link className={styles.Nav__Link} href="/">
        <Logo width={"40px"} />
        <div className={styles.brandName}>React UI Learning Hub</div>
      </Link>
      <BurgerMenu toggleMenu={toggleMenu} />
      <Modal show={showMenu} />
    </nav>
  );
};

export default Nav;
