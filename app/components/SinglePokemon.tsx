import React from "react";
import PokemonRow from "./PokemonRow";
import styles from "./SinglePokemon.module.css"
import { Typography } from "@mui/material";

interface SinglePokemonProps {
  pokemonName: string | null;
}

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