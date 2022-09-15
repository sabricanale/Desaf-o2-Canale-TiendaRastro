import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';



function App() {
  const stock = 10
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>  
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Lista de todos los productos'/> }/>
        <Route path="/Categoría/:categoriaId" element={<ItemListContainer greeting='Productos por categoría' />}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
      </Routes>    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
