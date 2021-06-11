export const totalQuantity = cart => {
    let total = 0;
    for (let id in cart) {
        total += cart[id];
    }
    return total;
}

export const calcCartTotal = (items, products) =>{
    let total = 0;
    const cartItems = Object.keys(items);
    for(let item of cartItems){
        total = total + (products[item].price * items[item])
    }
    return total;
};