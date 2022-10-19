import ACTION from './Action';

const dataReducer = (state, action) => {
   switch (action.type) {
      case ACTION.FETCH_PRODUCT:
         return { ...state, products: action.products, isDataRequestProcessed: action.isDataRequestProcessed };
      case ACTION.FETCH_FAILED:
         return {...state, isDataRequestProcessed: action.isDataRequestProcessed };
      case ACTION.ADD_TO_CART:
         return { ...state, cart: [...state.cart, action.item] };
      case ACTION.REMOVE_FROM_CART:
         return { ...state, cart: state.cart.filter((item) => item._id !== action._id) };
      case ACTION.INCREMENT_QNTY:
         return {
            ...state,
            cart: state.cart.map((item) => {
               if (item._id === action._id && item.requiredQuantity >= item.quantity) {
                  alert('Your requirement exceeds Availability');
                  return item;
               }
               if (item._id === action._id) return { ...item, requiredQuantity: item.requiredQuantity + 1 };
               return item;
            }),
         };
      case ACTION.DECREMENT_QNTY:
         return {
            ...state,
            cart: state.cart.map((item) => {
               if (item._id === action._id && item.requiredQuantity <= 1) {
                  alert("Item should have minimum quantity, Click 'Remove' to delete item from Cart");
                  return item;
               }
               if (item._id === action._id) return { ...item, requiredQuantity: item.requiredQuantity - 1 };
               return item;
            }),
         };
      default:
         return state;
   }
};

const filterReducer = (state, action) => {
   switch (action.type) {
      case ACTION.IS_COLOR:
         return { ...state, [action.color]: !state[action.color] };
      case ACTION.SEARCH_ITEM:
         return { ...state, searchQuerry: action.text };
      case ACTION.IS_TYPE:
         return { ...state, [action.typeOfDress]: !state[action.typeOfDress] };
      case ACTION.IS_GENDER:
         return { ...state, gender: action.gender };
      case ACTION.IS_PRICE:
         return { ...state, lowEndPrice: action.lowEndPrice, highEndPrice: action.highEndPrice };
      case ACTION.CLEAR_FILTER:
         return {
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
      default:
         return state;
   }
};

export { dataReducer, filterReducer };
