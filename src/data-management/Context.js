import React, { createContext, useEffect, useReducer } from 'react';
import ACTION from './Action';
import { dataReducer, filterReducer } from './Reducers';

export const DataContext = createContext();

// let oldUrl = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
let url = 'http://localhost:8000/getdresses';
const Context = ({ children }) => {
   const [state, dispatch] = useReducer(dataReducer, {
      products: [],
      cart: [],
      isDataRequestProcessed: false,
   });
   const emptyFilter = {
      Red: false,
      Blue: false,
      Green: false,
      gender: '',
      lowEndPrice: '',
      highEndPrice: '',
      Polo: false,
      Hoodie: false,
      Basic: false,
      searchQuerry: '',
   };
   const [filter, dispatchFilter] = useReducer(filterReducer, emptyFilter);

   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) =>{
            console.log(data);
            dispatch({ type: ACTION.FETCH_PRODUCT, products: data['data'], isDataRequestProcessed: true })
         }
         )
         .catch((error) => {
            console.log(error);
            dispatch({ type: ACTION.FETCH_FAILED, isDataRequestProcessed: true });
         });
   }, []);

   return (
      <DataContext.Provider value={{ state, dispatch, filter, dispatchFilter }}>
         {children}
      </DataContext.Provider>
   );
};

export default Context;
