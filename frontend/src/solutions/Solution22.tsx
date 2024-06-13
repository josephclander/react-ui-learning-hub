import { useRef, useState } from "react";
import styles from "./Solution22.module.css";

const Solution22 = () => {
  const dragItem1 = useRef<HTMLDivElement>(null);
  const dragItem2 = useRef<HTMLDivElement>(null);
  const dropZone1 = useRef<HTMLDivElement>(null);
  const dropZone2 = useRef<HTMLDivElement>(null);

  const [draggedItem, setDraggedItem] = useState<HTMLDivElement | null>(null);

  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // Set the dragged item based on which element initiated the drag
    if (event.target === dragItem1.current) {
      setDraggedItem(dragItem1.current);
    } else if (event.target === dragItem2.current) {
      setDraggedItem(dragItem2.current);
    }
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // required to allow dragging
    event.preventDefault();
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    const dropZone = (event.target as HTMLElement).closest(`.${styles.box}`); // Ensures we're dropping into a box
    if (dropZone && draggedItem) {
      dropZone.appendChild(draggedItem);
    }
  };

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    // required to allow dragging
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.box}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          ref={dropZone1}
        >
          <div
            ref={dragItem1}
            draggable="true"
            onDragStart={dragStartHandler}
            className={`${styles.dragItem} ${styles.one}`}
          >
            Move Me!
          </div>
          <div
            ref={dragItem2}
            draggable="true"
            onDragStart={dragStartHandler}
            className={`${styles.dragItem} ${styles.two}`}
          >
            Move Me!
          </div>
        </div>
        <div
          className={styles.box}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          ref={dropZone2}
        ></div>
      </div>
      <div>
        <p>
          The solution mimics the pattern for vanilla JavaScript as you can see
          in this{" "}
          <a href="https://www.w3schools.com/html/html5_draganddrop.asp">
            example
          </a>
          with the exception that it uses state and refs to keep track of the
          elements. Note the property types on each of the elements; draggable,
          onDragStart, onDrop and onDragOver.
        </p>
      </div>
    </>
  );
};

export default Solution22;
