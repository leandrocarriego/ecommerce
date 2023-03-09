import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>
      </main>
    </div>
  );
}

export default App;
