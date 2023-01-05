import { sortMap, filterMap } from "./filter-sort";

//function handles the clicking of the sort dropdown
export function clickSort(event, setSort){
    let id = (event.target.id);

    //if its not the dropdown
    if(id !== "navbarScrollingDropdown"){
      let sort = sortMap.get(id);
      setSort(sort);
    }
}

export function clickFilter(event, setFilter){
    let id = (event.target.id);

    //if its not the dropdown
    if(id !== "navbarScrollingDropdown"){
      let filter = filterMap.get(id)
      setFilter(filter);
    }
  }

