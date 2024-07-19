// file: next-app/app/_components/explainer/Explainer.tsx

import styles from "./Explainer.module.css";
import NoCopyLogo from "../../_assets/NoCopyLogo";
import OpenBookLogo from "../../_assets/OpenBookLogo";

const Explainer = () => {
  return (
    <div className={styles.Root__text_container}>
      <div className={styles.Blurb_1_container}>
        <NoCopyLogo width="200px" />
        <p className={styles.Root__blurb_1}>
          This isn&apos;t a library of components to just <em>copy-paste</em>. This
          library shows you the key to <span className="bold">how</span> it was
          implemented.
        </p>
      </div>
      <div className={styles.Blurb_2_container}>
        <p className={styles.Root__blurb_2}>
          Browse the library of common React UI components to see example code
          with an <span className="bold">explanation</span> on the key to making
          it work.
        </p>
        <OpenBookLogo width="220px" />
      </div>
    </div>
  );
};

export default Explainer;
