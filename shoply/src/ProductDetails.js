import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CartAdders from "./CartAdders";
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams('id')

    const {name, price, description, image_url} = useSelector(s => s.products[id])

    return (
        <div>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>{description}</p>
            <img alt={name}src={image_url} />
            <CartAdders id={id}/>
        </div>
    )
}

export default ProductDetails;