import * as React from 'react';
import { IFoodOption, FoodRow } from './food-row';
import { FoodContext } from '../App';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

export interface IFoodItemTable {
}

export const FoodItemTable: React.FC<IFoodItemTable> = observer(props => {
  const foodListStore = React.useContext(FoodContext) as any;
  const  foodItemList: IFoodOption[]  = foodListStore.foodItemList;
  const resetSelection = foodListStore.resetSelections;
  const onAddFoodItem = (selected: boolean, foodItem: IFoodOption) => {
    foodListStore.setItemsAddedToCart(selected, foodItem);
  }

  return (
    <div className="food-item-table">
      <table className="list">
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Rating</th>
          <th>Add to Order</th>
        </tr>
        </thead>
        <tbody>
        {foodItemList.map((item, index) => {
          return <FoodRow foodItem={item} onAddFoodItem={onAddFoodItem} index={index} key={index} resetSelection={resetSelection}/>
        })}
        </tbody>
      </table>
    </div>
  );
})
 
