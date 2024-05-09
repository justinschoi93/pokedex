import Pokedex from './components/Pokedex/Pokedex'
import SearchBar from './components/Pokedex/SearchBar/SearchBar'
import PokemonContext from './components/Pokedex/PokemonContext'
import { useState } from 'react'
import './App.css'

function App() {
  const [pokeData, setPokeData] = useState({});
  const [pokemon, setPokemon ] = useState([]);

  return (
    <PokemonContext.Provider value={{ pokeData, setPokeData, pokemon, setPokemon }}>
      <SearchBar/>
      <Pokedex/>
    </PokemonContext.Provider>
  )
}

export default App
