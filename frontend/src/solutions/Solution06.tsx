import { useState } from "react";
import styles from "./Solution06.module.css";

const Solution06 = () => {
  const [showModal, setShowModal] = useState(false);
  const turnOnModal = () => setShowModal(true);
  const turnOffModal = () => setShowModal(false);

  return (
    <div
      id="container"
      // due to propagation you cannot apply turnOfModal() directly
      // it will prevent the Show Modal button from working
      // check the element clicked is the div with id='container'
      onClick={(event) => {
        if (
          event.target instanceof HTMLElement &&
          event?.target.id === "container"
        )
          turnOffModal();
      }}
      className={styles.container}
    >
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalMessageBox}>
            <button
              onClick={turnOffModal}
              aria-label="Click to close"
              className={styles.close}
            >
              X
            </button>
            <h3>This is a modal</h3>
          </div>
        </div>
      )}
      <button
        onClick={turnOnModal}
        aria-label="Show Modal"
        className={styles.open}
      >
        Show Modal
      </button>
    </div>
  );
};

export default Solution06;
