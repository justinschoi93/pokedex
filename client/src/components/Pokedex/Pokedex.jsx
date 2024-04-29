// import './pokedex.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const pokedex = {
    axios: axios.create({baseURL: 'https://pokeapi.co/api/v2/'}),
    getSprites: async function (name) {
        try {
            const response = await this.axios.get(`pokemon/${name}`);
            const sprites = response.data.sprites;

            return sprites;
        } catch (error) {
            console.error(error);
        }
    }
}

const Pokedex = () => {
    const [pokemon, setPokemon] = useState('pikachu');
    const result = []

    useEffect(() => {
        (async () => {
            const sprites = await pokedex.getSprites('pikachu');

            Object.entries(sprites).forEach( array => {
                result.push({[array[0]]: array[1]});
            })
            console.log(result);
        })();

        
    }, [])

    return (
        <div>
            <h1>Pokedex</h1>
            <div className="pikachu-sprite">
                {/* {sprites.forEach( sprite => {
                    return (
                        <img src={sprite.value} alt={sprite.key} className={`pikachu__sprite ${sprite.key}`} />
                    )
                })
                } */}
            </div>
        </div>
    )
}

export default Pokedex;


