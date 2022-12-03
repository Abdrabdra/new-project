import { Box, Button, Divider, Fab, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { $imageApi } from '../../api';
import { useChangeBasketItemQtyMutation, useGetBasketItemsQuery } from '../../store/basket/basketEndpoints';
import { IBasketItemChangeQty } from '../../types/IBasket';
import { priceFormatter } from '../../utils/number-formatter';
import { StyledContainedButton } from '../styled-components/StyledButton';
import { StyledText, StyledTitle } from '../styled-components/StyledText';

interface Props {
  handleNext: () => void
}

const BasketProductsPaper: React.FC<Props> = ({ handleNext }) => {
  const { data: basket, isLoading, isFetching, isError, error } = useGetBasketItemsQuery('basket-products');
  const [updateBasket, { isLoading: updateLoading }] = useChangeBasketItemQtyMutation();

  const loading = () => {
    return isLoading || isFetching || updateLoading
  }

  function add(accumulator: number, a: number) {
    return accumulator + a;
  }

  const handleChangeQty = ({ id, qty }: IBasketItemChangeQty) => {
    updateBasket({ id, qty })
  }

  return (
    <Grid container spacing={2} gridTemplateRows={'minmax(200px, 1fr)'}>
      <Grid item xs={12} sm={12} md={12} lg={9}>
        <Paper sx={{ mt: '2rem', padding: '1rem' }}>
          <Typography gutterBottom>Товары</Typography>
          <Divider />
          <Box p={1}>
            {(basket && basket?.length > 0) ?
              basket.map((item) => (
                <Grid container direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                  <Grid item xs display={'flex'}>
                    <img src={`${$imageApi}/${item.product.image}`} width='80px' height='80px' style={{ borderRadius: '10px', objectFit: 'cover' }} />
                    <StyledText ml={'8px'} sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                      {item.product.title}
                    </StyledText>
                  </Grid>
                  <Grid item xs={4} >
                    <Grid container alignItems={'center'}>
                      <Grid item xs={6}>
                        <Grid container alignItems={'center'}>
                          <Grid item>
                            <Fab
                              size='small'
                              onClick={() => handleChangeQty({ id: item.id, qty: item.qty - 1 })}
                              sx={{ boxShadow: 'none', backgroundColor: '#FFFFFF', border: '1px solid #AAAAAA' }}
                            >
                              —
                            </Fab>
                          </Grid>
                          <Grid item>
                            <Typography fontWeight='bold' mx='1rem'>{item.qty}</Typography>
                          </Grid>
                          <Grid item>
                            <Fab
                              size='small'
                              onClick={() => handleChangeQty({ id: item.id, qty: item.qty + 1 })}
                              sx={{ boxShadow: 'none', backgroundColor: '#FFFFFF', border: '1px solid #AAAAAA' }}
                            >
                              +
                            </Fab>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6} textAlign={'end'}>
                        <StyledTitle fontWeight='bold'>
                          {priceFormatter.format(item.product.discount === 0 ? item.product.price : item.product.price * (1 - item.product.discount / 100))}
                        </StyledTitle>
                        {item.product.discount > 0 &&
                          <StyledText color='#AAAAAA' sx={{ textDecoration: 'line-through' }}>
                            {priceFormatter.format(item.product.price)}
                          </StyledText>
                        }
                        <Button
                          size='small'
                          sx={{ color: '#8A3FFC', textDecoration: 'underline', fontSize: '12px' }}
                          onClick={() => handleChangeQty({ id: item.id, qty: 0 })}
                        >
                          Удалить товар
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))
              :
              <StyledTitle>Ваша корзина пустая.</StyledTitle>
            }
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3}>
        <Paper sx={{ mt: '2rem', padding: '2rem' }}>
          <Typography gutterBottom>Оформить заказ</Typography>
          <Divider />
          <Box sx={{ display: 'flex', my: '1rem' }}>
            <Typography sx={{ fontSize: '24px', mr: '0.5rem' }}>
              Сумма:
            </Typography>
            <Typography sx={{ fontSize: '24px', color: '#8A3FFC' }}>
              {basket?.map(item => item.totalPrice).reduce(add, 0)}
            </Typography>
          </Box>
          <Typography sx={{ mb: '2rem', fontSize: '14px' }}>
            Ожидайте заказ до 01.01.2022
          </Typography>
          {basket && basket?.length === 0 ?
            <Link href='/' passHref>
              <StyledContainedButton
                size='large'
                fullWidth
                disabled={isLoading}
              >
                Поиск товара
              </StyledContainedButton>
            </Link>
            :
            <StyledContainedButton
              size='large'
              fullWidth
              onClick={handleNext}
              disabled={isLoading}
            >
              Оформить заказ
            </StyledContainedButton>
          }

        </Paper>
      </Grid>
    </Grid>
  )
}

export default BasketProductsPaper
