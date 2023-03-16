import { Skill, Styledskill } from "./style";

const Technology = ({ technologiesOfItem }) => {
  return (
    <Skill>
      {technologiesOfItem?.map((techItem, index) => (
        <Styledskill key={index}>{techItem}</Styledskill>
      ))}
    </Skill>
  );
};

export default Technology;