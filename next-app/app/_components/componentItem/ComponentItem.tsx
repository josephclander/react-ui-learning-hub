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
        <h3>
          {component.title} {component.complete ? "" : "🚧"}
        </h3>
        <p>{component.details}</p>
      </li>
    </Link>
  );
};

export default ComponentItem;
