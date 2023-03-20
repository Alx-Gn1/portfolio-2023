export const selectedSkillBelongToThisSelector = (
  selectedSkill: string,
  skillList: Array<{
    name: string;
    logo: string;
  }>
) => {
  const skillFound = Object.values(skillList).find((e) => e.name === selectedSkill) ? true : false;
  return skillFound;
};
