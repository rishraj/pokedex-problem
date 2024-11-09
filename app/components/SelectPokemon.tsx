'use client'

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SinglePokemon from './SinglePokemon';
import allPokemonData from '../utilities/data';
import { Button } from '@mui/material';

// Gets the type of pokemon from the client
export default function SelectPokemon() {
  const [buttonClickData, setButtonClickData] = useState<string | null>('');

  const [data, setData] = useState<string | null>(null);

  const handleChange = (_: React.SyntheticEvent, pokemonName: string | null) => {
    console.log('value of state of autocomplete data', pokemonName)
    setData(pokemonName)
  }

  const handleSubmit = () => {
    console.log('value of state of buttonclick data', data)
    setButtonClickData(data)
  }

  return (
    <>
      <Autocomplete
        disablePortal
        options={allPokemonData.map(pokemon => pokemon.name)}
        sx={{ width: 300 }}
        onChange= {handleChange}
        renderInput={(params) => <TextField {...params} label="Select Single Pokemon" />}
      />
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 1, width: 100,}}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <SinglePokemon pokemonName={buttonClickData}/>
    </>
  );
}