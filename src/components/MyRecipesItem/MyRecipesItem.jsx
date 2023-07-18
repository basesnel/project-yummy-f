import {
  Item,
  Photo,
  Title,
  Text,
  WrapperDescription,
  WrapperPhoto,
  TextTime,
  BtnRemove,
  BtnDetail,
  MainText,
  WrapperIconRemove,
} from './MyRecipesItem.styled';

const MyRecipesItem = ({ favoriteRecipes, removeRecipeId }) => {
  return favoriteRecipes.map(el => (
    <Item key={el.id}>
      <WrapperPhoto>
        <Photo alt="photo recipe" src={el.preview} />
      </WrapperPhoto>
      <WrapperDescription>
        <Title>{el.title}</Title>
        <MainText>{el.description}</MainText>
        <Text>{el.instructions}</Text>
        <TextTime>{el.time} min</TextTime>
      </WrapperDescription>
      <BtnRemove
        onClick={() => {
          removeRecipeId(`${el.id}`);
        }}
        type="button"
      >
        <WrapperIconRemove />
      </BtnRemove>
      <BtnDetail to={`/recipe/${el.id}`}>See recipe</BtnDetail>
    </Item>
  ));
};

export default MyRecipesItem;
