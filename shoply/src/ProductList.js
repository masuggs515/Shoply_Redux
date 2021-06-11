import './ProductList.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartAdders from './CartAdders';

const ProductList = () => {
    const products = useSelector(s => s.products);
    const productIds = Object.keys(products);

    const listOfProduct = productIds.map(id => (
        <div className='item' key={id}>
            <Link className='cart-link' to={`products/${id}`}>{products[id].name}</Link> ${products[id].price}
            <CartAdders id={id} />
        </div>
    ));

    return (
        <div>
            <h1>Products</h1>
            <div className='ProductList'>
                <div className='ProductList-list'>
                    {listOfProduct}
                </div>
            </div>
        </div>
    )
}

export default ProductList;