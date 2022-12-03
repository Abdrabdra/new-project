import StarIcon from '@mui/icons-material/Star';
import { Box, Checkbox, FormControlLabel, Grid, Hidden, Skeleton, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useGetSpecsListQuery } from '../store/product/productEndpoints';
import CustomAccordion from './CustomAccordion';
import { StyledContainedButton } from './styled-components/StyledButton';

const SearchFilters = () => {
  const router = useRouter();
  const { query } = router;
  const { categoryId, category, search } = query;
  const { data: specs, isLoading, isFetching } = useGetSpecsListQuery(categoryId as string, { refetchOnMountOrArgChange: true });

  const [filters, setFilters] = useState({
    priceFrom: '',
    priceTo: '',
    specs: '',
    madeinkz: true
  })

  React.useEffect(() => {
    const queryParams = {} as any;
    if (filters.priceFrom.length > 0) queryParams.priceFrom = filters.priceFrom
    if (filters.priceTo.length > 0) queryParams.priceTo = filters.priceTo
    if (filters.specs.length > 0) queryParams.specs = filters.specs
    if (filters.madeinkz) queryParams.madeinkz = filters.madeinkz
    router.push(router.asPath, { query: filters })
  }, [filters])

  console.log('Specs')
  console.log(specs)

  return (
    <>
      {isLoading || isFetching ?
        <>
          <Skeleton animation='wave' height='150px' />
          <Skeleton animation='wave' height='150px' />
          <Skeleton animation='wave' height='150px' />
        </>
        :
        <>
          {category &&
            <CustomAccordion title="Категория">
              <StyledContainedButton fullWidth size="small">{category}</StyledContainedButton>
            </CustomAccordion>
          }
          <CustomAccordion title="Предложение и рейтинг">
            <FormControlLabel
              sx={{ width: '100%' }}
              control={<Checkbox checked={filters.madeinkz} onChange={(e) => setFilters(state => ({ ...state, madeinkz: e.target.checked }))} />}
              label="Made in KZ"
              onChange={(e) => setFilters(state => ({ ...state, madeinkz: !e.currentTarget }))}
            />
            <FormControlLabel
              sx={{ width: '100%' }}
              control={<Checkbox />}
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  1 или более
                  {Array.from(new Array(2)).map((i) => (
                    <StarIcon key={i} sx={{ fill: '#F2C94C', fontSize: '18px' }} />
                  ))}
                </div>
              }
            />
            <FormControlLabel
              sx={{ width: '100%' }}
              control={<Checkbox />}
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  2 или более
                  {Array.from(new Array(3)).map((i) => (
                    <StarIcon key={i} sx={{ fill: '#F2C94C', fontSize: '18px' }} />
                  ))}
                </div>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  3 или более
                  {Array.from(new Array(4)).map((i) => (
                    <StarIcon key={i} sx={{ fill: '#F2C94C', fontSize: '18px' }} />
                  ))}
                </div>
              }
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  4 или более
                  {Array.from(new Array(5)).map((i) => (
                    <StarIcon key={i} sx={{ fill: '#F2C94C', fontSize: '18px' }} />
                  ))}
                </div>
              }
              sx={{ width: '100%' }}
            />
          </CustomAccordion>

          <CustomAccordion title="Цена">
            <Grid container>
              <Grid item xs={6}>
                <Typography color="#999999">От</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="#999999">До</Typography>
              </Grid>
              <Grid item xs={12} width={'100%'} p="0.2rem" borderRadius={'5px'}>
                <TextField
                  placeholder="Мин."
                  sx={{ width: '50%' }}
                  variant="standard"
                  value={filters.priceFrom}
                  onChange={(e) => setFilters(state => ({ ...state, priceFrom: e.target.value }))}
                />
                <TextField
                  placeholder="Макс."
                  sx={{ width: '50%' }}
                  variant="standard"
                  value={filters.priceTo}
                  onChange={(e) => setFilters(state => ({ ...state, priceTo: e.target.value }))}
                />
              </Grid>
            </Grid>
          </CustomAccordion>

          {specs && specs.map((spec) => (
            <CustomAccordion title={spec.title}>
              <Box maxHeight={'200px'}>
                {spec.values.map((value) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={value.value}
                    sx={{ width: '100%' }}
                  />
                ))}
              </Box>
            </CustomAccordion>
          ))}

          <CustomAccordion title="Скидка">
            <FormControlLabel
              control={<Checkbox />}
              label="От 10% и выше"
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="От 30% и выше"
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="От 50% и выше"
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="От 70% и выше"
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Почти даром"
              sx={{ width: '100%' }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Распродажа дня"
              sx={{ width: '100%' }}
            />
          </CustomAccordion>
          <Hidden mdUp>
            <StyledContainedButton fullWidth sx={{ mt: 1 }}>
              Искать
            </StyledContainedButton>
          </Hidden>
        </>
      }
    </>
  )
}

export default SearchFilters