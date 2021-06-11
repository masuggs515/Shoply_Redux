import { useSelector } from "react-redux";
import CartAdders from "./CartAdders";
import './Cart.css'
import { calcCartTotal } from "./helpers";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, products } = useSelector(s => s);
    let cartProducts = Object.keys(cartItems)
    const cartList = cartProducts.map(item => {
        return (<div className='Cart-item' key={item}>
             {cartItems[item]} {cartItems[item] > 1 ? `${products[item].name}s` : `${products[item].name}`}
            <CartAdders id={item}/>
        </div>
        )
    });
    const totalPrice = calcCartTotal(cartItems, products)

    return (
        <div className='Cart'>
            <h1>{totalPrice === 0 ? <Link to='/'>Click here to add our great products!</Link> 
            :`Cart Total: ${totalPrice}`}</h1>
            {cartList}
        </div>
    );
};

export default Cart;