import styles from "./css/DialogOpener.module.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { dialogs } from "./dialogs";
import MiniWorkViewer from "./MiniWorkViewer";
import { useOutsideAlert } from "../../utils/hooks/useClickOutsideAlert";
import { useAppSelector } from "../../app/hooks";

interface Props {
  currentDialog: string | null;
  setCurrentDialog: Function;
}

const DialogOpener = (props: Props) => {
  const { currentDialog, setCurrentDialog } = props;
  const dialogContent = currentDialog && dialogs[currentDialog];
  const { userDevice } = useAppSelector((state) => state.userDevice);
  const { t } = useTranslation();
  const dialogRef = useRef(null);

  const closeDialog = () => {
    setCurrentDialog(null);
  };

  useOutsideAlert(dialogRef, closeDialog);

  if (dialogContent) {
    return (
      <>
        <div className={styles.backdrop}></div>
        <article
          className={styles.dialogContainer}
          style={{
            left: dialogContent.style.left,
            top: userDevice === "mobile" || userDevice === "tablet" ? "8%" : dialogContent.style.top,
            width:
              dialogContent.style.widthInPercent && userDevice === "mobile"
                ? `${dialogContent.style.widthInPercent * 0.9}%`
                : `${dialogContent.style.widthInPercent}%`,
          }}
          ref={dialogRef}
          onClick={() => {
            if (currentDialog !== "Works") setTimeout(closeDialog, 100);
          }}
        >
          <h3 className={styles.title}>{t(dialogContent.title)}</h3>
          {dialogContent.description.text.map((descriptionPart) => (
            <p className={styles.content} key={descriptionPart}>
              {t(descriptionPart)}
            </p>
          ))}
          {/* Il y a une exception pour la fenêtre de dialogue "Works"
              Il faut afficher le component utilisé dans la section "works"
              plutôt qu'un dialogue présent dans le fichier JSON
              J'ai placé l'exception ici car il n'y a pas de 
              lien (= dialogContent.description.links) mais il y a tout de
              même du texte à afficher (= dialogContent.description.text)
                */}
          {currentDialog === "Works" ? (
            <MiniWorkViewer />
          ) : (
            dialogContent.description.links &&
            dialogContent.description.links.map((anchorPart) => (
              <a
                className={styles.descriptionLinks}
                key={anchorPart.name}
                href={anchorPart.href}
                target="_blank"
                rel="noreferrer"
              >
                {anchorPart.name}
              </a>
            ))
          )}
          <a href={dialogContent.anchor} className={styles.anchor}>
            {t("room.learnMore")}
          </a>
        </article>
      </>
    );
  } else return null;
};
export default DialogOpener;
