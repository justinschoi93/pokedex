import './pokedex.css'
import { useContext } from 'react'
import PokemonContext from './PokemonContext'

const Pokedex = () => {
  const { pokeData } = useContext(PokemonContext);

    return (
        <div className="pokedex__container">
            <div className="screen">
              <img src={pokeData.sprite} alt={pokeData.species} height="170" />
            </div>
        <div id="right">
          <div id="stats">
            <strong>Name: </strong>{pokeData.name}<br/>
            <strong>Type: </strong>{pokeData.type}<br/>
            <strong>Height: </strong>{pokeData.height}<br/>
            <strong>Weight: </strong><br/>{pokeData.weight}<br/>
            <strong>Description: </strong>{pokeData.description}<br/>
            <strong>Abilities: </strong><br/>{pokeData.abilities}<br/>
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