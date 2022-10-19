const Checkout = ({ total }) => {
    return (
       <div className='checkout'>
          <div className='title-text'>SubTotal : {total} </div>
          <button className='checkout-button button'>CHECK-OUT</button>
       </div>
    );
 };

 export default Checkout;