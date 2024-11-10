import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { trpc } from "../utilities/client";

type PokedexTableProps = {
  pokemonArray: string[];
  pokemonType?: string;
}

// Accepts a pokemon list or pokemon type and displays them in a table
function PokedexTable({pokemonArray, pokemonType}: PokedexTableProps){
  console.log('pokemonArray at PokedexTable is', pokemonArray, 'and pokemonType is', pokemonType)

  if (pokemonType) {
    let queryResult;
    if (pokemonType !== 'all') {
      queryResult = trpc.getTypePokemons.useQuery(pokemonType)
    }
    else {
      queryResult = trpc.getPokemons.useQuery(pokemonArray)
    }

    if (queryResult.isPending) {
      return <Typography variant="h3" sx={{mb: 3}}>Loading...</Typography>;
    }
  
    if  (queryResult.error) {
      return 'An error has occurred: ' + queryResult.error.message;
    }
  
    return (
      <TableContainer sx={{mb: 5}} component={Paper} elevation={5}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
            <TableRow>
              <TableCell>Pokemon ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Sprite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queryResult.data.map((pokemon) => (
              <TableRow
                key={pokemon.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {pokemon.id}
                </TableCell>
                <TableCell align="center">{pokemon.name}</TableCell>
                <TableCell align="center">{pokemon.type}</TableCell>
                <TableCell align="center">
                  <Image width={130} height={110} src={pokemon.sprite} alt={`${pokemon.name}'s Image`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  else {
    return (
      <Typography sx={{mb: 3}}>No pokemon Selected</Typography>
    )
  }
}

export default React.memo(PokedexTable)