import styles from "./page.module.css";
import { componentsData } from "./_assets/componentsData";
import { ComponentProps } from "./_assets/componentsData";
import NoCopyLogo from "./_assets/NoCopyLogo";
import ComponentItem from "./_components/ComponentItem";

export default function Home() {
  return (
    <div className={styles.Root__container}>
      <div className={styles.Root__text_container}>
        <div className={styles.Blurb_1_container}>
          <NoCopyLogo width="150px" />
          <p className={styles.Root__blurb_1}>
            This isn&apos;t a library of components to just copy paste. This
            library shows you the key to <span className="bold">how</span> it
            was implemented.
          </p>
        </div>
        <div className={styles.Blurb_2_container}>
          <p className={styles.Root__blurb_2}>
            Browse the library of common React UI components to see example code
            with an explanation on the key to making it work.
          </p>
        </div>
      </div>
      <ul className={styles.Root__list}>
        {componentsData &&
          Object.values(componentsData).map((component: ComponentProps) => {
            return <ComponentItem key={component.id} {...component} />;
          })}
      </ul>
    </div>
  );
}
