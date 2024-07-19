// file: next-app/app/_components/footer/Footer.tsx
import Logo from "@/app/_assets/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo width="150px" />
      <h2>HOW TO: React UI</h2>
    </div>
  );
};

export default Footer;
