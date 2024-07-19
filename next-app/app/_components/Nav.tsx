import Link from "next/link";
import Logo from "../_assets/Logo";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <Link className={styles.Nav__Link} href="/">
        <Logo width={"40px"} />
      </Link>
      <h1 className={styles.Nav__Header}>HOW TO: React UI</h1>
    </nav>
  );
};

export default Nav;
