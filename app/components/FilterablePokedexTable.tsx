'use client';

import { useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "./PokedexTable";



// Gets the type of pokemon from client and displays it
export default function FilterablePokedexTable() {
  const [selectedType, selectType] = useState<string | undefined>('')
  
  return (
    <>
      <PokemonTypeSelection selectedType={selectedType} selectType={selectType} />
      <PokedexTable pokemonArray={['']} pokemonType={selectedType} />
    </>
  );
}