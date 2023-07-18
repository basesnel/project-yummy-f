import {
  Item,
  MeasureAndCheckbox,
  
  WrapperPhoto,  
 
 
  
} from './ShoppingListItem.styled';

const ShoppingListItem = () => {
  return (
   <Item>
      <WrapperPhoto>
        <img
          src=""
          alt="product"
        />

        <p> product </p>
      </WrapperPhoto>

      <MeasureAndCheckbox>
        <div>
          <p> number</p>
        </div>
        <span>
          <svg>
            <use href="./images/svg/symbol-defs.svg#warning"></use>
          </svg>
        </span>
      </MeasureAndCheckbox>  
     
            
    </Item>
  );
};



export default ShoppingListItem;
