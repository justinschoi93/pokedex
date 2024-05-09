import './searchbar.css';
import { useContext, useEffect } from 'react';
import PokemonContext from '../PokemonContext';
import axios from 'axios';

const SearchBar = () => {

    const { setPokeData, pokemon, setPokemon } = useContext(PokemonContext);

    const pokeAxios = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/'
    })

    useEffect(() => {
        for ( let i = 1; i < 151; i++ ) {
            fetchPokeData(`pokemon/${i}`).then( response => setPokemon(prev => [...prev, response.name]));
        }
    }, []);
    
    const handler = (async (e) => {
        e.preventDefault();
        const responseData = await fetchPokeData(`pokemon/${e.target[0].value.toLowerCase()}`);
        console.log(responseData)
        const responseChar = await fetchPokeChar(`characteristic/${responseData.id}`)
        console.log(responseChar)
        if (responseChar){
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
        } else {
            setPokeData({
                name: responseData.name,
                height: responseData.height,
                weight: responseData.weight,
                abilities: responseData.abilities[0].ability.name + ' & ' + responseData.abilities[1].ability.name,
                type: responseData.types[0].type.name,
                sprite: responseData.sprites.front_default,
                species: responseData.species.name,
                cries: [responseData.cries.latest, responseData.cries.legacy]
            })
        }
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
            <select name="select__menu" id="select__menu" className="select__menu">
               {pokemon.map((pokemon, index) => {
                     return <option key={index} value={index + 1}>{pokemon}</option>
               })}
                
            </select>
            {/* <input type="text" placeholder="Search..." /> */}
            <button type="submit">Search</button>
        </form>
        // <form onSubmit={handler}>
        //     <input type="text" placeholder="Search..." />
        //     <button type="submit">Search</button>
        // </form>
    )
}

export default SearchBar;