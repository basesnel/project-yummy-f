import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import { WrapperList } from './ShoppingList.styled';

import { getStore } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';

import { nanoid } from 'nanoid';

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
    console.log(outStore);

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

  const ingStore = store && prepStore(store);

  // console.log(ingStore);

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
          />
        ))}
    </WrapperList>
  );
};

export default ShoppingList;
