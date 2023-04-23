import './App.css';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundillo"/>
      <ItemCount/>
      <Vista/>
      <Mensaje/>
    </>
  );
}

export default App;
