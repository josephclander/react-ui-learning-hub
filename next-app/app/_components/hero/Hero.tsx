// file: next-app/app/_components/hero/Hero.tsx
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <p className={styles.tagline}>
        <span className={styles.line}>
          Don&apos;t just <span className="bold">copy</span> components,{" "}
        </span>
        <span className={styles.line}>
          Learn <span className="bold">how</span> you can develop your own.
        </span>
      </p>
    </div>
  );
};

export default Hero;
