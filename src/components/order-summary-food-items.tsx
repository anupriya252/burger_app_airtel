import * as React from 'react';
import { toJS } from 'mobx'; 
import { IFoodOption } from './food-row';

export interface IOrderSummaryItems {
  listOfFoodItems: IFoodOption[]
}


export const OrderSummaryFoodItems: React.FC<IOrderSummaryItems> = props => {
  const { listOfFoodItems } = props;
  return (
    <>
      {Object.keys(listOfFoodItems).map((item: any, index) => {
        const iteratedFoodItem = listOfFoodItems[item];

        return (
          <tr key={index}>
          <td>
           {iteratedFoodItem.name} 
          </td>
          <td>
            {iteratedFoodItem.price}
          </td>
          </tr>
        );
      })}
    </>
  );
}