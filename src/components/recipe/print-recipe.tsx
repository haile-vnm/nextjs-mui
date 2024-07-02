'use client';

import { Recipe } from '@/models/recipe';
import Button from '../ui/button';
import { AddOutlined, PrintOutlined } from '@mui/icons-material';

interface Props {
  recipe: Recipe;
}
export default function PrintRecipe({ recipe }: Props) {
  const print = () => {
    alert(`Printed "${recipe.title}"`)
  }

  return (<Button onClick={print} size='small' color='primary' variant='outlined'>
    <PrintOutlined></PrintOutlined>&nbsp;Print
  </Button>)
}
