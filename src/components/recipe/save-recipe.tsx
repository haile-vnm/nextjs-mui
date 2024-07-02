'use client';

import { Recipe } from '@/models/recipe';
import Button from '../ui/button';
import { AddOutlined } from '@mui/icons-material';

interface Props {
  recipe: Recipe;
}
export default function SaveRecipe({ recipe }: Props) {
  const saveRecipe = () => {
    alert(`Saved "${recipe.title}"`)
  }

  return (<Button onClick={saveRecipe} size='small' color='primary' variant='outlined'>
    <AddOutlined></AddOutlined>&nbsp;Save Recipe
  </Button>)
}
