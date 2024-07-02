import Button from '@/components/ui/button';
import { Recipe } from '@/models/recipe';
import { ScatterPlot } from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export default async function  Receipts() {
  const recipes: Recipe[] = await fetch(`${process.env.API_ORIGIN}/api/recipes`).then(res => res.json());

  return (<>
    <Grid container spacing={2}>
      {
        recipes.map(recipe => (
          <Grid item sm={12} md={4} key={recipe.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                sx={{ height: 140 }}
                image={recipe.coverImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ScatterPlot sx={{ marginRight: 1 }}></ScatterPlot>
                  {
                    recipe.yield.map(item => [item.amount, item.title].join(' ')).join(', ')
                  }
                </Typography>
              </CardContent>
              <CardActions sx={{ marginTop: 'auto' }}>
                <Link href={`/receipts/${recipe.id}`}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  </>)
}
