import { Typography } from "@mui/material";
import PokedexTable from "./PokedexTable";
import React from "react";

interface MultiplePokemonProps {
  pokemonNames: string | string[];
}

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