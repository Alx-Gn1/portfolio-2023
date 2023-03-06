import styles from "./css/Works.module.css";
import { useTranslation } from "react-i18next";
import WorkViewer from "./WorkViewer";
import workList from "../utils/Data/workList.json";
import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";

const Works = () => {
  const { t } = useTranslation();
  const { userDevice, deviceWidth } = useAppSelector((state) => state.userDevice);

  const [currentPage, setCurrentPage] = useState(1);
  const getMaxNumberOfPage = (): number => {
    if (userDevice === "tablet" || (userDevice === "desktop" && (deviceWidth === 1024 || deviceWidth === 1200)))
      return Math.ceil(workList.length / 2);
    if (userDevice === "desktop") return Math.ceil(workList.length / 3);
    return workList.length;
  };
  const maxNumberOfPage = getMaxNumberOfPage();

  useEffect(() => {
    setCurrentPage(1);
  }, [userDevice]);

  return (
    <section id="works" className={styles.mainContainer}>
      <article className={styles.titleContainer}>
        <div>
          <h2>{t("works.title")}</h2>
          <p>
            {t("works.findMyWorksOnGithub")}
            <a href="https://github.com/Alx-Gn1" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              setCurrentPage(currentPage > 1 ? currentPage - 1 : maxNumberOfPage);
            }}
          >
            {"<"}
          </button>
          <p>{currentPage + "/" + maxNumberOfPage}</p>
          <button
            onClick={() => {
              setCurrentPage(currentPage < maxNumberOfPage ? currentPage + 1 : 1);
            }}
          >
            {">"}
          </button>
        </div>
      </article>
      <div className={styles.worksContainer}>
        <div className={styles.slider} style={{ left: `${(currentPage - 1) * -100}%` }}>
          {workList.map((work, index) => (
            <WorkViewer
              key={work.title}
              date={work.date}
              technologies={work.technologies}
              title={work.title}
              description={work.description}
              picture={work.picture}
              githubLink={work.githubLink}
              index={index}
              githubPageLink={work?.githubPageLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Works;
