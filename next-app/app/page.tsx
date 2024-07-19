import styles from "./page.module.css";
import { componentsData } from "./_assets/componentsData";
import { ComponentProps } from "./_assets/componentsData";
import ComponentItem from "./_components/ComponentItem";
import Hero from "./_components/hero/Hero";
import Explainer from "./_components/explainer/Explainer";

export default function Home() {
  return (
    <div className={styles.Root__container}>
      <Hero />
      <Explainer />
      <ul className={styles.Root__list}>
        {componentsData &&
          Object.values(componentsData).map((component: ComponentProps) => {
            return <ComponentItem key={component.id} {...component} />;
          })}
      </ul>
    </div>
  );
}
