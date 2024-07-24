// file: next-app/app/_components/hero/Hero.tsx
import HeroLogo from "@/app/_assets/HeroLogo";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tagline}>
        <h1 className="bold">Learn To Build React Components</h1>
        <p>
          Explore a diverse library of <span className="bold">React</span>{" "}
          solutions, featuring step-by-step guides on implementing essential{" "}
          <span className="bold">UI elements</span> like counters, lists, and
          forms with interactive code examples.
        </p>
      </div>

      <HeroLogo width={"700px"} />

      <div className={styles.buttonContainer}>
        <a href="#list" className={styles.anchor}>
          &#8595;
        </a>
        <p className={styles.cta}>Take me to the code</p>
      </div>
    </div>
  );
};

export default Hero;
