import styles from "../../components/css/WorkViewer.module.css";
import { useTranslation } from "react-i18next";
import logos from "../../utils/imagesImports/logos";
import projectImages from "../../utils/imagesImports/projectImages";

interface Props {
  date: string;
  technologies: Array<string>;
  title: string;
  description: string;
  picture: string;
  githubLink: string;
  githubPageLink: string | undefined;
}

const MiniWorkDisplay = (props: Props) => {
  const { t } = useTranslation();
  const { date, technologies, title, description, picture, githubLink, githubPageLink } = props;

  return (
    <article id={"mini-work-" + title} className={`${styles.mainContainer} ${styles.mini}`}>
      <p className={`${styles.date} ${styles.mini}`}>{date}</p>
      <div className={`${styles.content} ${styles.mini}`}>
        <div className={`${styles.technologies} ${styles.mini}`}>
          {technologies.map((img: string) => (
            <img src={logos[img]} alt={img + " logo"} key={img + " logo"} loading="lazy" />
          ))}
        </div>
        <img
          src={projectImages[picture]}
          alt={title + " project"}
          className={`${styles.projectImage} ${styles.mini} ${githubPageLink ? styles.linkImage : null}`}
          onClick={() => {
            if (githubPageLink) window.open(githubPageLink);
          }}
        />
        <h3>{title}</h3>
        <p className={`${styles.description} ${styles.mini}`}>{t(description)}</p>
      </div>
      <a className={`${styles.githubLink} ${styles.mini}`} href={githubLink} target="_blank" rel="noreferrer">
        <div className={styles.linkBackground}></div>
        <img src={logos.github} alt="github logo" loading="lazy" />
        {t("works.workGithubLink")}
      </a>
    </article>
  );
};
export default MiniWorkDisplay;
