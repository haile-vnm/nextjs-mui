import PrintRecipe from '@/components/recipe/print-recipe';
import SaveRecipe from '@/components/recipe/save-recipe';
import { Recipe } from '@/models/recipe';
import {
  AccessTimeOutlined,
  ScatterPlot
} from '@mui/icons-material';
import { Box, Breadcrumbs, Divider, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';

export default async function ReceiptDetail({ params }: { params: { id: string }}) {
  const recipe: Recipe = await fetch(`${process.env.API_ORIGIN}/api/recipes/${params.id}`)
    .then(res => res.json());

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/recipes">
      Recipes
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={`/categories/${recipe.category.id}`}
    >
      {recipe.category.title}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={`/categories/${recipe.subcategory.id}`}
    >
      {recipe.subcategory.title}
    </Link>
  ];

  return <>
    <Grid container spacing={4} width={'100%'}>
      <Grid item xs={12} md={6}>
        <Box>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Typography variant={'h4'}>{recipe.title}</Typography>
          <Box marginTop={4}>
            { recipe.desc }
          </Box>

          <Box display={'flex'} marginY={2} fontWeight={500}>
            <Box display={'flex'} marginRight={1}>
              <AccessTimeOutlined fontSize={'large'}></AccessTimeOutlined>
            </Box>
            <Box display={'flex'} gap={3}>
              {
                recipe.steps.map((step, index) => (<Box key={index}>
                  <p className='uppercase text-xs'>{step.title}</p>
                  <p>{step.durationMin}</p>
                </Box>))
              }
            </Box>
          </Box>
          <Divider></Divider>
          <Box display={'flex'} marginY={1} fontWeight={500} justifyContent={'space-between'}>
            <Box display={'flex'}>
              <Box display={'flex'} marginRight={1}>
                <ScatterPlot fontSize={'large'}></ScatterPlot>
              </Box>
              <Box>
                <p className='uppercase text-xs'>Yeild</p>
                <p>
                  {
                    recipe.yield.map(item => [item.amount, item.title].join(' ')).join(', ')
                  }
                </p>
              </Box>
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'} gap={1} flexWrap={'wrap'}>
              <Box>
                <SaveRecipe recipe={recipe}></SaveRecipe>
              </Box>
              <Box>
                <PrintRecipe recipe={recipe}></PrintRecipe>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center' } }}>
          <Image src={recipe.coverImage} width={500} height={0} alt={recipe.title}></Image>
        </Box>
      </Grid>
    </Grid>
  </>
}
