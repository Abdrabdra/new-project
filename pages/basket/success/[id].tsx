import { Grid, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { StyledContainedButton } from '../../../components/styled-components/StyledButton';
import { StyledText, StyledTitle } from '../../../components/styled-components/StyledText';

const BasketSuccessPage = () => {
  const router = useRouter();
  const { id } = router.query;
  React.useEffect(() => {
    alert('поменять статус заказа!')
  }, [])
  return (
    <Grid container spacing={3}>
      <Paper sx={{ mt: '2rem', padding: '1rem', width: '100%', textAlign: 'center' }}>
        <Grid item xs={12} mb={'16px'}>
          <StyledTitle>Оплата прошла успешно!</StyledTitle>
        </Grid>
        <Grid item xs={12} mb={'16px'}>
          <StyledText>Ваш заказ принят и находится в обработке!</StyledText>
        </Grid>
        <Grid item xs={12} mb={'48px'}>
          <StyledText>Ожидайте доставку в течение 2-4 дней!</StyledText>
        </Grid>
        <Grid item xs={12}>
          <StyledContainedButton>Продолжить поиск товара</StyledContainedButton>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default BasketSuccessPage