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
} from './MyRecipesItem.styled';

const MyRecipesItem = () => {
  return (
    <Item>
      <WrapperPhoto>
        <Photo alt="photo recipe" />
      </WrapperPhoto>
      <WrapperDescription>
        <Title>Salmon Eggs Benedict</Title>
        <Text>
          Salmon eggs are rich in essential nutrients, low in calories, and
          recommended as part of a healthy diet. Including salmon in a balanced
          diet can help decrease the chances of heart disease, ease
          inflammation, and more.{' '}
        </Text>
        <Text>
          Studies have shown a number of potential health benefits to seafood
          rich in omega-3 fatty acids, which include salmon eggs.
        </Text>
        <TextTime>40 min</TextTime>
      </WrapperDescription>
      <BtnRemove type="button">Icon</BtnRemove>
      <BtnDetail type="button">See recipe</BtnDetail>
    </Item>
  );
};

export default MyRecipesItem;