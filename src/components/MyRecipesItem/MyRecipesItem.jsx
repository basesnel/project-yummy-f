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
    <Item key={el._id}>
      <WrapperPhoto>
        <Photo alt="photo recipe" src={el.preview} />
      </WrapperPhoto>
      <WrapperDescription>
        <Title>{el.title}</Title>
        <MainText>{el.description}</MainText>
        <Text>{el.instructions}</Text>
        <TextTime>{el.time}</TextTime>
      </WrapperDescription>
      <BtnRemove
        $pageName={pageName}
        onClick={() => {
          removeRecipeId(`${el._id}`);
        }}
        type="button"
      >
        <WrapperIconRemove />
      </BtnRemove>
      <BtnDetail $pageName={pageName} to={`/recipe/${el._id}`}>
        See recipe
      </BtnDetail>
    </Item>
  ));
};

export default MyRecipesItem;
