// file: next-app/app/components/LinksList.tsx
import styles from "./LinksList.module.css";

type Link = {
  name: string;
  url: string;
};

type LinksProps = {
  links: Link[];
};

const LinksList: React.FC<LinksProps> = ({ links }) => {
  return (
    <ul>
      {links &&
        links.map((link) => (
          <li className={styles.list_item} key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
    </ul>
  );
};

export default LinksList;
