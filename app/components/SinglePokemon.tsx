import React from "react";
import PokemonRow from "./PokemonRow";
import styles from "./SinglePokemon.module.css"

interface SinglePokemonProps {
  pokemonName: string | null;
}

function SinglePokemon({pokemonName}: SinglePokemonProps){
  

  if (pokemonName) {
    console.log('value passed in singlepokemon(is it equal to buttonclickdata)', pokemonName)
    return <PokemonRow pokemonName={pokemonName}/>
  }
  else {
    return <div className={styles.NoPokemon}>No pokemon selected.</div>
  }
}

export default React.memo(SinglePokemon)