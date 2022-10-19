import { useContext } from 'react';
import ACTION from '../../data-management/Action';
import { DataContext } from '../../data-management/Context';

const Search = () => {
     const {
          filter: { searchQuerry },
          dispatchFilter,
     } = useContext(DataContext);

     return (
          <div className='search-bar'>
               <input
                    type='text'
                    placeholder='search for products...'
                    className='search-box'
                    onChange={(e) => {
                         dispatchFilter({ type: ACTION.SEARCH_ITEM, text: e.target.value });
                    }}
                    value={searchQuerry}
               />
          </div>
     );
};

export default Search;
