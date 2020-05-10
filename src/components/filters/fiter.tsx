import * as React from 'react';

export interface IFiler {
  filter: string;
  index: number;
  resetSelection: boolean;
  onFilterSelect: (selected: boolean, filter: string) => void;
}

export const Filter: React.FC<IFiler> = props => {
  const { filter, onFilterSelect, index, resetSelection } = props;
  const [ select, setSelect ] = React.useState(false); 
  const onSelection = () => {
    setSelect(!select);
    onFilterSelect(!select, filter)
  }

  React.useEffect(() => {
    if(resetSelection) {
      setSelect(false);
    }
  },[resetSelection])

  return (
    <div key={index+ 'filter'}>
      <label>
       {filter} 
      <input type="checkbox" checked={select} onChange={onSelection}/>
      </label>
      </div> 
  );
}