import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { trpc } from "../utilities/client";

type PokemonProps = {
  pokemonName: string;
}

// renders a row with the name, id, type and sprite image
export default function PokemonRow({pokemonName}: PokemonProps){
  
  /* const getData = async (pokemonName: string) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon?name=` + pokemonName
    const response = await fetch(
      url,
    )
    const data = await response.json()
    console.log('getData', data)
    return data
  } */

  const { isPending, error, data: pokemon } = trpc.getPokemon.useQuery(pokemonName);

  console.log('Data fetching was successful. Data is', pokemon)

  if (isPending) {
    return <div>'Loading...'</div>;
  }

  if  (error) {
    return 'An error has occurred: ' + error.message;
  }

  // change to tRPC
  /* const { isPending, error, data: pokemon } = useQuery({
    queryKey: ['pokemonData'],
    queryFn: () => (getData(pokemonName)),
    });
  
  cosole.log('Data fetching was successful. Data is', pokemon)

  if (isPending) {
    return <div>'Loading...'</div>;
  }

  if  (error) {
    return 'An error has occurred: ' + error.message;
  } */

  return(
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
          <TableRow>
            <TableCell>Pokemon ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Sprite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={pokemon!.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pokemon!.id}
              </TableCell>
              <TableCell align="right">{pokemon!.name}</TableCell>
              <TableCell align="right">{pokemon!.type}</TableCell>
              <TableCell align="right">
                <Image width={130} height={110} src={pokemon!.sprite} alt={`${pokemon!.name}'s Image`} />
              </TableCell>
            </TableRow>
        </TableBody>
    </Table>
  </TableContainer>
  );
}