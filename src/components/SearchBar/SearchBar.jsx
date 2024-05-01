import './searchbar.css';
import { useContext } from 'react';
import PokemonContext from '../PokemonContext/PokemonContext';
import axios from 'axios';

const SearchBar = () => {

    const { pokeData, setPokeData, 
        pokeChar, setPokeChar, 
        setPokemon} = useContext(PokemonContext);

    const pokeAxios = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/'
    })
    
    const handler = (async (e) => {
        e.preventDefault();
        await fetchPokeData(`pokemon/${e.target[0].value.toLowerCase()}`);
        console.log(pokeData)
        await fetchPokeChar(`characteristic/${pokeData.id}`)
        console.log(pokeChar)
        setPokemon({
            name: pokeData.name,
            height: pokeData.height,
            weight: pokeData.weight,
            abilities: pokeData.abilities[0].ability.name + ' & ' + pokeData.abilities[1].ability.name,
            type: pokeData.types[0].type.name,
            description: pokeChar.descriptions[7].description,
            sprite: pokeData.sprites.front_default,
            species: pokeData.species.name
        })
    })

    const fetchPokeData = async (x) => {
        try {
            const response = await pokeAxios.get(x)
            setPokeData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const fetchPokeChar = async (x) => {
        try {
            const response = await pokeAxios.get(x)
            setPokeChar(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handler}>
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;