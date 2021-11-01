import axios from 'axios';
import { useEffect } from 'react';
import './app.css';

import { PokemonRequest } from './shared/types';

export function App() {
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get<PokemonRequest>(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      return res.data;
    };
    const pokemon = getPokemon();
    console.log(pokemon);
  }, []);

  return (
    <div>
      <h1 className="text-red-500">test</h1>
    </div>
  );
}

export default App;
