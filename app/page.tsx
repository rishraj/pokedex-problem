import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import PokemonRow from "./components/PokemonRow";
import SelectPokemon from "./components/SelectPokemon";


/* async function getPokemons(){
  const pokemon = await prisma.pokemon.findUnique({
    where: {
      name: 'Charizard',
    }
  })

  return pokemon;
} */

export default async function Home() {
  //const pokemon = await getPokemons();
  //console.log({pokemon})
  return (
    <>
      <h1>Good Luck!!</h1>
      <SelectPokemon />
    </>
  );
}
