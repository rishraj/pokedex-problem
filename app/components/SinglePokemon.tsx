import React from "react";
import PokemonRow from "./PokemonRow";
import { Typography } from "@mui/material";

type SinglePokemonProps = {
  pokemonName: string | null;
}

// Handles the case of no pokemon name given
function SinglePokemon({pokemonName}: SinglePokemonProps){

  if (pokemonName) {
    console.log('value passed in singlepokemon(is it equal to buttonclickdata)', pokemonName)
    return <PokemonRow pokemonName={pokemonName}/>
  }
  else {
    return <Typography sx={{mb: 3}}>No pokemon Selected</Typography>
  }
}

export default React.memo(SinglePokemon)