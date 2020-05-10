import * as React from 'react';
import { toJS } from 'mobx';

export interface IFoodOption {
  name: string;
  price: string;
  category: string;
  rating: number;
  id: number;
}

export interface IFoodItem {
  index:number;
  resetSelection: boolean;
  foodItem: IFoodOption;
  onAddFoodItem: (selected: boolean, foodItem: IFoodOption) => void;
}

export const FoodRow: React.FC<IFoodItem> = props => {
  const { foodItem, onAddFoodItem, index, resetSelection } = props;
  const { price, name, category, rating } = foodItem;
  const [ selected, setSelected ] = React.useState(false);

  React.useEffect(() => {
    if(resetSelection) {
      setSelected(false);
    }
  },[resetSelection]);

  const onClickAdd = () => {
    setSelected(!selected);
    onAddFoodItem(!selected, foodItem);
  }

  return (
    <tr key={'item' + index} className="food-row">
     <td >{name}</td>
     <td>{price}</td>
     <td>{category}</td>
     <td>{rating}</td>
     <td><input type="checkbox" onChange={onClickAdd} checked={selected}/></td>
    </tr>
  );
}