import React from "react";
import Layout from "../../../components/layouts/Layout";
import ProfileLayout from "../../../components/layouts/ProfileLayout";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { Box, Grid, Hidden, Paper, Stack, Typography } from "@mui/material";
import { StyledContainedButton } from "../../../components/styled-components/StyledButton";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import Link from "next/link";
import { StyledOrderStatusChip } from "../../../components/styled-components/StyledChip";
import { useGetOrdersQuery } from "../../../store/order/orderEndpoints";
import { $imageApi } from "../../../api";
import { StyledText, StyledTitle } from "../../../components/styled-components/StyledText";
import { priceFormatter } from "../../../utils/number-formatter";
import { IOrderStatuses } from "../../../types/IOrder";

const OrderPage = () => {
  const { data: orders } = useGetOrdersQuery("order-history");

  console.log(orders)

  return (
    <ProfileLayout>
      <Paper
        sx={{
          height: "100%",
          borderRadius: "20px",
          padding: "1rem 1.5rem",
        }}
        elevation={0}
      >
        <Typography
          sx={{
            marginBottom: "1.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          История заказов
        </Typography>
        <Stack direction={'column'} spacing={'1rem'}>
          {orders?.map((order) => (
            <Box
              sx={{
                padding: "5px 10px",
                justifyContent: "space-between",
                backgroundColor: "#F4F4F4",
                borderRadius: "10px",
                ':hover': { bgcolor: '#F0F0F0' }
              }}
            >
              <StyledTitle>Заказ #{order.id}</StyledTitle>
              <StyledText>Общая стоимость: <b>{order.totalPrice} KZT</b></StyledText>
              <StyledText>Адрес доставки: {order.city}, {order.street} {order.building} {order.apartment}</StyledText>
            </Box>
          ))}
        </Stack>
        {/* {(orders && orders?.length > 0) ? (
          <>
            <Grid container spacing={2} gridAutoColumns={"1fr"}>
              {orders
                .slice(0)
                .reverse()
                .map((order) =>
                  order.shopOrders.map((shopOrder) =>
                    shopOrder.products.map((productOrder) => (
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            padding: "5px 10px",
                            justifyContent: "space-between",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "10px",
                            ':hover': { bgcolor: '#F0F0F0' }
                          }}
                        >
                          <Grid container spacing={2}>
                            <Grid
                              xs
                              item
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              <img src={`${`${$imageApi}/${productOrder.product.image}`}`} style={{ width: '100px', height: '100px', objectFit: 'contain', marginRight: '8px' }} />
                              <Stack>
                                <StyledTitle>
                                  {productOrder.product.title}
                                </StyledTitle>
                                <StyledText>
                                  {priceFormatter.format(productOrder.product.price * productOrder.product.discount / 100)}
                                </StyledText>
                              </Stack>
                            </Grid>
                            <Grid item sx={{ display: "flex", alignItems: "center" }}>
                              <StyledText>
                                <StyledText
                                  sx={{
                                    color: "#999999",
                                    display: "flex",
                                  }}
                                >
                                  Количество:
                                  <StyledText>
                                    {productOrder.qty}
                                  </StyledText>
                                </StyledText>
                              </StyledText>
                            </Grid>
                            <Grid
                              item
                              xs
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                              }}
                            >
                              <StyledOrderStatusChip
                                label={`Статус: ${IOrderStatuses[productOrder.status]}`}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    ))
                  )
                )}
            </Grid>
          </>
        ) : (
          <Grid
            container
            sx={{
              height: "100%",
              display: "flex",
              marginTop: "-48px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Hidden xsDown>
              <Stack alignItems={"center"}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: ".6rem",
                  }}
                >
                  Ваша история чиста
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "300",
                    fontSize: "14px",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  Купите товары, чтобы у вас появилась история покупок
                </Typography>
                <AccessTimeOutlinedIcon
                  sx={{
                    color: "#E3E3E3",
                    width: "110px",
                    height: "80px",
                    marginBottom: "1rem",
                  }}
                />
                <Link href="/" passHref>
                  <a>
                    <StyledContainedButton sx={{ textTransform: "capitalize" }}>
                      Перейти в главную
                    </StyledContainedButton>
                  </a>
                </Link>
              </Stack>
            </Hidden>
          </Grid>
        )} */}
      </Paper>
    </ProfileLayout>
  );
};

export default OrderPage;
