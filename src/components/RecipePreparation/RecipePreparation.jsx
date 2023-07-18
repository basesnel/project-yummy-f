import { PrepSection } from './RecipePreparation.styled';
import { nanoid } from 'nanoid';

export const RecipePreparation = ({ instructions, photo }) => {
  const instr = instructions.split('\r\n').filter(item => item !== '');
  //console.log(instr);
  // console.log(instr);
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
        <img
          src={
            photo ||
            require('../../assets/images/recipePage/recipePlaceholder.png')
              .default
          }
          alt="dish"
        />
      </div>
    </PrepSection>
  );
};
