import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./containers/Home/Home";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="App bg-dark">
      <header className="App-header">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
