import React from 'react'

const Search = ({globalFilters, setGlobalFilters}) => {
  return ( 
    <div>
      <input className='search'
      value={globalFilters || ''}
      onChange={e => setGlobalFilters(e.target.value)}
      type="text" 
      variant="filled" 
      placeholder="Search" 
      style={{border: '1px solid black', borderRadius: '5px'}} 
      />
    </div>
   );
}
 
export default Search;
