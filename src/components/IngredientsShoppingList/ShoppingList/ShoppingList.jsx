import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import { WrapperList } from './ShoppingList.styled';

const ShoppingList = ({ ...otherProps }) => {
  return (
    <WrapperList>
      <ShoppingListItem {...otherProps} />
    </WrapperList>
  );
};

export default ShoppingList;
