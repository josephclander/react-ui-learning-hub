import Link from "next/link";
import styles from "./page.module.css";

const NotFound = () => {
  return (
    <main className={styles.Root__container}>
      <h2>This page doesn&apos;t exist.</h2>
      <p>
        Return to the <Link href="/">home page</Link>
      </p>
    </main>
  );
};

export default NotFound;
