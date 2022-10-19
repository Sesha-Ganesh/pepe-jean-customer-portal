import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../data-management/Context';

const Header = () => {
   const {
      state: { cart },
   } = useContext(DataContext);
   return (
      <div className='header component'>
         <div className='shop-name'>Pepe Jeans</div>

         <Link className='products-button button' to='/'>
            Products
         </Link>

         <Link className='cart-button button' to='/cart'>
            Cart {cart.length ? <span className='cart-notification'>{cart.length}</span> : null}
         </Link>
      </div>
   );
};
export default Header;
