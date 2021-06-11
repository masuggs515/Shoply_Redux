import { useDispatch } from "react-redux";

const CartAdders = ({ id }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button className='add-button'
                onClick={() => dispatch({ type: 'ADD_TO_CART', id: id })}>
                Add to Cart
                    </button>
            <button className='delete-button'
                onClick={() => dispatch({ type: 'DELETE_FROM_CART', id: id })}>
                Remove from Cart
                    </button>
        </div>
    )
};

export default CartAdders;