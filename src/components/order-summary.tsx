import * as React from 'react';
import { FoodContext } from '../App';
import { toJS } from 'mobx'; 
import { OrderSummaryFoodItems } from './order-summary-food-items';
import { observer } from 'mobx-react';
export interface IOrderSummary {
  
}

export const OrderSummary: React.FC<IOrderSummary> = observer(props => {
  const foodStore = React.useContext(FoodContext) as any;
  const foodListInCart = foodStore.listAddedToCart;
  const totalPrice = foodStore.totalPrice;

  const onConfirm = () => {
    alert('your order will be delivered in X time');
    foodStore.resetList();
  }


  return (
    <div className="order-summary">
      <table>
        <thead>
          <tr>
          <th>Food Item</th>
          <th>Price</th>
          </tr>
        </thead>
        <tbody>
            <OrderSummaryFoodItems listOfFoodItems={foodListInCart}/>
        </tbody>
      </table>
      Total Price to Pay: {totalPrice}$
      <div><button onClick={onConfirm}>Confirm Order</button></div>
    </div>
  );
});
