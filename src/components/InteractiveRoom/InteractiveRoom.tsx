import styles from "./css/InteractiveRoom.module.css";
import CharacterClicker from "./clickers/CharacterClicker";
import SocialLinkClicker from "./clickers/SocialLinkClicker";
import LibraryClicker from "./clickers/LibraryClicker";
import WorksClicker from "./clickers/WorksClicker";
import { useState } from "react";
import DialogOpener from "./DialogOpener";
import isometricRoom from "../../assets/isometric-room/isometric-room.webp";
import isometricRoomMobile from "../../assets/isometric-room/isometric-room-small.webp";
import ComputerFanBackground from "./ComputerFanBackground";
import computerScreen from "../../assets/isometric-room/ecran-pc.png";
import { useAppSelector } from "../../app/hooks";

const InteractiveRoom = () => {
  const [currentDialog, setCurrentDialog] = useState<null | string>(null);
  const { userDevice } = useAppSelector((state) => state.userDevice);

  return (
    <div className={styles.container}>
      <ComputerFanBackground />
      <img
        className={styles.roomImage}
        src={userDevice !== "mobile" ? isometricRoom : isometricRoomMobile}
        alt="isometric room"
        loading="lazy"
      />
      <img src={computerScreen} alt="écran du pc" className={styles.computerScreen} />
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
