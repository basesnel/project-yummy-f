import {
  Item,
  Photo, 
  Text,
  WrapperDescription,
  WrapperPhoto,  
  BtnRemove,
 
  
} from './ShoppingListItem.styled';

const ShoppingListItem = () => {
  return (
   <Item>
      <WrapperPhoto>
        <Photo alt="photo recipe" />
      </WrapperPhoto>
      <WrapperDescription>
        
        <Text>
          Salmon{' '}
        </Text>
        
        
      </WrapperDescription>
      <BtnRemove type="button">Icon</BtnRemove>
      
    </Item>
  );
};



export default ShoppingListItem;
