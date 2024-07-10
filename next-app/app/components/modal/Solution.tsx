"use client";

import { useState } from "react";
import styles from "./Solution06.module.css";

const Solution = () => {
  const [showModal, setShowModal] = useState(false);
  const turnOnModal = () => setShowModal(true);
  const turnOffModal = () => setShowModal(false);

  const handleContainerClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    // Check if the click is on the container itself to close the modal
    if ((event.target as HTMLDivElement).id === "container") {
      turnOffModal();
    }
  };

  return (
    <div className={styles.container}>
      {showModal && (
        <div
          id="container"
          onClick={handleContainerClick}
          className={styles.modalContainer}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modal}>
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

export default Solution;
