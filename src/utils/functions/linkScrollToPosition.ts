export const linkScrollToPosition = (position: number, userDevice: string, workOnAllDevices?: boolean) => {
  if (userDevice === "mobile" || workOnAllDevices) {
    setTimeout(() => {
      window.scrollTo(0, position);
    }, 1);
  }
};
