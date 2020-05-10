import React, { createContext } from 'react';
import logo from './logo.svg';
import { FoodItemTable } from './components/food-item-table';
import {inject, observer, Provider} from 'mobx-react';
import FoodStoreInstance from './store/food-store';
import { OrderSummary } from './components/order-summary';
import { FilterList } from './components/filters/filter-list';

export interface IFoodApp {
  foodStoreValue?: any;
}
export const FoodContext:any = createContext(null);
const App: React.FC <IFoodApp> = props => {
  
  // const { foodStoreValue } = props;
  return (
    <div className="burger-app">
      <h1> Food Items </h1>
      <FoodContext.Provider value={FoodStoreInstance} >
        <div className="layout">
          <FilterList />
          <FoodItemTable/>
          <OrderSummary />
        </div>
      </FoodContext.Provider>
    </div>
  );
}

export default observer(App);
