import Link from "next/link";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <main className={styles.container}>
      <h2>This page doesn&apos;t exist.</h2>
      <p>
        Return to the{" "}
        <Link className={styles.link} href="/">
          home page
        </Link>
      </p>
    </main>
  );
};

export default NotFound;
