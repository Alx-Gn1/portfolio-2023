import styles from "./InteractiveRoom.module.css";
import { useTranslation } from "react-i18next";
import isometricRoom from "../../assets/isometric-room/isometric-room.webp";
import isometricRoomBG from "../../assets/isometric-room/isometric-room-background.webp";

const InteractiveRoom = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <img className={styles.imgBackground} src={isometricRoomBG} alt="isometric room background" />
      <img src={isometricRoom} alt="isometric room" />
    </div>
  );
};
export default InteractiveRoom;
