'use client';

import { Autocomplete, Button, TextField } from "@mui/material";
import allPokemonData from "../utilities/data";
import { useState } from "react";


type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type:string | undefined) => void;
}

export default function PokemonTypeSelection ({ selectedType, selectType}: PokemonTypeSelectionProps){

  const [autocompleteData, setAutocompleteData] = useState<string | null>('');

  const handleChange = (_: React.SyntheticEvent, pokemonType: string | null) => {
    console.log('value of state of type autocomplete data', pokemonType)
    setAutocompleteData(pokemonType)
  }

  const handleSubmit = () => {
    if (autocompleteData) {
      selectType(autocompleteData)
    }
    else {
      selectType(undefined)
    }
  }


  return (
    <>
      <Autocomplete
        disablePortal
        options={[...new Set(allPokemonData.map(pokemon => pokemon.type))]}
        sx={{ width: 300 }}
        onChange= {handleChange}
        renderInput={(params) => <TextField {...params} label="Select Pokemon Type" />}
      />
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 1, width: 100,}}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <p>The selected type is: {selectedType}</p>
    </>
  );
}