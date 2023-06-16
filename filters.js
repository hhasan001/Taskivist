// Set up filters default object
const filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters=()=> filters
// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none

const setFilters=({newSearchText,newHideCompleted}=updates) => {//destructuring
    if( typeof newSearchText==='string'){
        filters.searchText=newSearchText
    }
    if(typeof newHideCompleted==='boolean'){
        filters.hideCompleted=newHideCompleted
    }

}
// Make sure to set up the exports
export {setFilters, getFilters}