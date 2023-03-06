import styles from "./css/WorkViewer.module.css";
import { useTranslation } from "react-i18next";
import logos from "../utils/logos/logos";
import { useEffect, useRef, useState } from "react";
import { setupHoverListener } from "../utils/functions/workHover";
import { useAppSelector } from "../app/hooks";

interface Props {
  date: string;
  technologies: Array<string>;
  title: string;
  description: string;
  picture: string;
  githubLink: string;
  index: number;
  githubPageLink: string | undefined;
}

const WorkViewer = (props: Props) => {
  const { t } = useTranslation();
  const { date, technologies, title, description, picture, githubLink, index, githubPageLink } = props;
  const [isHover, setIsHover] = useState(false);
  const { userDevice } = useAppSelector((state) => state.userDevice);

  useEffect(() => {
    setupHoverListener({ setIsHover, workId: "work-" + title, index });
  }, [index, title]);

  return (
    <article
      id={"work-" + title}
      className={styles.mainContainer}
      style={isHover && userDevice !== "mobile" ? { borderColor: "var(--primary-invert)" } : {}}
    >
      <p
        className={styles.date}
        style={
          isHover || userDevice === "mobile" || userDevice === "tablet"
            ? {}
            : { borderWidth: 0, transform: "translateY(24px)", height: 0, color: "transparent", fontSize: 0 }
        }
      >
        {date}
      </p>
      <div className={styles.content}>
        <div className={styles.technologies}>
          {technologies.map((img: string) => (
            <img src={logos[img]} alt={img + " logo"} key={img + " logo"} loading="lazy" />
          ))}
        </div>
        <img
          src={picture}
          alt={title + " project"}
          className={`${styles.projectImage} ${githubPageLink ? styles.linkImage : null}`}
          onClick={() => {
            if (githubPageLink) window.open(githubPageLink);
          }}
          loading="lazy"
        />
        <h3>{title}</h3>
        <p className={styles.description}>{t(description)}</p>
      </div>
      <a
        className={styles.githubLink}
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        style={
          isHover || userDevice === "mobile" || userDevice === "tablet"
            ? {}
            : { fontSize: 0, height: 0, transform: "translateY(-24px)", borderWidth: 0 }
        }
      >
        <div className={styles.linkBackground}></div>
        <img
          src={logos.github}
          alt="github logo"
          style={isHover || userDevice === "mobile" || userDevice === "tablet" ? {} : { height: 0 }}
          loading="lazy"
        />
        {t("works.workGithubLink")}
      </a>
    </article>
  );
};
export default WorkViewer;
