import Filter from './components/products-page/Filter';
import Search from './components/products-page/Search';
import Cards from './components/products-page/Cards';
import Cart from './components/cart-page/Cart';
import './styles/common-styles.css';
import './styles/product-page.css';
import './styles/cart-page.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
   return (
      <div className='App'>
         <Header />
         <Routes>
            <Route
               path='/'
               element={
                  <div className='main-content'>
                     <Filter />
                     <Search />
                     <Cards />
                  </div>
               }
            />

            <Route
               path='/cart'
               element={
                  <div className='main-content'>
                     <Cart />
                  </div>
               }
            />
         </Routes>
         <Footer />
      </div>
   );
};
export default App;
