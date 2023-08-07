import Dish from "./components/dishes";
import MenuList from "./components/menu";
import Navbar from "./components/navbar";
import Cart from "./context/CartContext";
import './App.css'


function App() {

  return (
    <div id="app" >
    <Cart>

      
      <Navbar    />
      <MenuList />
      <Dish />
    
    </Cart>
    </div>
  );
}

export default App;
