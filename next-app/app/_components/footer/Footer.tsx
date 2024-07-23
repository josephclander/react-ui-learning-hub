// file: next-app/app/_components/footer/Footer.tsx
import Logo from "@/app/_assets/Logo";
import styles from "./Footer.module.css";
import LinkedInLogo from "@/app/_assets/LinkedInLogo";
import YouTubeLogo from "@/app/_assets/YouTubeLogo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.siteLogo}>
        <Logo width="150px" />
        <h2>React UI Learning Hub</h2>
      </div>
      <div className={styles.name}>
        <p>Created by Joseph Lander</p>
        <div className={styles.socialLogos}>
          <a href="https://www.linkedin.com/in/josephclander/">
            <LinkedInLogo width="19px" />
          </a>
          <a href="https://www.youtube.com/@splat_bang">
            <YouTubeLogo width="25px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
