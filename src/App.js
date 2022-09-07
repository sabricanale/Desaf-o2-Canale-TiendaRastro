import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/CartWidget/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  
  return (
    <div className="App">
      <NavBar/>      
      <ItemListContainer greeting='Productos'/>    
      <ItemCount/>
      
      
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
