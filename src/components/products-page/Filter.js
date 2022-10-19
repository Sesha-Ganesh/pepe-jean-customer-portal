import { useContext, useState } from 'react';
import ACTION from '../../data-management/Action';
import { DataContext } from '../../data-management/Context';
const Filter = () => {
   const { filter, dispatchFilter } = useContext(DataContext);

   const [filterToggle, setFilterToggle] = useState(false);
   const filterColor = (e) => {
      dispatchFilter({ type: ACTION.IS_COLOR, color: e.target.value });
   };

   const filterType = (e) => {
      dispatchFilter({ type: ACTION.IS_TYPE, typeOfDress: e.target.value });
   };

   const handleClear = (e) => {
      dispatchFilter({ type: ACTION.CLEAR_FILTER });
   };
   const handleGender = (e) => {
      dispatchFilter({ type: ACTION.IS_GENDER, gender: e.target.value.toLowerCase() });
   };

   const handlePrice = (e) => {
      let numbers = e.target.value.split('-');
      let lowestNumber = Number(numbers[0]);
      let highestNumber = Number(numbers[1]);
      dispatchFilter({ type: ACTION.IS_PRICE, lowEndPrice: lowestNumber, highEndPrice: highestNumber });
   };
   const handleClick = () => {
      setFilterToggle((prev) => !prev);
   };
   return (
      <div
         className={
            filterToggle ? 'filter filter-visible component-container' : 'filter component-container'
         }>
         <div>
            <div className='filter-module component'>
               <div className='title-text'>Colour</div>
               <label htmlFor='color-one' className='content-text'>
                  <input
                     type='checkbox'
                     className='color-one'
                     onChange={filterColor}
                     value='Red'
                     checked={filter.Red}
                  />
                  Red
               </label>
               <label htmlFor='color-two' className='content-text'>
                  <input
                     type='checkbox'
                     className='color-two'
                     onChange={filterColor}
                     value='Blue'
                     checked={filter.Blue}
                  />
                  Blue
               </label>
               <label htmlFor='color-three' className='content-text'>
                  <input
                     type='checkbox'
                     className='color-three'
                     onChange={filterColor}
                     value='Green'
                     checked={filter.Green}
                  />
                  Green
               </label>
            </div>
            <div className='filter-module component'>
               <div className='title-text'>Gender</div>
               <label htmlFor='men-radio' className='content-text'>
                  <input
                     type='radio'
                     className='men-radio'
                     onChange={handleGender}
                     name='gender'
                     value='Men'
                     checked={filter.gender === 'men' ? true : false}
                  />
                  Men
               </label>
               <label htmlFor='women-radio' className='content-text'>
                  <input
                     type='radio'
                     className='women-radio'
                     onChange={handleGender}
                     name='gender'
                     value='Women'
                     checked={filter.gender === 'women' ? true : false}
                  />
                  Women
               </label>
            </div>
            <div className='filter-module component'>
               <div className='title-text'>Price</div>
               <label htmlFor='price-low' className='content-text'>
                  <input
                     type='radio'
                     className='price-low'
                     onChange={handlePrice}
                     name='price'
                     value='0-251'
                     checked={filter.highEndPrice === 251 ? true : false}
                  />
                  ₹250 and below
               </label>

               <label htmlFor='price-medium' className='content-text'>
                  <input
                     type='radio'
                     className='price-medium'
                     onChange={handlePrice}
                     name='price'
                     value='249-451'
                     checked={filter.highEndPrice === 451 ? true : false}
                  />
                  ₹250 - 450
               </label>

               <label htmlFor='price-high' className='content-text'>
                  <input
                     type='radio'
                     className='price-high'
                     onChange={handlePrice}
                     name='price'
                     value='449-Infinity'
                     checked={filter.highEndPrice === Infinity ? true : false}
                  />
                  ₹450 and above
               </label>
            </div>
            <div className='filter-module component'>
               <div className='title-text'>Type</div>
               <label htmlFor='polo' className='content-text'>
                  <input
                     type='checkbox'
                     className='polo'
                     onChange={filterType}
                     value='Polo'
                     checked={filter.Polo}
                  />
                  Polo
               </label>
               <label htmlFor='hoodie' className='content-text'>
                  <input
                     type='checkbox'
                     className='hoodie'
                     onChange={filterType}
                     value='Hoodie'
                     checked={filter.Hoodie}
                  />
                  Hoodie
               </label>
               <label htmlFor='basic' className='content-text'>
                  <input
                     type='checkbox'
                     className='basic'
                     onChange={filterType}
                     value='Basic'
                     checked={filter.Basic}
                  />
                  Basic
               </label>
            </div>
            <div className='component clear-filter-container'>
               <button className='clear-filter-button button' onClick={handleClear}>
                  Clear Filter
               </button>
            </div>
         </div>
         <div>
            <button onClick={handleClick} className='apply-filter-button'>
               {filterToggle ? <span>❌</span> : <span>FILTERS</span>}
            </button>
         </div>
      </div>
   );
};
export default Filter;
