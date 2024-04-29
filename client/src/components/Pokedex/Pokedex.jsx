import './pokedex.css';
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

function searchBarHandler(name) {
    setPokemon(name);
}

const Pokedex = () => {
    const [pokemon, setPokemon] = useState('pikachu');
    const [sprites, setSprites] = useState([]);

    useEffect(() => {
        let newSprites = [];

        (async () => {
            const response = await pokedex.getSprites('pikachu');

            Object.entries(response).forEach( entry => {
                newSprites.push({[entry[0]]: entry[1]});
            })
            
            setSprites(newSprites);
        })();
    }, [pokemon])
    
    return (
        <div>
            <h1>Pokedex</h1>
            <div className="sprites pikachu-sprite">
                {/* {console.log(Object.keys(sprites[0]), Object.values(sprites[0]))} */}
                {sprites.map( sprite => {
                    return (
                        <div className="sprite-card">
                            <img src={Object.values(sprite)} alt={Object.keys(sprite)} className={`${Object.keys(sprite)}-sprite`} />
                            <p className="sprite-key">{Object.keys(sprite)}</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Pokedex;


