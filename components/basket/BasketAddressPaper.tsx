import { Divider, FormHelperText, Grid, Menu, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { useMakeOrderMutation } from '../../store/order/orderEndpoints'
import { orderSchema } from '../../utils/validation'
import { StyledContainedButton, StyledOutlinedButton } from '../styled-components/StyledButton'

const BasketAddressPaper: React.FC = () => {
  const router = useRouter();
  const [order, { data, isLoading, isSuccess }] = useMakeOrderMutation();

  const formik = useFormik({
    initialValues: {
      apartment: '',
      building: '',
      street: '',
      city: '',
      cardsId: null,
      phone: '',
      date: '2022-05-22'
    },
    onSubmit: async (values) => {
      order({ ...values, successUrl: 'https://affectionate-hugle-2b7512.netlify.app/basket/success', errorUrl: 'https://affectionate-hugle-2b7512.netlify.app/basket/error' });
    },
    validationSchema: orderSchema
  })

  React.useEffect(() => {
    if (data?.url) {
      router.push(data.url)
    }
  }, [data])

  const { values, handleSubmit, handleChange, errors } = formik;

  const handleBack = () => {
    router.push('/basket')
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Paper sx={{ padding: '2rem' }}>
          <form onSubmit={handleSubmit}>
            <Typography gutterBottom>Оформление заказа</Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Typography fontWeight={600}>Адрес</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                {/* <Typography fontWeight={600} m={1}>Адрес</Typography> */}
                <TextField
                  placeholder='Город'
                  name='city'
                  onChange={handleChange}
                  value={values.city}
                  fullWidth
                  helperText={errors?.city}
                // error={errors?.city ? true : false}
                />
                <FormHelperText />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  placeholder='Улица/Микрорайон'
                  name='street'
                  onChange={handleChange}
                  value={values.street}
                  fullWidth
                  helperText={errors?.street}
                // error={errors?.street ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  placeholder='Дом/Строение'
                  name='building'
                  onChange={handleChange}
                  value={values.building}
                  fullWidth
                  helperText={errors?.building}
                // error={errors?.building ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  placeholder='Квартира/Офис'
                  name='apartment'
                  onChange={handleChange}
                  value={values.apartment}
                  fullWidth
                />
              </Grid>
              {/* <Grid item xs={12} sm={12}>
                <Typography fontWeight={600}>Тип оплаты</Typography>
                <Typography variant="caption">
                  Если у вас нет сохраненной карты, вы можете заполнить данные для оплаты на следующей странице
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={null}
                  open={false}
                  // onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem>Карта 1</MenuItem>
                  <MenuItem>Карта 2</MenuItem>
                </Menu>
              </Grid> */}
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  placeholder='Номер телефона получателя'
                  name='phone'
                  onChange={handleChange}
                  value={values.phone}
                  fullWidth
                  helperText={errors?.phone}
                // error={errors?.phone ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'}>
                <StyledOutlinedButton
                  fullWidth
                  onClick={handleBack}
                  sx={{ mr: '8px' }}
                  disabled={isLoading}
                >
                  Назад
                </StyledOutlinedButton>
                <StyledContainedButton
                  fullWidth
                  type='submit'
                  sx={{ ml: '8px' }}
                  disabled={isLoading}
                >
                  Оплатить
                </StyledContainedButton>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default BasketAddressPaper
