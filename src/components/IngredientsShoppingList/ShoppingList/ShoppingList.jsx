import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import { WrapperList } from './ShoppingList.styled';

import { getStore } from 'redux/auth/operations';
// import { patchStore } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';

import API from 'api';

const ShoppingList = ({ shopping }) => {
  const dispatch = useDispatch();

  const prepStore = inStore => {
    const outStore = inStore.map(({ id, measure, recipeId }) => {
      return {
        shopId: nanoid(),
        ...id,
        measure,
        recipeId: recipeId,
      };
    });

    return outStore;

    // return [
    //   ...outStore
    //     .reduce((ingredients, item) => {
    //       if (!ingredients.has(item._id))
    //         ingredients.set(item._id, { ...item, count: 0 });
    //       ingredients.get(item._id).count++;
    //       return ingredients;
    //     }, new Map())
    //     .values(),
    // ];
  };

  const toggleRecipeIngredient = async data => {
    try {
      const res = await API.toggleProduct(data.id, data.measure, data.recipeId);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const ingStore = shopping && prepStore(shopping);

  const handleClick = shopId => {
    const { _id, measure, recipeId } = ingStore.find(
      item => item.shopId === shopId
    );
    const value = { id: _id, measure, recipeId };
    toggleRecipeIngredient(value);
    // dispatch(patchStore(value));
    dispatch(getStore());
    dispatch(getStore());
    // .unwrap()
    // .then(originalPromiseResult => {
    //   dispatch(getStore());
    // })
    // .catch(rejectedValueOrSerializedError => {});
  };

  return (
    <WrapperList>
      {ingStore &&
        ingStore.map(({ shopId, _id, name, img, measure, recipeId }) => (
          <ShoppingListItem
            key={shopId}
            ingId={_id}
            name={name}
            img={img}
            measure={measure}
            recipeId={recipeId}
            handleClick={() => handleClick(shopId)}
          />
        ))}
    </WrapperList>
  );
};

export default ShoppingList;
