import Link from "next/link";
import Logo from "../_assets/Logo";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <Link className={styles.Nav__Link} href="/">
        <Logo width={"40px"} />
        <h1>HOW TO: React UI</h1>
      </Link>
    </nav>
  );
};

export default Nav;
