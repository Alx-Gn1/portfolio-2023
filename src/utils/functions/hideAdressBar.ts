export const hideAddressBar = () => {
  const windowX = window.scrollX;
  const windowY = window.scrollY;
  setTimeout(() => window.scrollTo(windowX, windowY + 1), 250);
};
