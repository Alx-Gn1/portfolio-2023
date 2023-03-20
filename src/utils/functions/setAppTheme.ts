const setAppTheme = (theme: string) => {
  // Se met par dessus les variables css présentes dans le fichier index.css
  // Permet de changer le theme de l'application
  // Le theme par défault est "light" et est définit dans index.css
  // Si aucun theme n'est rentré on utilise le light par défaut
  const themeStyle = document.getElementById("darkThemeActive") || document.createElement("style");
  themeStyle.setAttribute("id", "darkThemeActive");
  if (theme === "dark") {
    themeStyle.innerHTML = `:root {
      --primary: #fff;
      --primary-background: #ebedff;
      --primary-invert: #1a2036;
      --primary-dark: #ECEEFB;
      --primary-darker: #caceeb;
      --dialog-background: #f8f8ff;
      --secondary: #fe5944;
      --secondary-dark: #e4442f;
      --secondary-darker: #d13a26;
      --text-primary: #111420;
      --text-gray: #969392;
      --text-gray-dark: #c5bebb;
      --text-link: #12225a;
      --text-second: #263363;
      --text-important: #e4442f;
      --text-invert: #fffdf7;
    }`;
    document.head.appendChild(themeStyle);
  } else {
    themeStyle.remove();
  }
};

export default setAppTheme;
