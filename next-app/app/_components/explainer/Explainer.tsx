// file: next-app/app/_components/explainer/Explainer.tsx

import styles from "./Explainer.module.css";
import NoCopyLogo from "../../_assets/NoCopyLogo";
import OpenBookLogo from "../../_assets/OpenBookLogo";

const Explainer = () => {
  return (
    <div className={styles.Root__text_container}>
      <div className={styles.Blurb_1_container}>
        <NoCopyLogo width="200px" />
        <div className={styles.Root__blurb_1}>
          <h3>Unlock the Mechanics Behind Each Component</h3>
          <p>
            Dive deeper than ever before—this isn&apos;t just about copying and
            pasting code. Our resources guide you through the why and the how
            behind each component, empowering you to build with insight.
          </p>
        </div>
      </div>
      <div className={styles.Blurb_2_container}>
        <div className={styles.Root__blurb_2}>
          <h3>Explore Our Interactive Component Library</h3>
          <p>
            Navigate through a curated collection of common React UI components.
            Each example is paired with thorough explanations, unlocking the
            secrets to effective implementation.
          </p>
        </div>
        <OpenBookLogo width="220px" />
      </div>
    </div>
  );
};

export default Explainer;
