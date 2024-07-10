import Link from "next/link";
import { ComponentProps } from "../_assets/componentsData";
import styles from "./ComponentItem.module.css";

const ComponentItem = (component: ComponentProps) => {
  // highlight completed items
  const conditionalStyle = component.complete
    ? { backgroundColor: "#BFE6DE" }
    : { backgroundColor: "transparent" };

  return (
    <li
      style={conditionalStyle}
      className={`${styles.ComponentItem__listItem} `}
    >
      <Link href={`/components/${component.slug}`}>
        <h3>
          {component.title} {component.complete ? "" : "🚧"}
        </h3>
      </Link>
    </li>
  );
};

export default ComponentItem;
