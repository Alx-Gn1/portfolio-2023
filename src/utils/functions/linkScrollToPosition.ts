export const linkScrollToPosition = (position: number) => {
  setTimeout(() => {
    window.scrollTo(0, position);
  });
};
