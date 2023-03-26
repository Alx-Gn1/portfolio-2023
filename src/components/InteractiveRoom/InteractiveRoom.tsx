import styles from "./css/InteractiveRoom.module.css";
import CharacterClicker from "./clickers/CharacterClicker";
import SocialLinkClicker from "./clickers/SocialLinkClicker";
import LibraryClicker from "./clickers/LibraryClicker";
import WorksClicker from "./clickers/WorksClicker";
import { useState, useEffect, useRef } from "react";
import DialogOpener from "./DialogOpener";
import isometricRoom from "../../assets/isometric-room/isometric-room.webp";
import isometricRoomMobile from "../../assets/isometric-room/isometric-room-small.webp";
import ComputerFanBackground from "./ComputerFanBackground";
import computerScreen from "../../assets/isometric-room/ecran-pc.webp";
import { useAppSelector } from "../../app/hooks";
import clickerStyles from "./clickers/css/clickers.module.css";
import { highlightClickersAnim } from "../../utils/functions/highlightClickersAnim";

const InteractiveRoom = () => {
  const [currentDialog, setCurrentDialog] = useState<null | string>(null);
  const { userDevice } = useAppSelector((state) => state.userDevice);

  useEffect(() => {
    const closeWhenScrollDown = () => {
      if (window.scrollY > 600) setCurrentDialog(null);
    };
    window.addEventListener("scroll", closeWhenScrollDown, true);

    return window.removeEventListener("scroll", closeWhenScrollDown, true);
  }, []);

  const animDuration = useRef(800);
  const startAnim = useRef<number>();
  const animTimeout = useRef(3000);
  useEffect(() => {
    if (currentDialog) {
      clearTimeout(startAnim.current);
      startAnim.current = undefined;
    }
    const animInterval = () => {
      if (currentDialog === null) highlightClickersAnim(clickerStyles, animDuration.current);
      animTimeout.current = animTimeout.current < 15000 ? animTimeout.current * 1.5 : animTimeout.current;
      startAnim.current = setTimeout(animInterval, animTimeout.current, true);
    };
    startAnim.current = setTimeout(animInterval, 500, true);
  }, [currentDialog]);

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
