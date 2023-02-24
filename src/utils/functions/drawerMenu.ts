interface DrawerStyle {
  navContainer: string;
  open: string;
}

export const openNavDrawer = (styles: { readonly [key: string]: string }) => {
  const navDrawer = document.getElementById("navDrawer");
  navDrawer?.classList.add(styles.open);
};
export const closeNavDrawer = (styles: { readonly [key: string]: string }) => {
  const navDrawer = document.getElementById("navDrawer");
  navDrawer?.classList.remove(styles.open);
};
