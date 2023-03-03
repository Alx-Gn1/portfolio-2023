interface Param {
  setIsHover: Function;
  workId: string;
  index: number;
}

export const setupHoverListener = (params: Param) => {
  const { setIsHover, workId, index } = params;
  const workViewer = document.getElementById(workId);
  workViewer?.addEventListener("mouseover", (e) => {
    setIsHover(true);
  });
  workViewer?.addEventListener("mouseout", (e) => {
    setIsHover(false);
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && index === 0) {
          setIsHover(true);
          setTimeout(() => {
            setIsHover(false);
          }, 2000);
          observer.disconnect();
        } else {
          setIsHover(false);
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 1.0,
    }
  );
  observer.observe(workViewer!);
};
