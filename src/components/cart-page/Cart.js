import { useContext, useEffect, useState } from 'react';
import ACTION from '../../data-management/Action';
import { DataContext } from '../../data-management/Context';
import Checkout from './Checkout';

const Cart = () => {
   const {
      state: { cart },
      dispatch,
      dispatchFilter,
   } = useContext(DataContext);

   const [total, setTotal] = useState(0);

   useEffect(() => {
      let subtotal = cart.reduce((total, current) => {
         return (total += current.price * current.requiredQuantity);
      }, 0);
      setTotal(subtotal);
   }, [cart]);

   useEffect(() => {
      dispatchFilter({ type: ACTION.CLEAR_FILTER });
   }, []);
   
   return (
      <>
         <div className='cart component-container'>
            {cart.length ? (
               cart.map((product) => (
                  <div className='cart-product component' key={product._id}>
                     <img src={product.imageURL} alt={product.name} className='cartItem-image' />
                     <div>
                        <p className='title-text'>{product.name}</p>
                        <p className='content-text'>
                           ₹ {product.price}
                        </p>
                     </div>
                     <div className='quantity'>
                        <button className='quantity-button' onClick={() => dispatch({ type: ACTION.DECREMENT_QNTY, _id: product._id })}>
                           -
                        </button>
                        <input className='quantity-box' readOnly value={product.requiredQuantity}></input>
                        <button className='quantity-button' onClick={() => dispatch({ type: ACTION.INCREMENT_QNTY, _id: product._id })}>
                           +
                        </button>
                     </div>
                     <button className='warn-button' onClick={() => dispatch({ type: ACTION.REMOVE_FROM_CART, _id: product._id })}>
                        Remove
                     </button>
                  </div>
               ))
            ) : (
               <p className='message-text'>Cart is Empty ! ! !</p>
            )}
         </div>
         <Checkout total={total} />
      </>
   );
};
export default Cart;
