import './pokedex.css'
import { useContext } from 'react'
import PokemonContext from '../PokemonContext/PokemonContext'

const Pokedex = () => {
  const { pokemon } = useContext(PokemonContext);
  console.log(pokemon)

    return (
        <div id="pokedex">
            <div id="picture">
              <img src={pokemon.sprite} alt={pokemon.species} height="170" />
            </div>
        <div id="right">
          <div id="stats">
            <strong>Name: </strong>{pokemon.name}<br/>
            <strong>Type: </strong>{pokemon.type}<br/>
            <strong>Height: </strong>{pokemon.height}<br/>
            <strong>Weight: </strong><br/>{pokemon.weight}<br/>
            <strong>Description: </strong>{pokemon.description}<br/>
            <strong>Abilities: </strong><br/>{pokemon.abilities}<br/>
          </div>
        </div>
      </div>
    )
}

export default Pokedex;

// name: pokeData.name,
            // height: pokeData.height,
            // weight: pokeData.weight,
            // abilities: pokeData.abilities[0].ability.name + ' & ' + pokeData.abilities[1].ability.name,
            // type: pokeData.types[0].type.name,
            // description: pokeChar.descriptions[7].description,
            // sprite: pokeData.sprites.front_default