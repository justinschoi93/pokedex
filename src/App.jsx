import Pokedex from './components/Pokedex/Pokedex'
import SearchBar from './components/SearchBar/SearchBar'
import PokemonContext from './components/PokemonContext/PokemonContext'
import { useState } from 'react'
import './App.css'

function App() {
  const [pokeData, setPokeData] = useState({})
  const [pokeChar, setPokeChar] = useState({})
  const [pokemon, setPokemon] = useState({})

  return (
    <PokemonContext.Provider value={{ pokeData, setPokeData, pokeChar, setPokeChar, pokemon, setPokemon }}>
      <Pokedex/>
      <SearchBar/>
    </PokemonContext.Provider>
  )
}

export default App
