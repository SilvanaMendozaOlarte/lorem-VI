import React from 'react'

const Search = ({filters, setFilters}) => {
  return ( 
    <div>
      <input value={filters || ''}
      onChange={e => setFilters(e.target.value)}
      type="text" 
      variant="filled" 
      placeholder="Search" 
      borderRadius={5}/>
    </div>
   );
}
 
export default Search;
