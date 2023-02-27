import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

//Components
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails";

//Context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./Components/shared/Navbar";
import ShopCart from "./Components/ShopCart";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/Cart" component={ShopCart} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
