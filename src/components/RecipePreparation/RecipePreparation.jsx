import { PrepSection } from './RecipePreparation.styled';
import { nanoid } from 'nanoid';

export const RecipePreparation = ({ instructions, photo }) => {
  const instr = instructions.split('\r\n');
  console.log(instr);
  console.log(instr);
  return (
    <PrepSection>
      <div>
        <h2>Recipe Preparation</h2>
        <ul>
          {instr.map((item, index) => (
            <li key={nanoid()}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src={photo} alt="dish" />
      </div>
    </PrepSection>
  );
};
