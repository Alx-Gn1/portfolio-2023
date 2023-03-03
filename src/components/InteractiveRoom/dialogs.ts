type Dialogs = {
  [key: string]: {
    title: string;
    anchor: string;
    style: { left: string; top: string; widthInPercent?: number };
    description: { text: Array<string>; links?: Array<{ name: string; href: string }> };
  };
};

export const dialogs: Dialogs = {
  About: {
    title: "about.title",
    anchor: "#about",
    style: { left: "45%", top: "40%", widthInPercent: 40 },
    description: { text: ["room.aboutDescription", "about.imLookingFor"] },
  },
  Skills: {
    title: "skills.title",
    anchor: "#skills",
    style: { left: "55%", top: "24%", widthInPercent: 35 },
    description: {
      text: ["room.skillsDescription", "room.skillsDescriptionP2", "room.skillsDescriptionP3"],
    },
  },
  Works: {
    title: "works.title",
    anchor: "#works",
    style: { left: "35%", top: "25%" },
    description: { text: ["room.workDescription"] },
  },
  Contact: {
    title: "room.contactTitle",
    anchor: "#contact",
    style: { left: "18%", top: "25%", widthInPercent: 30 },
    description: {
      text: [],
      links: [
        { name: "Github", href: "https://github.com/Alx-Gn1" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/alexandre-guenin-607a66265/" },
        { name: "Email", href: "mailto:alexandre.guenin0@gmail.com" },
      ],
    },
  },
};
