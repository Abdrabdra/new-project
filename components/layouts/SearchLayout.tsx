import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, Button, Grid, Hidden } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import SearchFilters from '../SearchFilters';
import { StyledTitle } from '../styled-components/StyledText';

const SearchLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const { query } = router;
  const { search } = query;
  const [mobileFiltersView, setMobileFiltersView] = useState(false)

  return (
    <Grid container columns={{ xs: 4, sm: 9, md: 12 }} spacing={2}>
      <Box width={'100%'} mt={'1rem'} px={'1rem'} display={'flex'} justifyContent={'space-between'}>
        <StyledTitle mt={'16px'}>Результаты поиска{search && `: ${search}`}</StyledTitle>
        <Hidden mdUp>
          <Button variant='contained' sx={{ height: '40px', width: '40px', mt: '16px' }} size="small" onClick={() => setMobileFiltersView(state => !state)}>
            <FilterAltIcon />
          </Button>
        </Hidden>
      </Box>
      <Hidden mdDown>
        <Grid item xs={12} sm={12} md={3} lg={3} mt={'0.5rem'}>
          <SearchFilters />
        </Grid>
      </Hidden>
      <Hidden mdUp>
        {
          (mobileFiltersView) &&
          <Grid item xs={12} sm={12} md={3} lg={3} mt={'0.5rem'}>
            <SearchFilters />
          </Grid>
        }
      </Hidden>

      <Grid item xs={12} sm={12} md={9} lg={9}>
        {children}
      </Grid>
    </Grid >
  );
};

export default SearchLayout;
