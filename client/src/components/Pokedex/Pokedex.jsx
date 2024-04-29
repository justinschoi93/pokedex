import './pokedex.css';
import axios from 'axios';
import { useState, useEffect } from 'react';




const Pokedex = () => {
    const [pokemon, setPokemon] = useState('pikachu');
    const [sprite, setSprite] = useState({});
    const [searchForm, setSearchForm] = useState({});

    
    const pokedex = {
        axios: axios.create({baseURL: 'https://pokeapi.co/api/v2/'}),
        getSprite: async function (name) {
            try {
                const response = await this.axios.get(`pokemon/${name}`);
                const sprites = response.data.sprites;
                setSprite({front_default: sprites.front_default});
            } catch (error) {
                console.error(error);
            }
        }
    }
    
    
    
    useEffect(() => {
        (async () => {      // will setSprite
            await pokedex.getSprite(pokemon);
        })();
    }, [pokemon])
    

    const handleInputChange = (e) => {
        e.preventDefault;

        setSearchForm(e.target.value);
    }

    const searchBarHandler = (e) => {
        e.preventDefault();

        setPokemon(e.target.value);
    } 


    
    return (
        <div>
            <h1>Pokedex</h1>
            <div className="sprites pikachu-sprite">
                <div className="sprite-card" key={pokemon}>
                    <img src={sprite} alt={"front_default"} className={`${pokemon}-sprite`} />
                    <p className="sprite-key">{pokemon}</p>
                </div>
            </div>
            <form onSubmit={searchBarHandler}>
                <input 
                    type="text" 
                    value={searchForm} 
                    onChange={handleInputChange} 
                    className="searchBar__input" 
                    placeholder="Search for a Pokemon"
                />
                <button type="submit" className="searchBar__button">Search</button>
            </form>
        </div>
    )
}

export default Pokedex;


