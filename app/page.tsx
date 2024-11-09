import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import SelectPokemon from "./components/SelectPokemon";
import ToDoList from "./components/ToDoList";


async function getPokemons(){
  /* const pokemons = await prisma.pokemon.findMany({
    where: {
      type: {
        equals: 'normal',
      },
    },
  }) */
  const pokemon = await prisma.pokemon.findUnique({
    where: {
      name: 'Charizard',
    }
  })

  return pokemon;
}

export default async function Home() {
  const pokemon = await getPokemons();
  console.log({pokemon})
  return (
    <>
      <h1>Good Luck!!</h1>
      <p>{pokemon!.name}</p>
      <ToDoList />
    </>
  );
}
