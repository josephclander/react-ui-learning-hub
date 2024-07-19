import styles from "./page.module.css";
import { componentsData } from "./_assets/componentsData";

import Hero from "./_components/hero/Hero";
import Explainer from "./_components/explainer/Explainer";
import List from "./_components/list/List";

export default function Home() {
  return (
    <div className={styles.Root__container}>
      <Hero />
      <Explainer />
      <List componentsData={componentsData} />
    </div>
  );
}
