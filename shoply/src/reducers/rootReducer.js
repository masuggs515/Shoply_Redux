import data from '../data.json'
const INITIAL_STATE = {
    cartItems: {},
    products: data.products
};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const cartCopy = { ...state.cartItems }
            cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
            return { ...state, cartItems: cartCopy }

        case 'DELETE_FROM_CART':
            const cartCopyD = { ...state.cartItems };
            if (!cartCopyD[action.id]) return state;
            cartCopyD[action.id]--;
            if (cartCopyD[action.id] === 0) {
                delete cartCopyD[action.id]
            };
            return {
                ...state,
                cartItems: cartCopyD
            };
        default:
            return state;
    }

}

export default rootReducer;