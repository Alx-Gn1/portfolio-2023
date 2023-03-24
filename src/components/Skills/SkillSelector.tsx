import styles from "./css/SkillSelector.module.css";
import { useTranslation } from "react-i18next";
import SkillVisualizer from "./SkillVisualizer";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSkill } from "../../app/Slices/skillSelectorSlice";
import { selectedSkillBelongToThisSelector } from "../../utils/functions/selectedSkillBelonToThisSelector";

interface Props {
  category: string;
  skillList: Array<{ name: string; logo: string }>;
}

const SkillSelector = (props: Props) => {
  // const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const {selectedSkill} = useAppSelector((state) => state.skillSelector);
  const setSelectedSkill = (skill: string) => dispatch(selectSkill(skill));

  const { category, skillList } = props;
  const [containerStyle, setContainerStyle] = useState<string>(styles.default);

  useEffect(() => {
    if (selectedSkill !== null && selectedSkillBelongToThisSelector(selectedSkill, skillList)) {
      setContainerStyle(styles.takeFullSpace);
    } else if (selectedSkill !== null && !selectedSkillBelongToThisSelector(selectedSkill, skillList)) {
      setContainerStyle(styles.hide);
    } else {
      setContainerStyle(styles.default);
    }
  }, [selectedSkill, skillList]);

  const { t } = useTranslation();
  return (
    <article className={containerStyle!}>
      <h3>{category}</h3>
      <div className={selectedSkill ? `${styles.skillList} ${styles.displaySelected}` : styles.skillList}>
        {skillList.map((skill) => (
          <SkillVisualizer
            key={skill.name}
            skillName={skill.name}
            logo={skill.logo}
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
          />
        ))}
      </div>
    </article>
  );
};
export default SkillSelector;
