// import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/itemList";
// import { Home } from "./components/pages/home/home";
// import Cart from "./components/pages/cart/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Este es el main</h1>
      <ItemList />

      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
