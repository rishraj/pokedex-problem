'use client'

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import MultiplePokemons from './MultiplePokemons';
import allPokemonData from '../utilities/data';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = allPokemonData.map(pokemon => pokemon.name)

// Gets input of multiple pokemons from the client
export default function SelectPokemons() {

  const [buttonClickData, setButtonClickData] = React.useState<string[] | string>('');
  
  const [data, setData] = React.useState<string[] | string>('');

  const [pokemonName, setPokemonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof pokemonName>) => {
    const {
      target: { value },
    } = event;
    console.log('value of state of autocomplete data', value)
    setData(value)
    setPokemonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = () => {
    console.log('value of state of buttonclick data', data)
    setButtonClickData(data)
  }

  return (
    <>
      <div>
        <form>
          <FormControl sx={{ width: 800}}>
            <InputLabel id="demo-multiple-checkbox-label">Select Multiple Pokemons</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={pokemonName}
              onChange={handleChange}
              input={<OutlinedInput label="Select Multiple Pokemons" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
              sx={{width: 300}}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={pokemonName.includes(name)} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 100 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <MultiplePokemons pokemonNames={buttonClickData}/>
          </FormControl>
        </form>
      </div>
    </>
  );
}
