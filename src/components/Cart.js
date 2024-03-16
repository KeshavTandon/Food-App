import FoodItem from "./FoodItem";
import { useSelector,useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();

    const handleClick=()=>{
      dispatch(clearCart());
    };

    return (
        <>
        <button className="Cart_clear" onClick={()=>handleClick()}>Clear Cart</button>
        <div className="items">
        {cartItems.map(item=> <FoodItem key={cartItems.id} {...item}/>)}
        </div>
        </>
    );
};

export default Cart;