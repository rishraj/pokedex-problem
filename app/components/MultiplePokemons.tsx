import { Typography } from "@mui/material";
import PokedexTable from "./PokedexTable";
import React from "react";

type MultiplePokemonProps = {
  pokemonNames: string | string[];
}

// Handles the case of empty pokemon list
function MultiplePokemons({pokemonNames}: MultiplePokemonProps){
  if (pokemonNames.length !== 0) {
    console.log('buttonClickData at multiple pokemons(value of state of buttonclick data?)', pokemonNames)
    return <PokedexTable pokemonArray={pokemonNames as string[]} pokemonType={'all'}/>
  }
  else {
    return <Typography sx={{mb: 3}}>No pokemon Selected</Typography>
  }
}

export default React.memo(MultiplePokemons)