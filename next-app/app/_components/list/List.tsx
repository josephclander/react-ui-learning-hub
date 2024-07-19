// file: next-app/app/_components/list/List.tsx

import styles from "./List.module.css";
import ComponentItem from "../../_components/ComponentItem";
import { ComponentProps } from "../../_assets/componentsData";

interface ListProps {
  componentsData: { [key: string]: ComponentProps };
}

const List = ({ componentsData }: ListProps) => {
  return (
    <>
      <h2 className={styles.title}>The Components</h2>
      <ul className={styles.list}>
        {componentsData &&
          Object.values(componentsData).map((component: ComponentProps) => {
            return <ComponentItem key={component.id} {...component} />;
          })}
      </ul>
    </>
  );
};

export default List;
