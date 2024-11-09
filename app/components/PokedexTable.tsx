import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Pokemon } from "../types/pokemon";
import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { trpc } from "../utilities/client";

type PokedexTableProps = {
  pokemonArray: string[];
  pokemonType?: string;
}

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
      return <div>Loading...</div>;
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




  /* function generateUrl(pokemonArray: string[]): string {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/backend/pokemons`;
    const queryParams = pokemonArray.map((name, index) => `name[${index}]=${encodeURIComponent(name)}`).join("&");
    return `${baseUrl}?${queryParams}`;
  }

  const getTypeData = async (pokemonType: string): Promise<Pokemon[]> => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/backend/pokemonstype?type=` + pokemonType
    console.log('url generated is', url)
    const response = await fetch(
      url,
    )
    const data = await response.json()
    console.log('getData after api return', data)
    return data
  }

  const getData = async (pokemonArray: string[]): Promise<Pokemon[]> => {
    const url = generateUrl(pokemonArray)
    console.log('url generated is', url)
    const response = await fetch(
      url,
    )
    const data = await response.json()
    console.log('getData after api return', data)
    return data
  }
  
  if (pokemonType) {
    let queryResult: UseQueryResult<Pokemon [] , Error>;
    if (pokemonType !== 'all') {
      queryResult = useQuery({
          queryKey: ['pokemonsTypeData'],
          queryFn: () => (getTypeData(pokemonType)),
          });
    }
    else {
       queryResult = useQuery({
          queryKey: ['pokemonsData'],
          queryFn: () => (getData(pokemonArray)),
          });
      }
  
    
    if (queryResult.isPending) {
      return <div>'Loading...'</div>;
    }
  
    if  (queryResult.error) {
      return 'An error has occurred: ' + queryResult.error.message;
    }
  
    return (
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
            {queryResult.data.map((pokemon) => (
              <TableRow
                key={pokemon.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {pokemon.id}
                </TableCell>
                <TableCell align="right">{pokemon.name}</TableCell>
                <TableCell align="right">{pokemon.type}</TableCell>
                <TableCell align="right">
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
      <p>No pokemon Selected</p>
    )
  } */
}

export default React.memo(PokedexTable)