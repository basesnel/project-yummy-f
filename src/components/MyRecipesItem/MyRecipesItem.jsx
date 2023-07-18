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

const MyRecipesItem = ({ recipes, removeRecipeId, pageName }) => {
  return recipes.map(el => (
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
        $pageName={pageName}
        onClick={() => {
          removeRecipeId(`${el.id}`);
        }}
        type="button"
      >
        <WrapperIconRemove />
      </BtnRemove>
      <BtnDetail $pageName={pageName} to={`/recipe/${el.id}`}>
        See recipe
      </BtnDetail>
    </Item>
  ));
};

export default MyRecipesItem;
