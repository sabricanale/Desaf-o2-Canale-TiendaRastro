import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/CartWidget/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <ItemListContainer greeting='¡Hola!'/>    
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
