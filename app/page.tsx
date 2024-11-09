import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";

async function getPokemons(){
  /* const pokemons = await prisma.pokemon.findMany({
    where: {
      type: {
        equals: 'normal',
      },
    },
  }) */
  const pokemons = await prisma.pokemon.findMany({
    where: {
      type: {
        equals: 'Fire',
      }
    }
  })

  return pokemons;
}

export default async function Home() {
  const pokemons = await getPokemons();
  console.log({pokemons})
  return (
    <>
      <h1>Good Luck!!</h1>
    </>
  );
}
