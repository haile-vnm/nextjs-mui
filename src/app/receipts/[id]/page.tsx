import Button from '@/components/ui/button';
import { Recipe } from '@/models/recipe';
import {
  AccessTimeOutlined,
  Add,
  LocalPrintshopOutlined,
  ScatterPlot
} from '@mui/icons-material';
import { Box, Breadcrumbs, Divider, Link, Typography } from '@mui/material';
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
    <div className='grid grid-cols-2 gap-6'>
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
          <Box display={'flex'} justifyContent={'flex-end'} gap={1}>
            <Box>
              <Button variant={'outlined'} size={'small'} color={'primary'} className='!mr-2 !mb-2'>
                <Add></Add> Save Recipe
              </Button>
              <Button variant={'outlined'} size={'small'} color={'primary'} className='!mb-2'>
                <LocalPrintshopOutlined></LocalPrintshopOutlined> Print
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Image src={recipe.coverImage} width={500} height={0} alt={recipe.title}></Image>
      </Box>
    </div>
  </>
}
