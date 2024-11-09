import Image from "next/image";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { trpc } from "../utilities/client";

type PokemonProps = {
  pokemonName: string;
}

// Accepts pokemon name and displays it in a table
export default function PokemonRow({pokemonName}: PokemonProps){

  const { isPending, error, data: pokemon } = trpc.getPokemon.useQuery(pokemonName);

  console.log('Data fetching was successful. Data is', pokemon)

  if (isPending) {
    return <div>Loading...</div>;
  }

  if  (error) {
    return 'An error has occurred: ' + error.message;
  }

  return(
  <TableContainer sx={{mb: 5}} component={Paper} elevation={5}>
    <Table sx={{ minWidth: 500}} size="small" aria-label="simple table">
    <TableHead>
          <TableRow>
            <TableCell>Pokemon ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Sprite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          <TableRow
              key={pokemon!.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" >
                {pokemon!.id}
              </TableCell>
              <TableCell align="center">{pokemon!.name}</TableCell>
              <TableCell align="center">{pokemon!.type}</TableCell>
              <TableCell align="center">
                <Image width={130} height={110} src={pokemon!.sprite} alt={`${pokemon!.name}'s Image`} />
              </TableCell>
              
            </TableRow>
          </TableBody>
    </Table>
  </TableContainer>
  );
}