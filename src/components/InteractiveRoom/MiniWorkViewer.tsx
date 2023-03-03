import styles from "./css/MiniWorkViewer.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import workList from "../../utils/Data/workList.json";
import MiniWorkDisplay from "./MiniWorkDisplay";

const MiniWorkViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxNumberOfPage = workList.length;

  const { t } = useTranslation();
  const lastWork = workList[1];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.workContainer}>
        <div className={styles.slider} style={{ left: `${(currentPage - 1) * -100}%` }}>
          {workList.map((work) => (
            <MiniWorkDisplay
              key={work.title}
              date={work.date}
              technologies={work.technologies}
              title={work.title}
              description={work.description}
              picture={work.picture}
              githubLink={work.githubLink}
            />
          ))}
        </div>
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
    </div>
  );
};
export default MiniWorkViewer;
