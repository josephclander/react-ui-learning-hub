import Link from "next/link";
import Logo from "../_assets/Logo";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <Logo width={"100px"} />
      <Link className={styles.Nav__Link} href="/">
        <h1 className={styles.Nav__Header}>
          <i>HOW TO</i> React UI
        </h1>
      </Link>
    </nav>
  );
};

export default Nav;
