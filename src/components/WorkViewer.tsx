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
  currentPage: number;
}

const WorkViewer = (props: Props) => {
  const { date, technologies, title, description, picture, githubLink, index, currentPage } = props;
  const [isHover, setIsHover] = useState(true);
  const { userDevice, deviceWidth } = useAppSelector((state) => state.userDevice);

  const datePosition = useRef("");
  useEffect(() => {
    setupHoverListener({ setIsHover, workId: "work-" + title, index });
    const dateDependingOnDevice = () => {
      if (userDevice === "mobile") return "16px";
      if (userDevice === "tablet") return "3px";
      if (userDevice === "desktop") {
        if (deviceWidth === 1024) return "29px";
        if (deviceWidth === 1200) return "27px";
        if (deviceWidth === 1400) return "42px";
        if (deviceWidth === 1650) return "44px";
        if (deviceWidth === 1800) return "27px";
      }
    };
    datePosition.current = dateDependingOnDevice()!;
  }, [index, title, userDevice, deviceWidth]);

  const { t } = useTranslation();
  return (
    <article
      id={"work-" + title}
      className={styles.mainContainer}
      style={isHover ? { borderColor: "var(--primary-invert)" } : {}}
    >
      <p
        className={styles.date}
        style={
          isHover ||
          (userDevice === "mobile" && currentPage === index + 1) ||
          (userDevice === "tablet" && currentPage === index + 1)
            ? {
                height: "calc(var(--date-height) + 3px)",
                top: datePosition.current,
                color: "unset",
              }
            : {}
        }
      >
        {date}
      </p>
      <div className={styles.content}>
        <div className={styles.technologies}>
          {technologies.map((img: string) => (
            <img src={logos[img]} alt={img + " logo"} key={img + " logo"} />
          ))}
        </div>
        <img src={picture} alt={title + " project"} className={styles.projectImage} />
        <h3>{title}</h3>
        <p className={styles.description}>{t(description)}</p>
      </div>
      <a
        style={
          isHover ||
          (userDevice === "mobile" && currentPage === index + 1) ||
          (userDevice === "tablet" && currentPage === index + 1)
            ? {}
            : { width: "30%", height: "0px", fontSize: "0em", bottom: "40px", border: "unset" }
        }
        className={styles.githubLink}
        href={githubLink}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.linkBackground}></div>
        <img
          src={logos.github}
          alt="github logo"
          style={
            isHover ||
            (userDevice === "mobile" && currentPage === index + 1) ||
            (userDevice === "tablet" && currentPage === index + 1)
              ? {}
              : { width: "0px", height: "0px" }
          }
        />
        {t("works.workGithubLink")}
      </a>
    </article>
  );
};
export default WorkViewer;
