import styles from "./css/InteractiveRoom.module.css";
import CharacterClicker from "./clickers/CharacterClicker";
import SocialLinkClicker from "./clickers/SocialLinkClicker";
import LibraryClicker from "./clickers/LibraryClicker";
import WorksClicker from "./clickers/WorksClicker";
import { useState } from "react";
import DialogOpener from "./DialogOpener";
import isometricRoom from "../../assets/isometric-room/isometric-room.webp";

const InteractiveRoom = () => {
  const [currentDialog, setCurrentDialog] = useState<null | string>(null);

  return (
    <div className={styles.container}>
      <img className={styles.roomImage} src={isometricRoom} alt="isometric room" loading="lazy" />
      <div className={styles.clickersContainer}>
        <CharacterClicker
          onClick={() => {
            setCurrentDialog("About");
          }}
        />
        <SocialLinkClicker
          onClick={() => {
            setCurrentDialog("Contact");
          }}
        />
        <LibraryClicker
          onClick={() => {
            setCurrentDialog("Skills");
          }}
        />
        <WorksClicker
          onClick={() => {
            setCurrentDialog("Works");
          }}
        />
      </div>
      <div className={styles.dialogContainer}>
        <DialogOpener currentDialog={currentDialog} setCurrentDialog={setCurrentDialog} />
      </div>
    </div>
  );
};
export default InteractiveRoom;
