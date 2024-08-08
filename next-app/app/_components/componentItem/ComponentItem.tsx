// file: next-app/app/_components/ComponentItem.tsx

import Link from "next/link";
import { ComponentProps } from "../../_assets/componentsData";
import styles from "./ComponentItem.module.css";

const ComponentItem = (component: ComponentProps) => {
  // highlight completed items
  const conditionalStyle = component.complete
    ? { backgroundColor: "#BFE6DE" }
    : { backgroundColor: "white", color: "#aaaaaa" };

  return (
    <Link href={`/components/${component.slug}`}>
      <li style={conditionalStyle} className={`${styles.listItem} `}>
        <div>
          <h3>
            {component.title} {component.complete ? "" : "🚧"}
          </h3>
          <p>{component.details}</p>
        </div>
        <div className={styles.tags}>
          {component.complete && (
            <div
              aria-label="Is complete"
              title="Is complete"
              className={styles.tag}
            >
              ✅
            </div>
          )}
          {component.explanation && (
            <div
              aria-label="Has code explanation"
              title="Has code explanation"
              className={styles.tag}
            >
              📝
            </div>
          )}
          {component.video && (
            <div
              aria-label="Has a video explanation"
              title="Has a video explanation"
              className={styles.tag}
            >
              🎬
            </div>
          )}
        </div>
      </li>
    </Link>
  );
};

export default ComponentItem;
