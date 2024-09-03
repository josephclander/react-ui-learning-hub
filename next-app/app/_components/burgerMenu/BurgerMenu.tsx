// file: next-app/app/_components/burgerMenu/BurgerMenu.tsx
import styles from "./BurgerMenu.module.css";

type BurgerMenuProps = {
  toggleMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className={styles.menu}
      aria-label="components menu"
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

export default BurgerMenu;
