import styles from "./css/Contact.module.css";
import { useTranslation } from "react-i18next";
import linkedinLogo from "../assets/LinkedIn.png";
import emailLogo from "../assets/e-mail.png";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.mainContainer} id="contact">
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h2>{t("contact.title")}</h2>
        <div className={styles.contactLinksContainer}>
          <a href="https://www.linkedin.com/in/alexandre-guenin-607a66265/" target="_blank" rel="noreferrer">
            <img src={linkedinLogo} alt="linkedin logo" />
            LinkedIn
          </a>
          <a href="mailto:alexandre.guenin0@gmail.com" target="_blank" rel="noreferrer">
            <img src={emailLogo} alt="email logo" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
