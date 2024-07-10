import styles from "./page.module.css";
import { componentsData } from "./_assets/componentsData";
import { ComponentProps } from "./_assets/componentsData";
import ComponentItem from "./_components/ComponentItem";

export default function Home() {
  return (
    <div className={styles.Root__container}>
      <p className={styles.Root__blurb}>
        This isn&apos;t a library of components to just copy paste. This library
        shows you the key to how it was implemented.
      </p>
      <p className={styles.Root__blurb}>
        Browse the library of common React UI components to see example code
        with an explanation on the key to making it work.
      </p>
      <ul className={styles.Root__list}>
        {componentsData &&
          Object.values(componentsData).map((component: ComponentProps) => {
            return <ComponentItem key={component.id} {...component} />;
          })}
      </ul>
    </div>
  );
}
