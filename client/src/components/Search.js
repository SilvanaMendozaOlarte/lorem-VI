import React from 'react'

const Search = ({globalFilters, setGlobalFilters}) => {
  return ( 
    <div>
      <input value={globalFilters || ''}
      onChange={e => setGlobalFilters(e.target.value)}
      type="text" 
      variant="filled" 
      placeholder="Search" 
      borderRadius={5}/>
    </div>
   );
}
 
export default Search;
