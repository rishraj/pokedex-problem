import SelectPokemon from "./components/SelectPokemon";
import SelectPokemons from "./components/SelectPokemons";
import { Box, Container } from "@mui/material";
import FilterablePokedexTable from "./components/FilterablePokedexTable";


export default async function Home() {
  return (
    <Container component='main' maxWidth='lg'>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box component="section" 
          sx={{
            alignItems: 'center',
            ml: 8,
            }}>

          <SelectPokemon />
          <SelectPokemons />
          <FilterablePokedexTable />

        </Box>
      </Box>
    </Container>
  );
}
