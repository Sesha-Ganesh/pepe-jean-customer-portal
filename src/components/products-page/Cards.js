import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ACTION from '../../data-management/Action';
import { DataContext } from '../../data-management/Context';

const Cards = () => {
   const { state, filter, dispatch } = useContext(DataContext);
   const [message, setMessage] = useState('Loading...');

   useEffect(() => {
      if (state.isDataRequestProcessed) setMessage((prev) => 'No Data Found');
   }, [state.isDataRequestProcessed]);

   const filteredProducts = () => {
      let modifiedProducts = [...state.products];
      if (filter.Red) modifiedProducts = modifiedProducts.filter((product) => product.color === 'red');
      if (filter.Blue) modifiedProducts = modifiedProducts.filter((product) => product.color === 'blue');
      if (filter.Green) modifiedProducts = modifiedProducts.filter((product) => product.color === 'green');
      if (filter.gender)
         modifiedProducts = modifiedProducts.filter((product) => product.gender === filter.gender);
      if (filter.Polo) modifiedProducts = modifiedProducts.filter((product) => product.type === 'polo');
      if (filter.Hoodie) modifiedProducts = modifiedProducts.filter((product) => product.type === 'hoodie');
      if (filter.Basic) modifiedProducts = modifiedProducts.filter((product) => product.type === 'basic');
      if (filter.searchQuerry)
         modifiedProducts = modifiedProducts.filter((product) =>
            product.name.toLowerCase().includes(filter.searchQuerry.toLowerCase())
         );
      if (filter.highEndPrice)
         modifiedProducts = modifiedProducts.filter((product) => {
            return filter.lowEndPrice < product.price && product.price < filter.highEndPrice;
         });

      return modifiedProducts;
   };

   return (
      <div className='cards'>
         {state.products.length ? (
            filteredProducts().map((product) => {
               return (
                  <div key={product._id} id={product._id} className='card component-container'>
                     <img className='item-image' src={product.imageURL} alt='NoImage' />
                     <div className='component'>
                        <div className='title-text'>{product.name}</div>
                        <div className='content-text'>
                           ₹ {product.price}
                        </div>

                        { !product.quantity ? <button className='disabled-button' disabled>Out of Stock</button>
                        : (state.cart.some((item) => item._id === product._id) ? (
                           <button
                              className='warn-button'
                              onClick={() => dispatch({ type: ACTION.REMOVE_FROM_CART, _id: product._id })}>
                              Remove
                           </button>
                        ) : (
                           <button
                              className='button add-button'
                              onClick={() =>
                                 dispatch({
                                    type: ACTION.ADD_TO_CART,
                                    item: { ...product, requiredQuantity: 1 },
                                 })
                              }>
                              Add to Cart
                           </button>
                        ))}
                     </div>
                  </div>
               );
            })
         ) : (
            <p className='message-text'>{message}</p>
         )}
      </div>
   );
};
export default Cards;
