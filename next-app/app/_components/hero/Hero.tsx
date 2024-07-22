// file: next-app/app/_components/hero/Hero.tsx
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <p className={styles.tagline}>
        <span className="bold">EXPLORE BEYOND THE CODE</span>
        <span className={styles.line}>
          Master the creation of your own React components.
        </span>
      </p>
    </div>
  );
};

export default Hero;
