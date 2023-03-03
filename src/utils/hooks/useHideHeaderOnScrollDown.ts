import { useEffect, useRef } from "react";
const throttle: Function = require("lodash.throttle");
// import { throttle } from "lodash.throttle";

export const useHideHeaderOnScrollDown = (props: {
  styles: { readonly [key: string]: string };
  userDevice: string;
}) => {
  let ScrollPosition = useRef(0);
  const { styles, userDevice } = props;
  useEffect(() => {
    const header = document.getElementById("header");
    const hideOnScrollDown = throttle(() => {
      const windowY = window.scrollY;
      if (windowY <= ScrollPosition.current) {
        // Scrolling UP
        header!.classList.remove(`${styles.hidden}`);
      } else {
        // Scrolling DOWN
        header!.classList.add(`${styles.hidden}`);
      }
      setTimeout(() => (ScrollPosition.current = windowY), 1);
    }, 500);

    if (userDevice === "mobile") {
      window.removeEventListener("scroll", hideOnScrollDown);
      window.addEventListener("scroll", hideOnScrollDown);
    } else {
      window.removeEventListener("scroll", hideOnScrollDown);
    }
  }, [userDevice, ScrollPosition, styles]);
};
