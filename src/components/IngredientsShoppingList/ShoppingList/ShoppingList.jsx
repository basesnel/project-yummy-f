import { WrapperList } from './ShoppingList.styled';

const ShoppingList = ({ children }) => {
  return <WrapperList>{children}</WrapperList>;
};

export default ShoppingList;