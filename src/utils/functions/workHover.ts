interface Param {
  workId: string;
  mouseOver: (e: MouseEvent) => any;
  mouseOut: (e: MouseEvent) => any;
}

export const setupHoverListener = (params: Param) => {
  const {  workId, mouseOver, mouseOut } = params;
  const workViewer = document.getElementById(workId);

  workViewer?.addEventListener("mouseover", mouseOver);
  workViewer?.addEventListener("mouseout", mouseOut);
};
