import * as React from 'react';
import { FoodContext } from '../../App';
import { toJS } from 'mobx'; 
import { observer } from 'mobx-react';
import { Filter } from './fiter';

export interface IFilterList {

}

export const FilterList: React.FC<IFilterList> = observer(props => {
  const foodStore = React.useContext(FoodContext) as any;
  foodStore.getFiltersList();
  const { filtersList, getFilterList, resetSelections } = foodStore ;
  const selectedFilter = {} as any;
  const onFilterSelect = (selected: boolean, filter: string) => {
    if(selected) {
      selectedFilter[filter] = filter;
    } else {
      delete selectedFilter[filter];
    }
    getFilterList(selectedFilter);
  }
  return (
    <div className="filter-list">
      <h2>Filter List</h2>
      {filtersList && Object.keys(filtersList).map((item: any, index) => {
          return  <Filter filter={item} onFilterSelect={onFilterSelect} index={index} key={index} resetSelection={resetSelections}/>
      })}
    </div>
  );
})