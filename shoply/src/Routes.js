import { Redirect, Route, Switch } from "react-router"
import Cart from "./Cart";
import ProductList from "./ProductList"
import ProductDetails from './ProductDetails'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/cart'>
                <Cart />
            </Route>
            <Route path='/products/:id'>
                <ProductDetails />
            </Route>
            <Route exact path='/'>
                <ProductList />
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
};

export default Routes;