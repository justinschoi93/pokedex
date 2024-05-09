import Pokedex from './components/Pokedex/Pokedex'
import SearchBar from './components/Pokedex/SearchBar/SearchBar'
import PokemonContext from './components/Pokedex/PokemonContext'
import { useState } from 'react'
import './App.css'

function App() {
  const [pokeData, setPokeData] = useState({})

  return (
    <PokemonContext.Provider value={{ pokeData, setPokeData }}>
      <Pokedex/>
      <SearchBar/>
    </PokemonContext.Provider>
  )
}

export default App
