import './searchbar.css';
import { useContext } from 'react';
import PokemonContext from '../PokemonContext';
import axios from 'axios';

const SearchBar = () => {

    const { setPokeData } = useContext(PokemonContext);

    const pokeAxios = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/'
    })
    
    const handler = (async (e) => {
        e.preventDefault();
        const responseData = await fetchPokeData(`pokemon/${e.target[0].value.toLowerCase()}`);
        console.log(responseData)
        const responseChar = await fetchPokeChar(`characteristic/${responseData.id}`)
        console.log(responseChar)
        setPokeData({
            name: responseData.name,
            height: responseData.height,
            weight: responseData.weight,
            abilities: responseData.abilities[0].ability.name + ' & ' + responseData.abilities[1].ability.name,
            type: responseData.types[0].type.name,
            description: responseChar.descriptions[7].description,
            sprite: responseData.sprites.front_default,
            species: responseData.species.name,
            cries: [responseData.cries.latest, responseData.cries.legacy]
        })
    })

    const fetchPokeData = async (x) => {
        try {
            const response = await pokeAxios.get(x)
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }

    const fetchPokeChar = async (x) => {
        try {
            const response = await pokeAxios.get(x)
            return response.data;
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