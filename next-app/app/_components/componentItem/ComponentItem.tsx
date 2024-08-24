import Link from "next/link";
import { ComponentProps } from "../../_assets/componentsData";
import styles from "./ComponentItem.module.css";
import CursorIcon from "@/app/_assets/CursorIcon";
import NoteIcon from "@/app/_assets/NoteIcon";
import VideoIcon from "@/app/_assets/VideoIcon";
import BuildIcon from "@/app/_assets/BuildIcon";

const ComponentItem = (component: ComponentProps) => {
  // Highlight completed items
  const conditionalStyle = component.complete
    ? { backgroundColor: "#BFE6DE" }
    : { backgroundColor: "white", color: "#aaaaaa", cursor: "not-allowed" };

  const content = (
    <li style={conditionalStyle} className={`${styles.listItem}`}>
      <div>
        <h3>{component.title}</h3>
        <p>{component.details}</p>
      </div>
      <div className={styles.tags}>
        {!component.complete && (
          <div
            aria-label="Is being built"
            title="Is being built"
            className={styles.tag}
          >
            <BuildIcon width={"30px"} />
          </div>
        )}
        {component.complete && (
          <div
            aria-label="Interactive"
            title="Interactive"
            className={styles.tag}
          >
            <CursorIcon width={"30px"} />
          </div>
        )}
        {component.explanation && (
          <div
            aria-label="Has code explanation"
            title="Has code explanation"
            className={styles.tag}
          >
            <NoteIcon width={"30px"} />
          </div>
        )}
        {component.video && (
          <div
            aria-label="Has a video explanation"
            title="Has a video explanation"
            className={styles.tag}
          >
            <VideoIcon width={"30px"} />
          </div>
        )}
      </div>
    </li>
  );

  return component.complete ? (
    <Link className={styles.link} href={`/components/${component.slug}`}>{content}</Link>
  ) : (
    content
  );
};

export default ComponentItem;
