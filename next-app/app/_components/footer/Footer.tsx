import Logo from "@/app/_assets/Logo";
import styles from "./Footer.module.css";
import LinkedInLogo from "@/app/_assets/LinkedInLogo";
import YouTubeLogo from "@/app/_assets/YouTubeLogo";
import Link from "next/link";

type itemProps = {
  label: string;
  to: string;
};

type linkProps = {
  title: string;
  items: itemProps[];
};

const linkContent: linkProps[] = [
  {
    title: "Reference",
    items: [
      { label: "React Docs", to: "https://react.dev/reference/react" },
    ],
  },
  {
    title: "React Hooks",
    items: [
      { label: "useState", to: "https://react.dev/reference/react/useState" },
      { label: "useRef", to: "https://react.dev/reference/react/useRef" },
      { label: "useEffect", to: "https://react.dev/reference/react/useEffect" },
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.siteLogo}>
        <Logo width="150px" />
        <h2 className={styles.Home__Link}>
          <Link href="/">React UI Learning Hub</Link>
        </h2>
      </div>
      <div className={styles.name}>
        <p>Created by Joseph Lander</p>
        <div className={styles.socialLogos}>
          <a href="https://www.linkedin.com/in/josephclander/">
            <LinkedInLogo width="25px" />
          </a>
          <a href="https://www.youtube.com/@splat_bang">
            <YouTubeLogo width="35px" />
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.link_container}>
          {linkContent &&
            linkContent.map((element) => {
              return (
                <div key={element.title} className={styles.element_container}>
                  <div className={styles.element_title}>{element.title}</div>
                  {element &&
                    element.items.map((link) => {
                      return (
                        <a
                          target="_blank"
                          className={styles.element_link}
                          key={link.label}
                          href={link.to}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
