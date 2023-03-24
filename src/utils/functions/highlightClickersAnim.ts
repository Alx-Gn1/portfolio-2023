export const highlightClickersAnim = (clickerStyles: { readonly [key: string]: string }, animDuration:number) => {
  const clickers = document.querySelectorAll("." + clickerStyles.clicker);

  const startAnim = setInterval(() => {
    clickers.forEach((clicker) => {
      clicker.classList.add(clickerStyles.highlight);
      setTimeout(() => {
        clicker.classList.remove(clickerStyles.highlight);
      }, animDuration / 2);
    });
  }, animDuration);

  setTimeout(() => clearInterval(startAnim), animDuration * 3);
};
