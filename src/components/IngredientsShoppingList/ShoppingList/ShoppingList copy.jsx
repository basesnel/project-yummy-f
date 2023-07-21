import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import { WrapperList } from './ShoppingList.styled';

import { getStore } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';

import { nanoid } from 'nanoid';

import API from 'api';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const { store } = useAuth();

  useEffect(() => {
    dispatch(getStore());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prepStore = inStore => {
    const outStore = inStore.map(({ id, measure, recipeId }) => {
      return {
        shopId: nanoid(),
        ...id,
        measure: measure[0],
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

  const ingStore = store && prepStore(store);

  const handleClick = shopId => {
    const { _id, measure, recipeId } = ingStore.find(
      item => item.shopId === shopId
    );
    const value = { id: _id, measure: [measure], recipeId };
    toggleRecipeIngredient(value);
    dispatch(getStore());
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
