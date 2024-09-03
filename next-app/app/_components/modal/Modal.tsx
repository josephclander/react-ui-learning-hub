// file: next-app/app/_components/modal/Modal.tsx

import styles from "./Modal.module.css";
import { componentsData } from "../../_assets/componentsData";
import Link from "next/link";

const Modal = ({ show }: { show: boolean }) => {
  return (
    <div className={`${styles.modal} ${show ? styles.display : ""}`}>
      <ul className={styles.list}>
        {componentsData &&
          (
            Object.keys(componentsData) as Array<keyof typeof componentsData>
          ).map((component) => {
            if (componentsData[component].complete) {
              return (
                <li key={component} className={styles.listElement}>
                  <Link
                    className={styles.listLink}
                    href={`/components/${component}`}
                  >
                    {componentsData[component].title}
                  </Link>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default Modal;
