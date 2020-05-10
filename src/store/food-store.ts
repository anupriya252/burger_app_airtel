
import { action, runInAction, observable } from 'mobx';
import { IFoodOption } from '../components/food-row';
import { foodResults } from '../mock-data/food-items-result';
import { toJS } from 'mobx';

  class FoodStore {

  @observable
  public selectedFoodItem: IFoodOption[] = [];

  @observable
  public foodItemList: IFoodOption[] = foodResults;

  @observable
  public listAddedToCart = { } as any;

  @observable
  public totalPrice: number = 0;

  @observable
  public resetSelections: boolean = false;

  @observable
  public filtersList = {} as any;

  @action
  public getFiltersList = () => {
    this.foodItemList.map((item: IFoodOption) => {
      this.filtersList[item.category] = item.category;
    });
  }

  @action
  public setItemsAddedToCart = (selected: boolean, foodOption: IFoodOption) => {
    this.resetSelections = false;
    this.totalPrice = 0;
    if(selected) {
      this.listAddedToCart[foodOption.id] = foodOption; 
    } else {
      delete this.listAddedToCart[foodOption.id];
    }
    Object.keys(this.listAddedToCart).map((item: any) => {
      const price = +(this.listAddedToCart[item]).price.slice(0,-1); // to remove $ from price and converting into the number
      this.totalPrice = this.totalPrice + price;
    })
  }

  @action
  public getFilterList = (selectedFilter: any) => {
    let selectedFilterList = [] as any;
    if(selectedFilter && Object.keys(selectedFilter).length > 0){
      Object.keys(selectedFilter).map((item) => {
        selectedFilterList = [ ...foodResults.filter(foodItem => foodItem.category === item), ...selectedFilterList];
      })
      this.foodItemList = [...selectedFilterList];
    }else {
      this.foodItemList = [...foodResults];
    }
  }

  @action
  public resetList() {
    this.listAddedToCart = {};
    this.totalPrice = 0;
    this.resetSelections = true;
    this.foodItemList = foodResults;
  }

}

const FoodStoreInstance = new FoodStore();
export default FoodStoreInstance;