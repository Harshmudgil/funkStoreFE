import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {
    
   const products = useSelector(state => state.cart.products);
   const dispatch = useDispatch();
   
   const total = () =>{
    let subTotal = 0;
    products.forEach((item) => (subTotal += item.quantity * item.price));
    
    return subTotal.toFixed(2);
   }
    
    return (
        <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item?.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity}
              <span> x </span>
             {item?.price}rs 
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={()=> dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>{total()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
    )
}

export default Cart