import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import PokemonRow from "./components/PokemonRow";
import SelectPokemon from "./components/SelectPokemon";
import SelectPokemons from "./components/SelectPokemons";
import { Box, Container } from "@mui/material";
import FilterablePokedexTable from "./components/FilterablePokedexTable";


export default async function Home() {
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="section">

          <SelectPokemon />
          <SelectPokemons />
          <FilterablePokedexTable />

        </Box>
      </Box>
    </Container>
  );
}
