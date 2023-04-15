import Main from './Components/Main';
import './Components/style.css'




//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  /*const [selectedPokemon, setSelectedPokemon]=useState([]);*/

  return (
    <>
    
      <Main/>
    </>
    //no me funcionó :(
      /*<Router>
      <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
        </Switch>
      </PokemonContext.Provider>
    </Router>
    */
      
  );
}

export default App;